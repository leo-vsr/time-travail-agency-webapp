export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} TimeTravel Agency. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#destinations"
            className="text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            Destinations
          </a>
          <a
            href="#quiz"
            className="text-sm text-muted hover:text-gold transition-colors duration-300"
          >
            Quiz
          </a>
        </div>
      </div>
    </footer>
  );
}
