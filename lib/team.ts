export type TeamMember = {
  name: string;
  role: string;
  title: string;
  /** Optional photo path under /public. Falls back to an initials avatar when absent. */
  photo?: string;
  /** Optional LinkedIn profile URL, shown under the name and role. */
  linkedin?: string;
};

/**
 * Board members and ambassadors of French Tech Copenhagen.
 * Photos live in /public/team. Source: board roster (May 2026).
 */
export const BOARD: TeamMember[] = [
  {
    name: "Delphine Guesnon",
    role: "Founder & President",
    title: "Commercial transformation lead",
    photo: "/team/delphine-guesnon.jpg",
  },
  {
    name: "Philippe Murison",
    role: "Founder & Board Member",
    title: "AI governance lead",
    photo: "/team/philippe-murison.png",
  },
  {
    name: "Benjamin Delozé",
    role: "Treasurer & Board Member",
    title: "Startup ecosystem lead",
    photo: "/team/benjamin-deloze.png",
  },
  {
    name: "Jean-Louis Rocheron",
    role: "Board Member",
    title: "AEPIFD representative",
    photo: "/team/jean-louis-rocheron.png",
  },
  {
    name: "Igor Chlapak",
    role: "Board Member",
    title: "Business France representative",
    photo: "/team/igor-chlapak.png",
  },
  {
    name: "Matthieu Garrigue-Guyonnaud",
    role: "Board Member",
    title: "Economic Department, Embassy representative",
    photo: "/team/matthieu-garrigue-guyonnaud.png",
  },
];

export const AMBASSADORS: TeamMember[] = [
  {
    name: "Marine Pitto",
    role: "Ambassador",
    title: "Marketing lead",
    photo: "/team/marine-pitto.png",
  },
  {
    name: "Alixe Averty",
    role: "Ambassador",
    title: "Partnership lead",
    photo: "/team/alixe-averty.png",
  },
  {
    name: "Hadrien Matringe",
    role: "Ambassador",
    title: "AI lead",
    photo: "/team/hadrien-matringe.png",
  },
  {
    name: "Hervé Soursou",
    role: "Ambassador",
    title: "GTM & sales automation lead",
    photo: "/team/herve-soursou.png",
  },
  {
    name: "Aurélien Leloup",
    role: "Ambassador",
    title: "Platform lead",
    photo: "/team/aurelien-leloup.png",
  },
  {
    name: "Hugo Berthelot",
    role: "Ambassador",
    title: "Platform lead",
    photo: "/team/hugo-berthelot.png",
  },
  {
    name: "Maxime Haegeman",
    role: "Ambassador",
    title: "AI lead",
    photo: "/team/maxime-haegeman.png",
  },
  {
    name: "Nicolas Chabauty",
    role: "Ambassador",
    title: "Sports lead",
    photo: "/team/nicolas-chabauty.png",
  },
  {
    name: "Lena Djemili",
    role: "Ambassador",
    title: "Ethics & Compliance lead",
    linkedin: "https://www.linkedin.com/in/lenalydia",
  },
  {
    name: "Eline Sekerger",
    role: "Ambassador",
    title: "Product design lead",
    linkedin: "https://www.linkedin.com/in/eline-sekerger",
  },
  {
    name: "Isabelle Faggianelli",
    role: "Ambassador",
    title: "Brand lead",
    linkedin: "https://www.linkedin.com/in/isabelle-faggianelli-445b5490",
  },
];
