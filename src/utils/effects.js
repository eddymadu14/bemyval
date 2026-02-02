// utils/effects.js
export function spawnFlowers(count = 20) {
  for (let i = 0; i < count; i++) {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.style.position = "fixed";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "100vh";
    flower.style.fontSize = Math.random() * 24 + 16 + "px";
    flower.style.animation = "floatUp 3s ease-out forwards";
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 3000);
  }
}

export function spawnPremiumEffects() {
  spawnFlowers(40);

  for (let i = 0; i < 15; i++) {
    const firework = document.createElement("div");
    firework.innerText = "🎆";
    firework.style.position = "fixed";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh";
    firework.style.fontSize = "32px";
    firework.style.animation = "fadeOut 2s ease-out forwards";
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
  }
}
