// Shared design tokens. Palette:
//   Ink    #10231A  (text, borders)      Paper  #F3F6F0 / dark #0C1712
//   Leaf   #0B7A55  (accent, route)      Mint   #4ADE9F (accent in dark)
//   Amber  #FFC21A  (primary action)     Line   #D3DACF / dark #2A3D33
// Every text color has a dark: pair, so nothing disappears in dark mode.

export const INK = "text-[#10231A] dark:text-[#EEF5EE]";
export const HEAD = `font-['Bricolage_Grotesque',system-ui,sans-serif] tracking-tight ${INK}`;
export const MUTED = "text-[#4C5F54] dark:text-[#A5B8AC]";
export const ACCENT = "text-[#0B7A55] dark:text-[#4ADE9F]";

export const PAPER = "bg-[#F3F6F0] dark:bg-[#0C1712]";
export const SURFACE = "bg-white dark:bg-[#13221A]";
export const SURFACE_SOFT = "bg-[#E6EEE4] dark:bg-[#1A2E24]";
export const HAIRLINE = "bg-[#D3DACF] dark:bg-[#2A3D33]";
export const INK_BORDER = "border-[#10231A] dark:border-[#3C5C4B]";

const BTN =
  "inline-block rounded-[10px] border-2 px-6 py-3.5 font-bold no-underline transition hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7A55] dark:focus-visible:outline-[#4ADE9F] " +
  INK_BORDER;
export const BTN_PRIMARY = `${BTN} bg-[#FFC21A] text-[#10231A] hover:bg-[#FFCF4D]`;
export const BTN_GHOST = `${BTN} bg-transparent ${INK}`;
