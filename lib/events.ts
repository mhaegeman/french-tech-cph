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
//
// TODO: add the September 17, 2026 event here once its public Luma URL and
// details (title, time, location, description, invitation image) are available.
export const FEATURED_EVENTS: FeaturedEvent[] = [];

// Past events, most recent first.
export const PAST_EVENTS: PastEvent[] = [
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
