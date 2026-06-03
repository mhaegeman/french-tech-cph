export type PastEvent = {
  title: string;
  date: string;
  time?: string;
  url: string;
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

export const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    title: "Social Run × Tech: From Idea to Startup",
    date: "Tuesday, June 17, 2026",
    time: "Departure 6:15 PM (GMT+2)",
    locationStart: "Forum metro station",
    locationEnd: "Melt restaurant",
    description:
      "A one-of-a-kind evening mixing sport, tech and entrepreneurship. We move together, we connect, and we finish around a drink. Test RACE2BE, a brand-new social running app built for the event — with a free half-pint waiting for participants at the finish. No need to be a runner: you can also join on foot, at your own pace. The only thing that matters is being there. On arrival, we sit down for a talk on a subject close to our hearts — \"How do you turn an original idea into a company?\" — and share our experiences, mistakes and lessons learned, from the first spark to validating the concept and the early steps of building a company.",
    audience: [
      "Aspiring entrepreneurs",
      "Project owners",
      "Anyone curious about innovation and tech",
      "Runners and walkers who love good conversations",
    ],
    links: [
      {
        label: "Register for the talk (Luma)",
        url: "https://luma.com/au6alddz",
        primary: true,
      },
      {
        label: "Join the run (RACE2BE)",
        url: "https://app.race2be.com/events/cmps4wxf00001xn64gyav4cqi",
        note: "Includes a free half-pint — limited to 30 spots",
      },
    ],
  },
];

export const PAST_EVENTS: PastEvent[] = [
  {
    title: "Claude Demo Followed By Roundtables And Networking",
    date: "Wednesday, May 20, 2026",
    time: "6:30 PM – 11:00 PM GMT+2",
    url: "https://luma.com/0ahzow8h",
  },
];
