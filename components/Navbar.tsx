export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 mb-10">
      <div className="max-w-4xl mx-auto flex justify-between py-4 px-2 text-sm text-gray-300">
        <div className="font-semibold">Rohan Kumar</div>

        <div className="space-x-4">
          <a href="#research" className="hover:text-white">
            Research
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}