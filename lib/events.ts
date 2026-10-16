export type PastEvent = {
  title: string;
  date: string;
  time?: string;
  url: string;
  /**
   * Optional invitation image for the event, shown on the Past events card.
   * Place files under /public/events and reference them as
   * "/events/<file>.png". Falls back to a text-only card when absent.
   */
  image?: string;
};

export type EventLink = {
  label: string;
  url: string;
  note?: string;
  primary?: boolean;
};

export type FeaturedEvent = {
  title: string;
  date: string;
  time?: string;
  locationStart?: string;
  locationEnd?: string;
  description: string;
  audience?: string[];
  links: EventLink[];
};

// Upcoming events shown in the "Next up" section. Keep only events whose date
// is in the future; once an event has passed, move it down to PAST_EVENTS.
export const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    title: "French Tech Copenhagen Startup Pitch Night",
    date: "Friday, November 6, 2026",
    time: "5:00 PM – 7:30 PM GMT+1",
    locationStart: "Copenhagen central (around Nørreport, to be confirmed)",
    description:
      "Our very first Startup Pitch night! Be part of the jury in a friendly pitch competition. Inspire: a founder story with Thomas Canguilhem, founder of Ecotree, on what building a company really takes. Promote: Anthony, Benjamin, Christel, Laura and Maxence get 5 minutes each to demo their product and present their company. Connect: you judge, you question, and then we keep the conversation going over drinks. Doors 5:00 PM · Interview 5:30 PM · Pitches 6:00 PM · Networking 6:30 PM. Danish startup founders: 1 to 2 pitch slots left, contact us directly if you want to bridge the French and Danish ecosystems.",
    links: [
      {
        label: "Save your seat on Luma",
        url: "https://luma.com/x6uzgu17",
        primary: true,
      },
    ],
  },
];

// Past events, most recent first.
export const PAST_EVENTS: PastEvent[] = [
  {
    title: "“Back to Tech” — French Tech Networking",
    date: "Thursday, September 17, 2026",
    time: "5:30 PM – 11:00 PM GMT+2",
    url: "https://luma.com/dx9r6pnk",
  },
  {
    title: "Social Run × Tech: From Idea to Startup",
    date: "Wednesday, June 17, 2026",
    time: "6:15 PM GMT+2",
    url: "https://luma.com/au6alddz",
  },
  {
    title: "Claude Demo Followed By Roundtables And Networking",
    date: "Wednesday, May 20, 2026",
    time: "6:30 PM – 11:00 PM GMT+2",
    url: "https://luma.com/0ahzow8h",
  },
];
