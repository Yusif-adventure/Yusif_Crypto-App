import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Unexpected Application Error</p>
        <h1 className="text-4xl font-bold">{error?.status || "Oops"}</h1>
        <p className="text-lg text-slate-300">
          {error?.statusText || error?.message || "An error occurred while loading this page."}
        </p>
        <button
          onClick={() => window.location.assign("/")}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
