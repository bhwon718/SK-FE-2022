import App from './components/App.js';
import RandomCountUp from './components/RandomCountUp.js';

var handleReload = function handleReload() {
  return location.reload();
};

document.addEventListener('click', handleReload, {
  capture: true
});
var MIN = 20;
var MAX = 99;

var getRandomMinMax = function getRandomMinMax() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MIN;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX;
  if (min >= max) throw new Error('min 값이 max 값과 같거나 큽니다.');
  return Math.round(Math.random() * (max - min)) + min;
};

var TARGET_COUNT = getRandomMinMax(30, 45);
document.title = "(".concat(TARGET_COUNT, ") ").concat(document.title);
var count = 0;
var step = 1;
var FPS = 20;
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);

function render() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      count = _ref.count,
      _ref$isComplete = _ref.isComplete,
      isComplete = _ref$isComplete === void 0 ? false : _ref$isComplete;

  root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null, /*#__PURE__*/React.createElement(RandomCountUp, {
    count: count,
    isComplete: isComplete
  }))));
}

render({
  count: count
});

function animate() {
  count += step;
  var isComplete = count >= TARGET_COUNT;
  render({
    count: count,
    isComplete: isComplete
  });
  isComplete && cleanup();
}

function cleanup() {
  clearInterval(clearIntervalId);
}

var clearIntervalId = setInterval(animate, 1000 / FPS);