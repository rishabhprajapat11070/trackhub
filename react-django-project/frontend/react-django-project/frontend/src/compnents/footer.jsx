import logo from "../assets/logo.png";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "Features", href: "#features" },
      { label: "Applications", href: "#app" },
      { label: "About", href: "#about" },
    ],
  },

  {
    title: "Support",
    links: [
      { label: "User manual", href: "#support" },
      { label: "Warranty", href: "#support" },
      { label: "FAQs", href: "#support" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-transparent">
      <div className="w-full px-6 py-14 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center">
              <img
                src={logo}
                alt="Company logo"
                className="h-8 w-auto max-w-[160px] object-contain md:h-10"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Reliable GPS tracking devices that show you where your vehicles,
              assets and loved ones are, in real time.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-gray-900">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div id="contact">
            <h3 className="text-sm font-semibold text-gray-900">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="mailto:Info@3plcargohub.com.com" className="hover:text-gray-900">
                  Info@3plcargohub.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="transition-colors hover:text-gray-900">
                  +91 97700 21050
                </a>
              </li>
              <li className="leading-relaxed">
                3 PL MANAGEMENT INDIA PRIVATE LIMITED BSNL, 18-SOUTH TUKOGANJ, LG-31, Trade Center, Unnamed Road, Radio Colony, Indore, Indore, Madhya Pradesh, 452001
                <br />
                Indore, Madhya Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-gray-900">
              Privacy policy
            </a>
            <a href="#terms" className="transition-colors hover:text-gray-900">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}