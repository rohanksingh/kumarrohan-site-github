import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section>
        <h1>Rohan Kumar</h1>
      </section>

      {/* FEATURED PROJECTS */}
      <section>
        <h2>Featured Projects</h2>
        <Link href="/projects">View All →</Link>
      </section>

      {/* INSIGHTS */}
      <section>
        <h2>Latest Insights</h2>
        <Link href="/blog">View All →</Link>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Let’s Connect</h2>
        <Link href="/contact">Contact Me →</Link>
      </section>

    </main>
  );
}