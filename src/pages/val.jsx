import { useState } from "react";

export default function Valentine() {
  const params = new URLSearchParams(window.location.search);
  const her = params.get("her") || "Suzanne";
  const him = params.get("him") || "Eddy";
  const msg =
    params.get("msg") ||
    "You make my heart softer and my days brighter.";

  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });

  const moveNo = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl relative overflow-hidden">
        {!yes ? (
          <>
            <h1 className="text-3xl font-bold text-rose-500 mb-2">
              {her} 💖
            </h1>

            <p className="text-gray-600 mb-4">{msg}</p>

            <h2 className="text-xl font-semibold mb-6">
              Will you be my Valentine? 🌹
            </h2>

            <div className="relative h-32">
              <button
                onClick={() => setYes(true)}
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
            <h1 className="text-3xl font-bold text-rose-500 mb-4">
              SHE SAID YES 🎉
            </h1>

            <p className="text-gray-600 mb-4">
              {him}, you just won Valentine’s Day ❤️
            </p>

            <p className="text-2xl">💖 💕 💘 💝</p>
          </>
        )}
      </div>
    </div>
  );
}
