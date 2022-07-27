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

// render 함수
function render({ count, isComplete = false } = {}) {
  const completedStyle = { animationName: 'none' };
  root.render(
    <output style={isComplete ? completedStyle : undefined}>{count}</output>
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
  console.log('클린 업!');
  clearInterval(clearIntervalId);
}

// 타이머 설정
const clearIntervalId = setInterval(animate, 1000 / FPS);
