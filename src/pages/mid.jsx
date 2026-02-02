import { useState } from "react";
import { spawnFlowers } from "../utils/effects";

export default function ValentineMid() {
  const params = new URLSearchParams(window.location.search);
  const her = params.get("her") || "Sade";
  const him = params.get("him") || "Tunde";
  const msg = params.get("msg") || "You make my heart softer.";
  const img = params.get("img"); // placeholder image url

  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });

  const handleYes = () => {
    spawnFlowers(25);
    setYes(true);
  };

  const moveNo = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl relative overflow-hidden">
        {!yes ? (
          <>
            <h1 className="text-3xl font-bold text-rose-500 mb-2">
              {her} 💖
            </h1>

            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-48 mb-4 rounded-xl bg-rose-100 flex items-center justify-center overflow-hidden">
              {img ? (
                <img
                  src={img}
                  alt="Valentine"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-rose-400">
                  💐 Your photo goes here
                </span>
              )}
            </div>

            <p className="mb-4">{msg}</p>

            <h2 className="text-xl font-semibold mb-6">
              Will you be my Valentine? 🌹
            </h2>

            <div className="relative h-32">
              <button
                onClick={handleYes}
                className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold"
              >
                Yes 💘
              </button>

              <button
                onMouseEnter={moveNo}
                onTouchStart={moveNo}
                style={pos}
                className="absolute bg-gray-200 px-5 py-2 rounded-full text-sm transition"
              >
                No 🙃
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-rose-500 mb-3">
              SHE SAID YES 🌸
            </h1>
            <p className="text-gray-600">
              {him}, you did well ❤️
            </p>
          </>
        )}
      </div>
    </div>
  );
}