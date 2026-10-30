import Appliction from "../compnents/appliction.jsx";
import Brands from "../compnents/brands.jsx";
import About from "../compnents/about.jsx";
import {
  HEAD, MUTED, INK, INK_BORDER, PAPER, SURFACE, HAIRLINE,
  BTN_PRIMARY, BTN_GHOST,
} from "../compnents/theme.js";

const BRAND = "TrackHub"; // change this to your brand name

const STATS = [
  ["5 sec", "between location updates"],
  ["12 months", "of trip history kept"],
  ["99.9%", "platform uptime"],
  ["24/7", "support by phone and chat"],
];

const FEATURES = [
  ["Live location", "Watch each vehicle move on the map with its speed, direction and engine status."],
  ["Zone alerts", "Draw a zone around a home, depot or customer site and get a message when a vehicle enters or leaves."],
  ["Trip history", "Replay any past journey, with stops, distance driven and time spent idling."],
  ["Speed and safety alerts", "Get notified about speeding, harsh braking, unplugged devices and low battery."],
  ["Theft protection", "Turn on tow and movement alerts at night, and share a live link with the police if needed."],
  ["Reports", "Download daily and monthly reports on distance, fuel use and driver behaviour."],
];

// Kept for the pricing / how-it-works sections you haven't added yet.
// const STEPS = [
//   ["Plug in the tracker", "Fit the small device under the dashboard or have our technician do it for you."],
//   ["Add it to your account", "Enter the device ID in the app and give the vehicle a name."],
//   ["Watch it on the map", "The vehicle appears within a minute. Set your alerts and you’re done."],
// ];

// const PLANS = [
//   { name: "Personal", price: "₹199", unit: "/ vehicle / month",
//     items: ["1 to 2 vehicles", "Live location", "30 days of history", "Speed and zone alerts"], cta: "Choose Personal" },
//   { name: "Business", price: "₹299", unit: "/ vehicle / month",
//     items: ["Up to 50 vehicles", "12 months of history", "Reports and driver scores", "Multiple users"], cta: "Choose Business", pick: true },
//   { name: "Fleet", price: "Custom",
//     items: ["50+ vehicles", "Fuel sensor support", "API access", "Dedicated manager"], cta: "Talk to sales" },
// ];

const LABEL = `absolute rounded-[10px] border-2 ${SURFACE} px-3.5 py-2.5 text-sm leading-snug ${MUTED} ${INK_BORDER}`;

function RouteMap() {
  return (
    <div
      role="img"
      aria-label="Map showing a vehicle moving along a route with live speed and status"
      className={`relative aspect-[5/4] overflow-hidden rounded-[18px] border-2 bg-[#E3EADF] dark:bg-[#0F1D16] ${INK_BORDER}`}
    >
      <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="block h-full w-full">
        <g fill="none" strokeLinecap="round" className="stroke-[#F7FAF4] dark:stroke-[#1E3328]">
          <path d="M-10 90 H510" strokeWidth="16" />
          <path d="M-10 250 H510" strokeWidth="22" />
          <path d="M-10 340 C150 320 300 380 510 330" strokeWidth="12" />
          <path d="M120 -10 V410" strokeWidth="14" />
          <path d="M330 -10 V410" strokeWidth="20" />
          <path d="M-10 170 L510 60" strokeWidth="10" />
          <path d="M440 -10 V410" strokeWidth="10" />
        </g>
        <g className="fill-[#CBD7C6] dark:fill-[#23382C]">
          <rect x="145" y="108" width="70" height="50" rx="6" />
          <rect x="230" y="108" width="80" height="50" rx="6" />
          <rect x="145" y="270" width="70" height="55" rx="6" />
          <rect x="355" y="108" width="62" height="120" rx="6" />
          <rect x="20" y="270" width="80" height="45" rx="6" />
          <rect x="355" y="270" width="62" height="45" rx="6" />
        </g>
        {/* depot geofence */}
        <circle cx="330" cy="90" r="46" strokeWidth="2" strokeDasharray="6 5"
          className="fill-[#FFC21A]/25 stroke-[#E0A400] dark:stroke-[#FFC21A]" />
        {/* route */}
        <path id="home-route" d="M60 340 C90 330 110 300 120 250 H330 V90 H440" fill="none"
          strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          className="stroke-[#0B7A55] dark:stroke-[#4ADE9F]" />
        <circle cx="60" cy="340" r="7" strokeWidth="4"
          className="fill-[#E3EADF] stroke-[#0B7A55] dark:fill-[#0F1D16] dark:stroke-[#4ADE9F]" />
        <g>
          <circle r="22" opacity=".25" className="fill-[#0B7A55] dark:fill-[#4ADE9F]">
            <animate attributeName="r" values="14;26;14" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="10" stroke="#fff" strokeWidth="3" className="fill-[#0B7A55] dark:fill-[#4ADE9F]" />
          <animateMotion dur="9s" repeatCount="indefinite" rotate="0">
            <mpath href="#home-route" />
          </animateMotion>
        </g>
      </svg>

      <div className={`${LABEL} right-[5%] top-[7%]`}>
        <b className={`block text-[15px] ${INK}`}>
          <span className="mr-1.5 inline-block h-[9px] w-[9px] rounded-full bg-[#1E8E4E]" />
          Truck 07 · moving
        </b>
        54 km/h · 2 stops today
      </div>
      <div className={`${LABEL} bottom-[6%] left-[5%]`}>
        <b className={`block text-[15px] ${INK}`}>Depot zone ahead</b>
        Alert sent when it enters
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id='home' className={`${PAPER} font-sans text-[17px] leading-relaxed ${INK}`}>
       <div className="mx-auto max-w-[1120px] px-6">
        {/* Hero */}
        <br /><br />
        <div className="grid items-center gap-12 pb-16 pt-6 md:grid-cols-[1fr_1.15fr] md:pb-[72px] md:pt-12">
          <div>
            <h1 className={`${HEAD} text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.05]`}>
              Know where every vehicle is, right now.
            </h1>
            <p className={`${MUTED} mb-7 mt-5 max-w-[30em] text-[19px]`}>
              {BRAND} trackers show the live location, speed and route of your cars, trucks and bikes on one map, so
              you can stop guessing and start planning.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* <a href="#pricing" className={BTN_PRIMARY}>Start free for 14 days</a> */}
              <a href="#features" className={BTN_GHOST}>See how it works</a>
            </div>
          </div>
          <RouteMap />
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap gap-10 border-y-2 py-7 ${INK_BORDER}`}>
          {STATS.map(([value, label]) => (
            <div key={label} className={`${MUTED} text-[15px]`}>
              <strong className={`${HEAD} block text-[30px] font-extrabold`}>{value}</strong>
              {label}
            </div>
          ))}
        </div>

        {/* Features */}
        <section id="features" className="py-14 md:py-20">
          <h2 className={`${HEAD} max-w-[16em] text-[clamp(30px,4vw,44px)] font-bold leading-[1.05]`}>
            Everything you need to keep vehicles safe and on schedule
          </h2>
          <p className={`${MUTED} mt-3.5 max-w-[34em]`}>
            Open the app on any phone or computer and see your whole fleet, or just the one car you care about.
          </p>
          <div className={`mt-11 grid gap-px overflow-hidden rounded-[18px] border-2 ${HAIRLINE} md:grid-cols-2 ${INK_BORDER}`}>
            {FEATURES.map(([title, text]) => (
              <article key={title} className={`${SURFACE} p-[30px]`}>
                <span className="mb-4 block h-1 w-8 rounded-full bg-[#FFC21A]" />
                <h3 className={`${HEAD} text-[22px] font-bold`}>{title}</h3>
                <p className={`${MUTED} mt-2 text-[16px]`}>{text}</p>
              </article>
            ))}
          </div>
        </section>
        {/* appliction */}
        <Appliction />
        {/* Brands */}
        <Brands/>
        {/* About */}
        <About/>

      </div>
    </div>
  );
}
