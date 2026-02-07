import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { spawnPremiumEffects, launchFireworks } from "../utils/effects";

export default function ValentinePrem() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });
  const [passcode, setPasscode] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const moveNo = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(`/api/val/${slug}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Page not found");

        setPage(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  const verifyPasscode = () => {
    if (passcode === page.passcode) {
      setAccessGranted(true);
    } else {
      alert("Incorrect passcode 🔒");
    }
  };

  const handleYes = () => {
    // Trigger 3 flower bursts
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnPremiumEffects(), i * 800);
    }

    // Launch big fireworks after flowers
    setTimeout(() => launchFireworks(), 2400);

    setYes(true);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  // Passcode gating for premium
  if (!accessGranted && page.plan !== "STANDARD") {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">
            Premium Page 🔒
          </h2>
          <p className="mb-4">Enter your premium passcode to unlock 💎</p>
          <input
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode"
            className="w-full mb-4 p-3 border rounded-xl"
          />
          <button
            onClick={verifyPasscode}
            className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
        {!yes ? (
          <>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              {page.herName} 💎
            </h1>

            {/* IMAGE */}
            <div className="w-full h-44 mb-4 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/30">
              {page.photo ? (
                <img
                  src={page.photo.url}
                  className="w-full h-full object-cover"
                  alt="Valentine"
                />
              ) : (
                <span className="text-white/70">📸 Premium photo here</span>
              )}
            </div>

            {/* VIDEO */}
            <div className="w-full h-40 mb-6 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/30">
              {page.video ? (
                <video src={page.video.url} controls className="w-full h-full" />
              ) : (
                <span>🎥 Video message plays here</span>
              )}
            </div>

            {/* MESSAGE */}
            <p className="mb-6 text-white">{page.message}</p>

            {/* MUSIC */}
            {page.music && (
              <audio controls className="w-full mb-6" src={`/music/${page.music}.mp3`} />
            )}

            {/* Yes/No buttons */}
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
            <h1 className="text-4xl font-bold text-white mb-4">LOVE CONFIRMED 🎆</h1>
            <p className="text-lg text-white">
              {page.himName}, this is unforgettable ❤️
            </p>
          </>
        )}
      </div>
    </div>
  );
}




