export type Picture = {
  /** Path under /public, e.g. "/pictures/claude-demo-01.jpg". */
  src: string;
  /** Accessible description of the photo. */
  alt: string;
  /** Optional event or context label shown as a caption. */
  caption?: string;
};

/**
 * Photos from past French Tech Copenhagen events.
 *
 * To add photos: drop the image files into /public/pictures and add an entry
 * here for each one. Keep files reasonably sized (long edge ~1600px) so the
 * gallery stays fast. The grid renders them in the order listed below.
 */
export const PICTURES: Picture[] = [];
