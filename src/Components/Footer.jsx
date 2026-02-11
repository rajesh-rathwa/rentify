import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-white/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            Copyright (c) 2026 Rentify. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-slate-600 hover:text-blue-700 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-700 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-700 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
