// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../../utils/api";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showCookie, setShowCookie] = useState(true);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");

//     try {
//       await registerUser({ name, email, password });
//       navigate("/profile");
//     } catch (err) {
//       setError(err.message || "Unable to create account.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0b0d] text-white font-sans relative">
//       <div className="absolute top-6 left-6">
//         <Link to="/">
//           <svg
//             width="28"
//             height="28"
//             viewBox="0 0 1024 1024"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z"
//               fill="white"
//             />
//           </svg>
//         </Link>
//       </div>

//       <div className="flex items-center justify-center min-h-screen px-4">
//         <div className="w-full max-w-[420px]">
//           <h1 className="text-[32px] font-semibold mb-2 text-white">Create your account</h1>
//           <p className="text-[15px] text-gray-400 mb-2 leading-relaxed">
//             Access all that Coinbase has to offer with a single account.
//           </p>
//           <div className="mb-6 p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
//             <p className="text-xs text-red-400">
//               <strong>⚠️ Demo app</strong> – Do not use your real password or personal information
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="signup-name" className="block text-sm font-medium text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 id="signup-name"
//                 type="text"
//                 placeholder="Your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px]"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 id="signup-email"
//                 type="email"
//                 placeholder="Your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px]"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="signup-password" className="block text-sm font-medium text-gray-300 mb-2">
//                 Password
//               </label>
//               <input
//                 id="signup-password"
//                 type="password"
//                 placeholder="Create a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px]"
//                 required
//               />
//             </div>

//             {error && <p className="text-red-400 text-sm">{error}</p>}

//             <button
//               type="submit"
//               id="signup-continue-btn"
//               className="w-full py-3.5 bg-[#1a3a5c] hover:bg-[#1f4570] text-white font-semibold rounded-full transition-colors text-[15px] cursor-pointer"
//             >
//               Create account
//             </button>
//           </form>

//           <div className="flex items-center gap-4 my-6">
//             <div className="flex-1 h-px bg-gray-700" />
//             <span className="text-xs text-gray-500 uppercase tracking-wider">Or</span>
//             <div className="flex-1 h-px bg-gray-700" />
//           </div>

//           <div className="flex flex-col gap-3 mb-8">
//             <button
//               id="signup-google-btn"
//               className="w-full flex items-center justify-center gap-3 py-3.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
//             >
//               Continue with Google
//             </button>
//             <button
//               id="signup-apple-btn"
//               className="w-full flex items-center justify-center gap-3 py-3.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
//             >
//               Continue with Apple
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-400">
//             Already have an account?{" "}
//             <Link to="/signin" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>

//       {showCookie && (
//         <div className="fixed bottom-0 left-0 right-0 bg-[#0a0b0d] border-t border-gray-800 px-6 py-4 flex items-center justify-between z-50">
//           <p className="text-sm text-gray-400 max-w-3xl">
//             We use strictly necessary cookies to enable essential functions, such as security and authentication.
//           </p>
//           <button
//             id="signup-dismiss-cookie"
//             onClick={() => setShowCookie(false)}
//             className="ml-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
//           >
//             Dismiss
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const [showCookie, setShowCookie] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true); // Start loading

    try {
      await registerUser({ name, email, password });
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Unable to create account.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white font-sans relative">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z" fill="white" />
          </svg>
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[420px]">
          <h1 className="text-[32px] font-semibold mb-2 text-white">Create your account</h1>
          <p className="text-[15px] text-gray-400 mb-2 leading-relaxed">
            Access all that Coinbase has to offer with a single account.
          </p>
          
          <div className="mb-6 p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
            <p className="text-xs text-red-400">
              <strong>⚠️ Demo app</strong> – Do not use your real password or personal information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                id="signup-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                id="signup-password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white transition-all focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* ENHANCED BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] active:bg-blue-800 disabled:opacity-50 disabled:active:scale-100 text-white font-semibold rounded-full transition-all text-[15px] cursor-pointer"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-xs text-gray-500 uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* SOCIAL BUTTONS WITH FEEDBACK */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-600 rounded-full hover:bg-gray-800/50 active:scale-[0.98] active:bg-gray-800 transition-all font-medium text-white">
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-600 rounded-full hover:bg-gray-800/50 active:scale-[0.98] active:bg-gray-800 transition-all font-medium text-white">
              Continue with Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a0b0d] border-t border-gray-800 px-6 py-4 flex items-center justify-between z-50">
          <p className="text-sm text-gray-400 max-w-3xl">
            We use strictly necessary cookies to enable essential functions.
          </p>
          <button
            onClick={() => setShowCookie(false)}
            className="ml-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold rounded-full transition-all"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
