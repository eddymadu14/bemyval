export default function CreateMid() {
  const [form, setForm] = useState({
    her: "",
    him: "",
    msg: "",
    image: null,
    music: "",
  });

  const generate = () => {
    if (!form.her || !form.him) return alert("Names first ❤️");

    const base = window.location.origin;
    const url = `${base}/val/mid?her=${form.her}&him=${form.him}&msg=${form.msg}`;
    alert("Generated MID link:\n" + url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500 p-6">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Mid Valentine 💐</h2>

        <input placeholder="Her name" className="input" />
        <input placeholder="Your name" className="input" />
        <textarea placeholder="Love message" className="input" />

        <input type="file" className="mb-3" />
        <select className="input">
          <option>Select music</option>
          <option>Romantic Piano</option>
          <option>Soft R&B</option>
        </select>

        <button onClick={generate} className="btn">
          Generate Link 💘
        </button>
      </div>
    </div>
  );
}
