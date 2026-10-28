import { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-2.5 z-50 mx-4 mt-2.5 rounded-2xl border border-[#0b1f7a]/10 bg-white/80 shadow-[0_8px_30px_rgba(11,31,122,0.12)] backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick("#home")} aria-label="3PL CargoHub home">
          <img src={logo} alt="3PL CargoHub" className="h-11 w-auto md:h-14" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1.5 md:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleClick(href)}
                className={`block rounded-full px-[18px] py-2 text-[14.5px] font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1f7a] ${
                  active === href
                    ? "bg-[#0b1f7a] text-white"
                    : "text-[#0b1f7a] hover:bg-[#0b1f7a]/[0.07] hover:text-[#e8001c]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="ml-2 block rounded-full bg-gradient-to-br from-[#ff2a3f] via-[#e8001c] to-[#b80015] px-[18px] py-2 text-[14.5px] font-semibold text-white shadow-[0_6px_16px_rgba(232,0,28,0.32)] transition hover:-translate-y-px hover:from-[#1a35b0] hover:via-[#0b1f7a] hover:to-[#0b1f7a] hover:shadow-[0_8px_20px_rgba(11,31,122,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1f7a]"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="p-2 md:hidden"
        >
          <span className={`my-[5px] block h-[3px] w-[26px] rounded bg-[#0b1f7a] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`my-[5px] block h-[3px] w-[26px] rounded bg-[#0b1f7a] transition ${open ? "opacity-0" : ""}`} />
          <span className={`my-[5px] block h-[3px] w-[26px] rounded bg-[#0b1f7a] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-1 rounded-2xl border border-[#0b1f7a]/10 bg-white/95 p-3 shadow-[0_14px_34px_rgba(11,31,122,0.16)] backdrop-blur-xl md:hidden">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleClick(href)}
                className={`block rounded-full px-[18px] py-2.5 text-[15px] font-semibold ${
                  active === href ? "bg-[#0b1f7a] text-white" : "text-[#0b1f7a]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1.5 block rounded-full bg-gradient-to-br from-[#ff2a3f] via-[#e8001c] to-[#b80015] px-[18px] py-2.5 text-center text-[15px] font-semibold text-white shadow-[0_6px_16px_rgba(232,0,28,0.32)]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
