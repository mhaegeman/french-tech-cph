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
    linkedin: "https://www.linkedin.com/in/delphine-guesnon-342a971",
  },
  {
    name: "Philippe Murison",
    role: "Founder & Board Member",
    title: "AI governance lead",
    photo: "/team/philippe-murison.png",
    linkedin: "https://www.linkedin.com/in/philippemurison",
  },
  {
    name: "Benjamin Delozé",
    role: "Treasurer & Board Member",
    title: "Startup ecosystem lead",
    photo: "/team/benjamin-deloze.png",
    linkedin: "https://www.linkedin.com/in/bdeloze",
  },
  {
    name: "Jean-Louis Rocheron",
    role: "Board Member",
    title: "AEPIFD representative",
    photo: "/team/jean-louis-rocheron.png",
    linkedin: "https://www.linkedin.com/in/jean-louis-rocheron-514a9918",
  },
  {
    name: "Igor Chlapak",
    role: "Board Member",
    title: "Business France representative",
    photo: "/team/igor-chlapak.png",
    linkedin: "https://www.linkedin.com/in/igor-chlapak-bb089819",
  },
  {
    name: "Matthieu Garrigue-Guyonnaud",
    role: "Board Member",
    title: "Economic Department, Embassy representative",
    photo: "/team/matthieu-garrigue-guyonnaud.png",
    linkedin: "https://www.linkedin.com/in/matthieu-garrigue-guyonnaud-12a1301b",
  },
];

export const AMBASSADORS: TeamMember[] = [
  {
    name: "Marine Pitto",
    role: "Ambassador",
    title: "Marketing lead",
    photo: "/team/marine-pitto.png",
    linkedin: "https://www.linkedin.com/in/marine-pitto-ba69914b",
  },
  {
    name: "Alixe Averty",
    role: "Ambassador",
    title: "Partnership lead",
    photo: "/team/alixe-averty.png",
    linkedin: "https://www.linkedin.com/in/alixe-averty",
  },
  {
    name: "Hadrien Matringe",
    role: "Ambassador",
    title: "AI lead",
    photo: "/team/hadrien-matringe.png",
    linkedin: "https://www.linkedin.com/in/matringe",
  },
  {
    name: "Hervé Soursou",
    role: "Ambassador",
    title: "GTM & sales automation lead",
    photo: "/team/herve-soursou.png",
    linkedin: "https://www.linkedin.com/in/hervesoursou",
  },
  {
    name: "Aurélien Leloup",
    role: "Ambassador",
    title: "Platform lead",
    photo: "/team/aurelien-leloup.png",
    linkedin: "https://www.linkedin.com/in/aurelien-leloup",
  },
  {
    name: "Hugo Berthelot",
    role: "Ambassador",
    title: "Platform lead",
    photo: "/team/hugo-berthelot.png",
    linkedin: "https://www.linkedin.com/in/hugo-berthelot",
  },
  {
    name: "Maxime Haegeman",
    role: "Ambassador",
    title: "AI lead",
    photo: "/team/maxime-haegeman.png",
    linkedin: "https://www.linkedin.com/in/maxime-haegeman",
  },
  {
    name: "Nicolas Chabauty",
    role: "Ambassador",
    title: "Sports lead",
    photo: "/team/nicolas-chabauty.png",
    linkedin: "https://www.linkedin.com/in/nicolas-chabauty-586a51140",
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
