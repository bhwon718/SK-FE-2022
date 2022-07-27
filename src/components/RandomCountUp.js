const RandomCountUp = ({ isComplete, count }) => (
  <output style={isComplete ? { animationName: 'none' } : undefined}>
    {count}
  </output>
);
