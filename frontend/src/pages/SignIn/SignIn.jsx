import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showCookie, setShowCookie] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await loginUser({ email, password });
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white font-sans relative">
      {/* Coinbase Logo */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <svg
            width="28"
            height="28"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      {/* Centered Form */}
      <form onSubmit={handleSubmit} className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[400px]">
          <h1 className="text-[28px] font-semibold mb-2 text-white">
            Sign in to Coinbase
          </h1>
          <p className="text-[15px] text-gray-400 mb-2 leading-relaxed">
            Enter your email and password to access your account.
          </p>
          <div className="mb-6 p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
            <p className="text-xs text-red-400">
              <strong>⚠️ Demo app</strong> – Do not use your real password or personal information
            </p>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="signin-email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px]"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="signin-password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px]"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            id="signin-btn"
            className="w-full py-3.5 bg-[#1a3a5c] hover:bg-[#1f4570] text-white font-semibold rounded-full transition-colors text-[15px] cursor-pointer mb-6"
          >
            Sign In
          </button>

          {/* Forgot Password */}
          <div className="text-center mb-6">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Forgot your password?
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Or
            </span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            {/* Google */}
            <button
              id="signin-google-btn"
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.69 5.84 14.09H2.18V16.94C3.99 20.53 7.7 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.94L5.84 14.09Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.06L5.84 9.91C6.71 7.31 9.14 5.38 12 5.38Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Apple */}
            <button
              id="signin-apple-btn"
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.19 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13.27 5.05C13.85 4.36 14.27 3.46 14.15 2.55C13.28 2.59 12.22 3.08 11.62 3.78C11.08 4.41 10.58 5.35 10.73 6.24C11.68 6.31 12.62 5.81 13.27 5.05Z"
                  fill="white"
                />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:text-blue-300">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </form>
      
      {/* Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <p className="text-sm text-gray-300">
              We use cookies to improve your experience. By continuing, you agree to our{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                Cookie Policy
              </a>
              .
            </p>
            <button
              onClick={() => setShowCookie(false)}
              className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}