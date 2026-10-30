import logo from "../assets/logo1.png";
import trachub from "../assets/logo.png";
import {
  HEAD, MUTED, INK, ACCENT, SURFACE, SURFACE_SOFT, HAIRLINE, INK_BORDER, BTN_PRIMARY, BTN_GHOST,
} from "./theme.js";

// ✏️ Change the links (and copy) here.
const COMPANY = {
  name: "3PL Management India Pvt. Ltd.",
  blurb:
    "We are a logistics and technology company based in Indore. We help businesses cut manual shipping work, follow every shipment from one platform and move cargo by sea, and we build tracking products for vehicle owners and fleets.",
  url: "https://3plindia.com/",
};

// Founding, location and backer come from a public company profile (PitchBook). Please confirm them.
const FACTS = [
  ["2021", "Founded"],
  ["Indore, Madhya Pradesh", "Headquarters"],
  ["Logistics and technology", "Industry"],
  ["Startup MP", "Backed by"],
];

// Offerings summarised from 3plindia.com
const SERVICES = [
  ["Shipping automation", "Run your shipping on a platform with the features you need to cut down manual effort."],
  ["Real-time shipment updates", "Follow every shipment from a single platform and know where it is at any moment."],
  ["Sea freight", "Sea freight built around your process, after we take the time to learn how you work."],
];

// Card width adapts to the number of brands

const BRANDS = [
  {
    name: "3PL Track Hub",
    logo:"https://www.3pltechhub.com/media-storage/logo/69e3430e4147f---3pl-logo-png.png",
    mark: "TH",
    text: "One app to follow every GPS tracker. See live location, trip history, geofence alerts and engine control from your phone or the web.",
    primary: { label: "Get it on Google Play", url: "https://play.google.com/store/apps/details?id=com.track.threepl" },
    secondary: { label: "Visit website", url: "https://your-track-hub-link.com" },
  },
  {
    name: "3PL Tech Hub",
    logo:trachub,
    mark: "TE",
    text: "Technology solutions and software from the same team. Replace this line with a short description of what Tech Hub offers.",
    primary: { label: "Visit website", url: "https://your-tech-hub-link.com" },
    secondary: { label: "Contact us", url: "https://your-tech-hub-link.com/contact" },
  },
  {
    name: "3PL Cargo Hub",
    logo:trachub,
    mark: "TE",
    text: "3PL CargoHub is your trusted logistics partner for seamless domestic and international shipping solutions. We make shipping simple, fast, and reliable with smart tracking, efficient delivery management, and dedicated customer support.",
    primary: { label: "Visit website", url: "https://your-tech-hub-link.com" },
    secondary: { label: "Contact us", url: "https://your-tech-hub-link.com/contact" },
  },
];

const n = BRANDS.length;
const cardWidth =
  n === 1
    ? "md:w-[560px]"
    : n === 2 || n === 4
    ? "md:w-[calc(50%-12px)]"
    : "md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]";

const nameList = (names) =>
  names.length < 2 ? names[0] : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

export default function Brands() {
  return (
    <section id="brands" className="py-14 md:py-20">
      {/* Parent company */}
      <div className={`rounded-[22px] border-2 bg-[#10231A] p-8 md:p-10 ${INK_BORDER}`}>
        <div className="mb-6 inline-block rounded-[14px] bg-white px-5 py-3">
          <img src={logo} alt="3PL Management India Pvt. Ltd. logo" className="h-16 w-auto md:h-20" />
        </div>
        <p className="text-[15px] font-bold text-[#4ADE9F]">Parent company</p>
        <h2 className={`${HEAD} mt-3 !text-white text-[clamp(28px,4vw,44px)] font-bold leading-[1.05]`}>
          {COMPANY.name}
        </h2>
        <p className="mt-4 max-w-[40em] text-[17px] text-[#B9CFC1]">{COMPANY.blurb}</p>
        <dl className="mt-8 grid grid-cols-2 gap-y-6 border-t border-[#3C5C4B] pt-6 md:grid-cols-4">
          {FACTS.map(([value, label]) => (
            <div key={label} className="pr-4">
              <dt className={`${HEAD} !text-white text-[18px] font-bold leading-snug`}>{value}</dt>
              <dd className="mt-1 text-[14px] text-[#B9CFC1]">{label}</dd>
            </div>
          ))}
        </dl>
        <a
          href={COMPANY.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-[10px] bg-[#FFC21A] px-6 py-3 font-bold text-[#10231A] transition hover:bg-[#FFCF4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Visit 3plindia.com
        </a>
      </div>

      {/* What the company does */}
      <h3 className={`${HEAD} mt-14 max-w-[18em] text-[clamp(24px,3vw,32px)] font-bold leading-[1.1]`}>
        What we do
      </h3>
      <div className={`mt-6 grid gap-px overflow-hidden rounded-[18px] border-2 md:grid-cols-3 ${HAIRLINE} ${INK_BORDER}`}>
        {SERVICES.map(([title, text]) => (
          <article key={title} className={`${SURFACE} p-[30px]`}>
            <span className="mb-4 block h-1 w-8 rounded-full bg-[#FFC21A]" />
            <h4 className={`${HEAD} text-[21px] font-bold`}>{title}</h4>
            <p className={`${MUTED} mt-2 text-[16px]`}>{text}</p>
          </article>
        ))}
      </div>

      {/* Connector from parent to brands */}
      <div aria-hidden="true" className="mx-auto h-8 w-0.5 bg-[#10231A] dark:bg-[#3C5C4B]" />

      {/* Brands */}

        <h3 className={`${HEAD} text-center text-[clamp(24px,3vw,32px)] font-bold`}>Our brands</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {BRANDS.map((b) => (
            <article
              key={b.name}
              className={`flex w-full flex-col rounded-[18px] border-2 p-[30px] transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${SURFACE} ${INK_BORDER} ${cardWidth}`}
            >
              <div className="flex items-center gap-4">
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className={`h-14 w-14 shrink-0 rounded-[14px] border-2 bg-white object-contain p-1.5 ${INK_BORDER}`}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className={`${HEAD} grid h-14 w-14 shrink-0 place-items-center rounded-[14px] border-2 bg-[#FFC21A] text-[20px] font-extrabold !text-[#10231A] ${INK_BORDER}`}
                  >
                    {b.mark}
                  </span>
                )}
                <h4 className={`${HEAD} text-[24px] font-bold leading-tight`}>{b.name}</h4>
              </div>

              <p className={`${MUTED} mt-4 flex-1 text-[16px]`}>{b.text}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={b.primary.url} target="_blank" rel="noopener noreferrer" className={BTN_PRIMARY}>
                  {b.primary.label}
                </a>
                {b.secondary && (
                  <a href={b.secondary.url} target="_blank" rel="noopener noreferrer" className={BTN_GHOST}>
                    {b.secondary.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className={`${MUTED} mt-8 text-center text-[14px]`}>
          {nameList(BRANDS.map((b) => b.name))} {BRANDS.length === 1 ? "is a brand" : "are brands"} of {COMPANY.name}
        </p> 

    </section>
  );
}
