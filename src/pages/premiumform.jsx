
import { useState } from "react";

export default function CreatePremium() {
  const [form, setForm] = useState({
    her: "",
    him: "",
    msg: "",
    video: null,
    passcode: "",
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
    if (!form.her || !form.him) return alert("Complete the magic ✨");

    setLoading(true);

    try {
      const data = new FormData();
      data.append("herName", form.her);
      data.append("himName", form.him);
      data.append("message", form.msg);
      data.append("plan", "LUXE"); // premium plan
      data.append("passcode", form.passcode || "");
      if (form.video) data.append("video", form.video);

      const res = await fetch("/api/create", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to create page");

      // Use returned slug for link
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
    <div className="min-h-screen flex items-center justify-center bg-fuchsia-600 p-6">
      <div className="bg-white p-10 rounded-3xl max-w-md w-full shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-fuchsia-700">
          Premium Valentine 💎
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
          placeholder="Secret message"
          className="w-full mb-3 p-3 border rounded-xl"
        />

        <input
          type="file"
          name="video"
          onChange={handleChange}
          className="mb-3"
        />

        <input
          name="passcode"
          value={form.passcode}
          onChange={handleChange}
          placeholder="Page passcode"
          className="w-full mb-4 p-3 border rounded-xl"
        />

        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-fuchsia-700 text-white py-3 rounded-full font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Premium Experience ❤️"}
        </button>

        {link && (
          <div className="mt-4 text-center">
            <p className="text-sm mb-2">Your Premium link 👇</p>
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