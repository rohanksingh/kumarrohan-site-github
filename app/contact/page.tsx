import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-10">
      <Navbar />

      <section className="max-w-5xl mx-auto pt-12 pb-16">
        <h1 className="text-5xl font-bold mb-5">Contact</h1>

        <p className="text-gray-300 mb-8 max-w-2xl">
          Reach out for risk analytics, trade surveillance, AI governance, data engineering, or project collaboration.
        </p>

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
            className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <button
            type="submit"
            className="rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200 w-fit"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}