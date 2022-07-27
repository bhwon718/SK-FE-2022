var RandomCountUp = function RandomCountUp(_ref) {
  var isComplete = _ref.isComplete,
      count = _ref.count;
  return /*#__PURE__*/React.createElement("output", {
    style: isComplete ? {
      animationName: 'none'
    } : undefined
  }, count);
};

export default RandomCountUp;