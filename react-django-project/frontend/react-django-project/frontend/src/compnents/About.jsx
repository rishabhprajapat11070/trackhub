import { useState } from "react";
import {
  HEAD, MUTED, INK, ACCENT, SURFACE, SURFACE_SOFT, INK_BORDER, PAPER, BTN_PRIMARY, BTN_GHOST,
} from "../compnents/theme.js";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.track.threepl"; // ✏️ change if needed

// Sample values shown in the demo card and panels. Edit freely.
const VEHICLE_STATES = [
  { status: "Moving", speed: "54 km/h", place: "On route, 12 km from the depot", seen: "Just now" },
  { status: "Idle", speed: "0 km/h", place: "Customer site, engine off", seen: "2 min ago" },
  { status: "Arrived", speed: "0 km/h", place: "Inside the depot zone", seen: "Just now" },
];
const STAGES = ["Booked", "Picked up", "In transit", "Out for delivery", "Delivered"];

const WHAT_WE_DO = [
  ["Vehicle monitoring", "Keep an eye on your vehicles from one platform and see how your transportation is running.", "12 vehicles · 9 moving · 3 parked"],
  ["Live locations", "Know exactly where a vehicle is at this moment, without calling the driver.", "Truck 07 · near the depot · updated just now"],
  ["Shipment progress", "Follow transportation movement and shipment progress from start to delivery.", "TH-20418 · In transit"],
  ["Better planning", "Clear visibility helps you plan routes, timings and daily operations.", "Expected arrival · 4:30 pm"],
];

const COMMITMENTS = [
  ["Technology", "Smart tools that bring essential tracking information together."],
  ["Transparency", "Everyone sees the same clear picture of every movement."],
  ["Reliability", "Information you can depend on, every day."],
];

const PURPOSE = {
  Mission: "To make vehicle tracking and logistics management simple, transparent, and accessible through smart technology.",
  Vision: "To become a trusted technology partner in the logistics industry by connecting vehicles, businesses, and deliveries through intelligent tracking solutions.",
};

function Segmented({ label, options, value, onChange }) {
  return (
    <div role="group" aria-label={label} className={`inline-flex rounded-full border-2 p-1 ${INK_BORDER} ${SURFACE}`}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full px-4 py-1.5 text-[14px] font-bold transition motion-reduce:transition-none ${
            value === o ? "bg-[#10231A] text-white dark:bg-[#4ADE9F] dark:text-[#10231A]" : `${MUTED} hover:opacity-80`
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function DemoCard() {
  const [view, setView] = useState("Vehicle");
  const [v, setV] = useState(0);
  const [step, setStep] = useState(2);
  const car = VEHICLE_STATES[v];
  const done = step === STAGES.length - 1;
  const chip = (good, text) => (
    <span className={`rounded-full px-3.5 py-1 text-[13px] font-bold ${good ? "bg-[#0B7A55] text-white" : "bg-[#FFC21A] text-[#10231A]"}`}>
      {text}
    </span>
  );

  return (
    <div className={`rounded-[22px] border-2 p-6 ${SURFACE} ${INK_BORDER}`}>
      <Segmented label="Demo view" options={["Vehicle", "Shipment"]} value={view} onChange={setView} />

      {view === "Vehicle" ? (
        <div className="mt-6" aria-live="polite">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`${MUTED} text-[14px]`}>Sample vehicle</p>
              <p className={`${HEAD} text-[22px] font-bold`}>Truck 07</p>
            </div>
            {chip(car.status === "Arrived", car.status)}
          </div>
          <dl className="mt-5 divide-y divide-[#D3DACF] dark:divide-[#2A3D33]">
            {[["Speed", car.speed], ["Location", car.place], ["Last update", car.seen]].map(([k, val]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className={MUTED}>{k}</dt>
                <dd className={`${INK} text-right font-semibold`}>{val}</dd>
              </div>
            ))}
          </dl>
          <button type="button" onClick={() => setV((x) => (x + 1) % VEHICLE_STATES.length)} className={`${BTN_PRIMARY} mt-4 w-full text-center`}>
            Refresh location
          </button>
        </div>
      ) : (
        <div className="mt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={`${MUTED} text-[14px]`}>Sample shipment</p>
              <p className={`${HEAD} text-[22px] font-bold`}>TH-20418</p>
            </div>
            {chip(done, STAGES[step])}
          </div>
          <div className={`mt-5 h-2 overflow-hidden rounded-full ${SURFACE_SOFT}`}>
            <div
              className="h-full rounded-full bg-[#0B7A55] transition-all duration-500 motion-reduce:transition-none dark:bg-[#4ADE9F]"
              style={{ width: `${(step / (STAGES.length - 1)) * 100}%` }}
            />
          </div>
          <ol className="mt-4 space-y-1">
            {STAGES.map((s, i) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-current={i === step ? "step" : undefined}
                  className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2 text-left ${i === step ? SURFACE_SOFT : "hover:bg-black/5 dark:hover:bg-white/5"}`}
                >
                  <span className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 ${INK_BORDER} ${i <= step ? "bg-[#0B7A55] dark:bg-[#4ADE9F]" : ""}`} />
                  <span className={`${i <= step ? INK : MUTED} flex-1 font-semibold`}>{s}</span>
                  {i === step && <span className={`${ACCENT} text-[13px] font-bold`}>Now</span>}
                </button>
              </li>
            ))}
          </ol>
          <button type="button" onClick={() => setStep((s) => (s + 1) % STAGES.length)} className={`${BTN_PRIMARY} mt-4 w-full text-center`}>
            {done ? "Start over" : "Next update"}
          </button>
        </div>
      )}
    </div>
  );
}

function WhatWeDo() {
  const [active, setActive] = useState(0);
  const [title, text, demo] = WHAT_WE_DO[active];
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <div role="tablist" aria-label="What we do" className={`overflow-hidden rounded-[18px] border-2 ${INK_BORDER} ${SURFACE}`}>
        {WHAT_WE_DO.map(([t], i) => (
          <button
            key={t}
            id={`do-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls="do-panel"
            onClick={() => setActive(i)}
            className={`flex w-full items-center justify-between gap-3 border-b border-[#D3DACF] px-5 py-4 text-left last:border-b-0 dark:border-[#2A3D33] ${
              active === i ? `${SURFACE_SOFT} ${INK}` : `${MUTED} hover:bg-black/5 dark:hover:bg-white/5`
            }`}
          >
            <span className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-[18px] font-bold">{t}</span>
            <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${active === i ? "bg-[#FFC21A]" : ""}`} />
          </button>
        ))}
      </div>
      <div id="do-panel" role="tabpanel" aria-labelledby={`do-tab-${active}`} className={`flex flex-col justify-between rounded-[18px] border-2 p-8 ${SURFACE} ${INK_BORDER}`}>
        <div>
          <span className="mb-5 block h-1 w-10 rounded-full bg-[#FFC21A]" />
          <h3 className={`${HEAD} text-[clamp(24px,3vw,32px)] font-bold leading-[1.1]`}>{title}</h3>
          <p className={`${MUTED} mt-3 text-[18px]`}>{text}</p>
        </div>
        <div className={`mt-8 rounded-[14px] px-4 py-3 text-[15px] font-semibold ${SURFACE_SOFT} ${INK}`}>
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#1E8E4E]" />
          {demo}
        </div>
      </div>
    </div>
  );
}

function Purpose() {
  const [which, setWhich] = useState("Mission");
  return (
    <div className="mt-10 grid items-stretch gap-6 md:grid-cols-[0.6fr_1.4fr]">
      <div className="flex flex-col items-start gap-4">
        <Segmented label="Mission or vision" options={["Mission", "Vision"]} value={which} onChange={setWhich} />
        <p className={`${MUTED} max-w-[20em] text-[16px]`}>Switch to read what we do today and where we are headed.</p>
      </div>
      <div className={`rounded-[22px] border-2 bg-[#10231A] p-8 md:p-10 ${INK_BORDER}`} aria-live="polite">
        <p className="text-[15px] font-bold text-[#4ADE9F]">Our {which}</p>
        <p className={`${HEAD} mt-3 !text-white text-[clamp(22px,2.8vw,30px)] font-bold leading-[1.2]`}>{PURPOSE[which]}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className={`${PAPER} font-sans text-[17px] leading-relaxed ${INK}`}>
      <div className="mx-auto max-w-[1120px] px-6">
        {/* Hero */}
        <div className="grid items-center gap-12 pb-16 pt-6 md:grid-cols-[1.1fr_0.9fr] md:pb-[72px] md:pt-12">
          <div>
            <p className={`${ACCENT} text-[15px] font-bold`}>About 3PL TrackHub</p>
            <h1 className={`${HEAD} mt-3 text-[clamp(38px,5.6vw,64px)] font-extrabold leading-[1.04]`}>
              Smart Tracking. Complete Visibility. Reliable Logistics.
            </h1>
            <p className={`${MUTED} mt-5 max-w-[34em] text-[18px]`}>
              3PL TrackHub is a technology-driven logistics tracking platform developed to make transportation and
              shipment management smarter, easier, and more transparent.
            </p>
            <p className={`${MUTED} mt-4 max-w-[34em]`}>
              We help businesses monitor their vehicles, track their live locations, and stay informed about
              transportation movements. From knowing where a vehicle is currently located to monitoring shipment
              progress, 3PL TrackHub brings essential tracking information together on one platform.
            </p>
            <p className={`${MUTED} mt-4 max-w-[34em]`}>
              Our company focuses on providing smart logistics solutions that improve visibility, support better
              planning, and help businesses manage their transportation operations efficiently.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#what-we-do" className={BTN_PRIMARY}>What we do</a>
              <a href="#purpose" className={BTN_GHOST}>Mission and vision</a>
            </div>
          </div>
          <DemoCard />
        </div>

        {/* What we do */}
        <section id="what-we-do" className={`border-t-2 py-14 md:py-20 ${INK_BORDER}`}>
          <h2 className={`${HEAD} max-w-[16em] text-[clamp(30px,4vw,44px)] font-bold leading-[1.05]`}>
            From where a vehicle is to how a shipment is moving
          </h2>
          <p className={`${MUTED} mt-3.5 max-w-[34em]`}>Pick one to see it in action.</p>
          <WhatWeDo />
        </section>

        {/* Commitment */}
        <section className="pb-14 md:pb-20">
          <h2 className={`${HEAD} max-w-[18em] text-[clamp(30px,4vw,44px)] font-bold leading-[1.05]`}>
            Our commitment to technology, transparency and reliability
          </h2>
          <p className={`${MUTED} mt-3.5 max-w-[36em]`}>
            We aim to simplify logistics operations and build greater confidence between businesses, transporters,
            and customers.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {COMMITMENTS.map(([t, d]) => (
              <article
                key={t}
                className={`rounded-[18px] border-2 p-[30px] transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${SURFACE} ${INK_BORDER}`}
              >
                <span className="mb-4 block h-1 w-8 rounded-full bg-[#FFC21A]" />
                <h3 className={`${HEAD} text-[22px] font-bold`}>{t}</h3>
                <p className={`${MUTED} mt-2 text-[16px]`}>{d}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Businesses", "Transporters", "Customers"].map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className={`h-0.5 w-8 bg-[#10231A] dark:bg-[#3C5C4B]`} />}
                <span className={`rounded-full border-2 px-5 py-2 font-bold ${SURFACE_SOFT} ${INK} ${INK_BORDER}`}>{p}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Mission and vision */}
        <section id="purpose" className="pb-14 md:pb-20">
          <h2 className={`${HEAD} max-w-[16em] text-[clamp(30px,4vw,44px)] font-bold leading-[1.05]`}>
            Where we are headed
          </h2>
          <Purpose />
        </section>

        {/* Closing */}
        <section className="pb-16 md:pb-24">
          <div className={`rounded-[22px] border-2 p-8 md:p-12 ${SURFACE} ${INK_BORDER}`}>
            <p className={`${ACCENT} text-[15px] font-bold`}>3PL TrackHub</p>
            <h2 className={`${HEAD} mt-3 max-w-[14em] text-[clamp(30px,4.4vw,52px)] font-extrabold leading-[1.05]`}>
              Track Every Move. Stay Connected. Stay in Control.
            </h2>
            <div className={`mt-8 flex flex-col gap-5 border-t-2 pt-6 md:flex-row md:items-center md:justify-between ${INK_BORDER}`}>
              <p className={`${MUTED} max-w-[28em] text-[18px]`}>Connecting vehicles, businesses and deliveries on one platform.</p>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={BTN_PRIMARY}>Get it on Google Play</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
