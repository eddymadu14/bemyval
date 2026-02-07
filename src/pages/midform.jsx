
import { useState } from "react";

export default function CreateMid() {
  const [form, setForm] = useState({
    her: "",
    him: "",
    msg: "",
    image: null,
    music: "",
  });
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generate = async () => {
    if (!form.her || !form.him) return alert("Names first ❤️");

    setLoading(true);

    try {
      const data = new FormData();
      data.append("herName", form.her);
      data.append("himName", form.him);
      data.append("message", form.msg);
      data.append("plan", "ELITE"); // Mid plan
      data.append("music", form.music || "");
      if (form.image) data.append("photo", form.image);

      const res = await fetch("/api/create", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to create page");

      // Generate link using slug returned from backend
      const base = window.location.origin;
      setLink(`${base}/val/${result.slug}`);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500 p-6">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">
          Mid Valentine 💐
        </h2>

        <input
          name="her"
          value={form.her}
          onChange={handleChange}
          placeholder="Her name"
          className="w-full mb-3 p-3 border rounded-xl"
        />

        <input
          name="him"
          value={form.him}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full mb-3 p-3 border rounded-xl"
        />

        <textarea
          name="msg"
          value={form.msg}
          onChange={handleChange}
          placeholder="Love message"
          className="w-full mb-3 p-3 border rounded-xl"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="mb-3"
        />

        <select
          name="music"
          value={form.music}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-xl"
        >
          <option value="">Select music</option>
          <option value="Romantic Piano">Romantic Piano</option>
          <option value="Soft R&B">Soft R&B</option>
        </select>

        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Generate Link 💘"}
        </button>

        {link && (
          <div className="mt-4 text-center">
            <p className="text-sm mb-2">Your Mid plan link 👇</p>
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

