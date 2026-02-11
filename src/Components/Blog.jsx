import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Road Trip Essentials",
      desc: "Tips and packing advice to make your next road trip unforgettable.",
      image: "/images/Best-Car-Blogs-Websites.jpeg",
    },
    {
      title: "Top 10 Scenic Routes",
      desc: "Discover the most scenic drives for weekend escapes.",
      image: "/images/Best-Car-Blogs-Websites.jpeg",
    },
    {
      title: "Choosing the Right Car",
      desc: "A quick guide to selecting the best rental for your needs.",
      image: "/images/Best-Car-Blogs-Websites.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Latest Blog Posts
        </h3>
        <p className="text-slate-600 mt-2">
          Insights, tips, and guides for better journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
          >
            <div className="h-56">
              <img
                className="w-full h-full object-cover"
                src={post.image}
                alt={post.title}
              />
            </div>
            <div className="p-5">
              <h5 className="text-lg font-semibold text-slate-900 mb-2">
                {post.title}
              </h5>
              <p className="text-slate-600 text-sm mb-4">{post.desc}</p>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
