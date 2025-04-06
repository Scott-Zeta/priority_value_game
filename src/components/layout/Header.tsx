export default function Header() {
  return (
    <header className="px-4 pt-6 bg-white">
      <nav className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-800">
            Priorities Value Game
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/scott-zeta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors font-bold"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
