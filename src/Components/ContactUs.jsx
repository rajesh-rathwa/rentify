import React from "react";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>
          <p className="text-slate-600 mt-2">
            Tell us what you need and we will get back to you quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
            <textarea
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <div className="md:col-span-2">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold">Contact Details</h4>
          <p className="mt-3 text-white/90">
            We are here to help you with bookings, support, and special requests.
          </p>
          <ul className="mt-5 space-y-2 text-white/90">
            <li>Phone: +1 333 4040 5566</li>
            <li>Email: contact@company.com</li>
            <li>Address: 212 Barrington Court, New York</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
