const handleYes = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      spawnPremiumEffects();
    }, i * 800); // 0ms, 800ms, 1600ms
  }
  setYes(true);
};
