import { useState } from "react";
import { spawnPremiumEffects } from "../utils/effects";

export default function ValentinePremium() {
  const params = new URLSearchParams(window.location.search);
  const her = params.get("her") || "Sade";
  const him = params.get("him") || "Tunde";
  const msg = params.get("msg") || "Forever starts with this yes.";
  const img = params.get("img");     // image placeholder
  const video = params.get("video"); // video placeholder

  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });

  const handleYes = () => {
    spawnPremiumEffects();
    setYes(true);
  };

  const moveNo = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
        {!yes ? (
          <>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              {her} 💎
            </h1>

            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-44 mb-4 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/30">
              {img ? (
                <img src={img} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white/70">📸 Premium photo here</span>
              )}
            </div>

            {/* VIDEO PLACEHOLDER */}
            <div className="w-full h-40 mb-6 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/30">
              {video ? (
                <video src={video} controls className="w-full h-full" />
              ) : (
                <span>🎥 Video message plays here</span>
              )}
            </div>

            <p className="mb-6 text-white">{msg}</p>

            <div className="relative h-32">
              <button
                onClick={handleYes}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition"
              >
                Yes 💖
              </button>

              <button
                onMouseEnter={moveNo}
                onTouchStart={moveNo}
                style={pos}
                className="absolute bg-white/80 hover:bg-white/20 px-5 py-2 rounded-full text-sm text-black transition"
              >
                No 🙃
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-white mb-4">
              LOVE CONFIRMED 🎆
            </h1>
            <p className="text-lg text-white">
              {him}, this is unforgettable ❤️
            </p>
          </>
        )}
      </div>
    </div>
  );
}