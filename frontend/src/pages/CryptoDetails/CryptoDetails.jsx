import { useLoaderData, useNavigate } from "react-router-dom";

export const cryptoDetailsLoader = async ({ params }) => {
  const symbol = params.symbol?.toUpperCase();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const response = await fetch(`${API_BASE_URL}/api/crypto/${symbol}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Response("Failed to load cryptocurrency", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data = await response.json();
  return data;
};

export default function CryptoDetails() {
  const { data: crypto } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        ← Back to crypto list
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-28 h-28 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{crypto.name}</h1>
            <p className="text-lg text-gray-500 mt-2">{crypto.symbol}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Price
                <div className="mt-1 text-2xl font-semibold">${crypto.price.toLocaleString()}</div>
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                24h Change
                <div className={`mt-1 text-2xl font-semibold ${crypto.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h.toFixed(2)}%
                </div>
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Added
                <div className="mt-1 text-base">{new Date(crypto.createdAt).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {crypto.name} ({crypto.symbol}) is currently trading at ${crypto.price.toLocaleString()} with a {crypto.change24h >= 0 ? "positive" : "negative"} 24-hour change of {crypto.change24h.toFixed(2)}%.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold mb-3">Market details</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <span className="font-semibold">Symbol:</span> {crypto.symbol}
              </li>
              <li>
                <span className="font-semibold">Price:</span> ${crypto.price.toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">24h Change:</span> {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h.toFixed(2)}%
              </li>
              <li>
                <span className="font-semibold">First added:</span> {new Date(crypto.createdAt).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
