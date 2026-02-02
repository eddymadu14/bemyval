import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-xl">
        <h1 className="text-3xl font-bold text-rose-500 mb-4">
          Make Her Say YES ❤️
        </h1>

        <p className="text-gray-600 mb-6">
          Send her a Valentine link where the “No” button refuses to cooperate 😌
        </p>

        <Link
          to="/create"
          className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Create My Valentine Link
        </Link>
      </div>
    </div>
  );
}
