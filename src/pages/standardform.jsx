import { useState } from "react";

export default function Create() {
  const [her, setHer] = useState("");
  const [him, setHim] = useState("");
  const [msg, setMsg] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!her || !him) return alert("Names first, lover boy ❤️");

    setLoading(true);

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          herName: her,
          himName: him,
          message: msg,
          plan: "STANDARD", // starter plan
          music: "", // optional for starter
          email: "", // optional if you want identity
          phone: "", // optional
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create page");

      // Generate link using returned slug
      const base = window.location.origin;
      setLink(`${base}/val/${data.slug}`);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
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
          value={her}
          onChange={(e) => setHer(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 border rounded-xl"
          placeholder="Your name"
          value={him}
          onChange={(e) => setHim(e.target.value)}
        />

        <textarea
          className="w-full mb-4 p-3 border rounded-xl"
          placeholder="Your love message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-rose-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Generate Link ❤️"}
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



