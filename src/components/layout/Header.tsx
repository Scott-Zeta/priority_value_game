export default function Header() {
  return (
    <header className="mb-10">
      <nav className="flex justify-between items-center mb-8">
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
