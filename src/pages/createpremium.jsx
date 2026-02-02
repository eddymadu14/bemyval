export default function CreatePremium() {
  const [form, setForm] = useState({
    her: "",
    him: "",
    msg: "",
    video: null,
    passcode: "",
  });

  const generate = () => {
    if (!form.her || !form.him) return alert("Complete the magic ✨");
    alert("Premium link generated 🎆");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fuchsia-600 p-6">
      <div className="bg-white p-10 rounded-3xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Premium Valentine 💎</h2>

        <input placeholder="Her name" className="input" />
        <input placeholder="Your name" className="input" />
        <textarea placeholder="Secret message" className="input" />

        <input type="file" className="mb-3" />
        <input placeholder="Page passcode" className="input" />

        <button onClick={generate} className="btn">
          Create Premium Experience ❤️
        </button>
      </div>
    </div>
  );
}
