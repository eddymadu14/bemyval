
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ValentineMedium() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });

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

    if (slug) fetchPage();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  // Optional: show music
  const musicPlayer = page.music ? (
    <audio controls className="w-full mt-3" src={`/music/${page.music}.mp3`} />
  ) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl relative overflow-hidden">
        {!yes ? (
          <>
            <h1 className="text-3xl font-bold text-rose-500 mb-2">{page.herName} 💖</h1>
            <p className="text-gray-600 mb-4">{page.message}</p>

            {page.photo && (
              <img src={page.photo.url} alt="Valentine" className="mb-4 rounded-lg max-h-48 mx-auto" />
            )}

            {musicPlayer}

            <h2 className="text-xl font-semibold mb-6">Will you be my Valentine? 🌹</h2>

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
            <h1 className="text-3xl font-bold text-rose-500 mb-4">SHE SAID YES 🎉</h1>
            <p className="text-gray-600 mb-4">{page.himName}, you just won Valentine’s Day ❤️</p>
            <p className="text-2xl">💖 💕 💘 💝</p>
          </>
        )}
      </div>
    </div>
  );
}
