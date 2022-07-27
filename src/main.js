import App from './components/App.js';
import RandomCountUp from './components/RandomCountUp.js';

const handleReload = () => location.reload();
document.addEventListener('click', handleReload, { capture: true });

const MIN = 20;

const MAX = 99;

const getRandomMinMax = (min = MIN, max = MAX) => {
  if (min >= max) throw new Error('min 값이 max 값과 같거나 큽니다.');
  return Math.round(Math.random() * (max - min)) + min;
};

const TARGET_COUNT = getRandomMinMax(30, 45);

document.title = `(${TARGET_COUNT}) ${document.title}`;

let count = 0;

let step = 1;

const FPS = 20;

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

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

function animate() {
  count += step;

  let isComplete = count >= TARGET_COUNT;
  render({ count, isComplete });
  isComplete && cleanup();
}

function cleanup() {
  clearInterval(clearIntervalId);
}

const clearIntervalId = setInterval(animate, 1000 / FPS);
