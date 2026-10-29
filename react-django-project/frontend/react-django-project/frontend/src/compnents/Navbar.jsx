import { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Applications", href: "#app" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      {/* Full width: logo at far left, Contact Us at far right */}
      <nav
        aria-label="Main"
        className="relative flex w-full items-center bg-#14231B justify-between px-6 py-5 md:px-10"
      >
        {/* Logo (far left) */}
        <a href="#home" className="text-xl font-semibold tracking-tight text-gray-900">
          <img
            src={logo}
            alt="Company logo"
            className="h-8 w-auto max-w-[160px] object-contain md:h-10"
          />
        </a>

        {/* Links (exact center of the page) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Us (far right) */}
        <a
          href="#contact"
          className="hidden rounded-full border border-gray-900 px-5 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white md:inline-block"
        >
          Contact Us
        </a>
        

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="text-gray-900 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-gray-900 px-5 py-2 text-sm font-medium text-gray-900"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
