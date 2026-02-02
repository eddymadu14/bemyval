import { useState } from "react";

export default function Create() {
  const [her, setHer] = useState("");
  const [him, setHim] = useState("");
  const [msg, setMsg] = useState("");
  const [link, setLink] = useState("");

  const generate = () => {
    if (!her || !him) return alert("Names first, lover boy ❤️");

    const base = window.location.origin;
    const url = `${base}/val?her=${encodeURIComponent(
      her
    )}&him=${encodeURIComponent(him)}&msg=${encodeURIComponent(msg)}`;

    setLink(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold text-rose-500 mb-4 text-center">
          Create Your Valentine 💘
        </h2>

        <input
          className="w-full mb-3 p-3 border rounded-xl"
          placeholder="Her name"
          onChange={(e) => setHer(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 border rounded-xl"
          placeholder="Your name"
          onChange={(e) => setHim(e.target.value)}
        />

        <textarea
          className="w-full mb-4 p-3 border rounded-xl"
          placeholder="Your love message"
          onChange={(e) => setMsg(e.target.value)}
        />

        <button
          onClick={generate}
          className="w-full bg-rose-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Generate Link ❤️
        </button>

        {link && (
          <div className="mt-4 text-center">
            <p className="text-sm mb-2">Your link is ready 👇</p>
            <input
              value={link}
              readOnly
              className="w-full p-2 border rounded text-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
}
