/* global ReactDOM */

const handleReload = () => location.reload();
document.addEventListener('click', handleReload, { capture: true });

// --------------------------------------------
// [모듈: 랜덤 카운트 업]
// --------------------------------------------

// 최솟값 MIN
const MIN = 20;

// 최댓값 MAX
const MAX = 99;

// 랜덤값을 반환하는 유틸리티 getRandomMinMax 함수
const getRandomMinMax = (min = MIN, max = MAX) => {
  if (min >= max) throw new Error('min 값이 max 값과 같거나 큽니다.');
  return Math.round(Math.random() * (max - min)) + min;
};

// 목표 카운트 TARGET_COUNT 설정
const TARGET_COUNT = getRandomMinMax(30, 45);

// 문서 타이틀 업데이트
document.title = `(${TARGET_COUNT}) ${document.title}`;

// count 초깃값
let count = 0;

// 스탭 값
let step = 1;

// 초당 프레임 수
const FPS = 20;

// DOM 컨테이너 요소 참조
const container = document.getElementById('root');

// React DOM Root 생성
const root = ReactDOM.createRoot(container);

// React 컴포넌트(component) - 재사용 (React 요소를 여러 번 사용할 수 있도록 한다.)
// - 함수형(functional) 타입 - 함수가 React 요소(JSX)를 반환
const RandomCountUp = ({ isComplete, count }) => (
  <output style={isComplete ? { animationName: 'none' } : undefined}>
    {count}
  </output>
);

// - 클래스(class) 타입
class App extends React.Component {
  render() {
    return <div id="app">{this.props.children}</div>;
  }
}

// 애니메이션 종료 스타일
// const completedStyle = { animationName: 'none' };

// render 함수
function render({ count, isComplete = false } = {}) {
  root.render(
    <React.StrictMode>
      <App>
        <RandomCountUp count={count} isComplete={isComplete} />
      </App>
    </React.StrictMode>
  );
}

render({ count });

// animate 함수
function animate() {
  // 상태 업데이트
  count += step;
  // count 상태(state) 값에 의존하는 파생 상태(derived state) 설정
  let isComplete = count >= TARGET_COUNT;
  render({ count, isComplete });
  isComplete && cleanup();
}

function cleanup() {
  clearInterval(clearIntervalId);
}

// 타이머 설정
const clearIntervalId = setInterval(animate, 1000 / FPS);
