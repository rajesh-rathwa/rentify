import React from "react";

const LoginModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Welcome Back</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-slate-100 text-slate-500"
            aria-label="Close"
          >
            ?
          </button>
        </div>
        <p className="text-slate-600 text-sm mt-1">
          Sign in to manage bookings and saved cars.
        </p>

        <div className="mt-5 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors"
          >
            Sign In
          </button>
          <div className="flex items-center justify-between text-sm">
            <button type="button" className="text-blue-700 hover:underline">
              Forgot password?
            </button>
            <button type="button" className="text-slate-600 hover:text-blue-700">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
