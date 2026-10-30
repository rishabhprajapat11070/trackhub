import appshot1 from '../assets/appshot1.jpeg';
import appshot2 from '../assets/appshot2.jpeg';
import appshot3 from '../assets/appshot3.jpeg';
import trackhub from "../assets/trackhub.png";





import {
  HEAD, MUTED, INK, ACCENT, SURFACE, SURFACE_SOFT, HAIRLINE, INK_BORDER, BTN_PRIMARY, BTN_GHOST,
} from "./theme.js";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.track.threepl";
const ICON = trackhub 
const SHOTS = [appshot1,appshot2,appshot3];

const APP_FEATURES = [
  ["Live tracking", "See where every vehicle is right now, on any phone or computer."],
  ["Two-month history", "Replay past trips and routes from the last two months."],
  ["Geofences", "Draw zones and get alerted when a vehicle enters or leaves."],
  ["Reports", "Open trip and activity summaries whenever you need them."],
  ["App and web alerts", "Get notified in the app or the browser, wherever you are."],
  ["Engine lock and unlock", "Cut or restore the engine straight from your phone."],
];

const CHIPS = ["Works with any GPS device", "Phone and web", "Rated 3+", "Maps & Navigation"];
const STATS = [["3+", "Age rating"], ["Oct 2026", "Last update"], ["Free", "To install"]];

export default function Appliction() {
  return (
    <section id="app" className="py-14 md:py-20">
      {/* Hero */}
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className={`${ACCENT} text-[15px] font-bold`}>Available on Google Play</p>
          <h2 className={`${HEAD} mt-3 max-w-[12em] text-[clamp(34px,5vw,56px)] font-bold leading-[1.02]`}>
            3PL Track Hub: every tracker, one app
          </h2>
          <p className={`${MUTED} mt-5 max-w-[32em] text-[17px]`}>
            A SaaS-based IoT platform that works with any GPS tracker. Bring all your devices into one place and
            watch your fleet from your phone or your desk.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={BTN_PRIMARY}>
              Get it on Google Play
            </a>
            <a href="#features" className={BTN_GHOST}>See what it does</a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {CHIPS.map((c) => (
              <li key={c} className={`${SURFACE_SOFT} ${INK} rounded-full px-3.5 py-1.5 text-[13px] font-semibold`}>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* App card */}
        <div className="relative mx-auto w-full max-w-[370px]">
          <div className={`absolute -inset-3 -z-10 rotate-2 rounded-[26px] ${HAIRLINE}`} />
          <div className={`rounded-[22px] border-2 p-6 ${SURFACE} ${INK_BORDER}`}>
            <div className="flex items-center gap-4">
              <img
                src={ICON}
                alt="3PL Track Hub app icon"
                width={72}
                height={72}
                className={`h-[72px] w-[72px]  rounded-[18px] border bg-white object-contain ${INK_BORDER}`}
              />
              <div>
                <h3 className={`${HEAD} text-[22px] font-bold leading-tight`}>3PL Track Hub</h3>
                <p className={`${MUTED} text-[14px]`}>by Telematics Solution</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-3 divide-x divide-[#D3DACF] text-center dark:divide-[#2A3D33]">
              {STATS.map(([v, l]) => (
                <div key={l} className="px-2">
                  <dt className={`${HEAD} text-[17px] font-bold`}>{v}</dt>
                  <dd className={`${MUTED} mt-0.5 text-[12px]`}>{l}</dd>
                </div>
              ))}
            </dl>

            <div className={`mt-6 rounded-[14px] p-4 ${SURFACE_SOFT}`}>
              <p className={`${ACCENT} text-[14px] font-bold`}>Data safety</p>
              <p className={`${MUTED} mt-1 text-[14px]`}>
                The developer declares no data collected and none shared with third parties on Google Play.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="mt-16">
        <h3 className={`${HEAD} text-[26px] font-bold`}>See it in action</h3>
        <div className="mt-6 flex snap-x gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible">
          {SHOTS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`3PL Track Hub screenshot ${i + 1}`}
              loading="lazy"
              className={`aspect-[526/296] w-[82%] shrink-0 snap-center rounded-[16px] border-2 object-cover md:w-full ${SURFACE} ${INK_BORDER}`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-16">
        <h3 className={`${HEAD} max-w-[18em] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.1]`}>
          What the app does
        </h3>
        <div className={`mt-8 grid gap-px overflow-hidden rounded-[18px] border-2 md:grid-cols-3 ${HAIRLINE} ${INK_BORDER}`}>
          {APP_FEATURES.map(([title, text]) => (
            <article key={title} className={`${SURFACE} p-[30px]`}>
              <span className="mb-4 block h-1 w-8 rounded-full bg-[#FFC21A]" />
              <h4 className={`${HEAD} text-[21px] font-bold`}>{title}</h4>
              <p className={`${MUTED} mt-2 text-[16px]`}>{text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Closing band: stays dark in both modes */}
      <div className={`mt-16 flex flex-col items-start justify-between gap-6 rounded-[22px] border-2 bg-[#10231A] p-8 md:flex-row md:items-center md:p-10 ${INK_BORDER}`}>
        <div>
          <h3 className={`${HEAD} !text-white text-[clamp(24px,3vw,32px)] font-bold`}>Ready to see your whole fleet?</h3>
          <p className="mt-2 max-w-[30em] text-[16px] text-[#B9CFC1]">
            Install 3PL Track Hub and start tracking in minutes.
          </p>
        </div>
        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-[10px] bg-[#FFC21A] px-6 py-3.5 font-bold text-[#10231A] transition hover:bg-[#FFCF4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}
