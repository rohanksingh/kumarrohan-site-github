import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-16">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
          Get in Touch
        </p>
        <h1 className="text-5xl font-bold mb-5">Contact</h1>

        <p className="text-gray-300 mb-10 max-w-2xl">
          Reach out for risk analytics, trade surveillance, AI governance, data
          engineering, or project collaboration.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/rohanksingh/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/rohanksingh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
          >
            GitHub →
          </a>
        </div>

        <div className="border-t border-gray-800 pt-10">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form
            action="https://formspree.io/f/mpqblgbn"
            method="POST"
            className="grid gap-4 max-w-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200 transition w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}