/**
 * Shared content types. All content lives in /src/data so that editors can
 * update text and images without touching component code.
 */

export interface NavLink {
  label: string;
  /** Internal route (starts with "/") or absolute external URL. */
  to: string;
  children?: NavLink[];
}

export interface Therapy {
  slug: string;
  title: string;
  image: string;
  /** "About Course" bullet points from the original therapy page. */
  points: string[];
  /** Label shown on the original therapy cards. */
  price: string;
  level: string;
  /** Lucide icon name key (see components/ui/Icon.tsx). */
  icon: string;
  /** Path of the original WordPress page — kept for redirects. */
  legacyPath: string;
}

export interface SchoolEvent {
  slug: string;
  title: string;
  /** Day + month exactly as shown on the original site, e.g. "02 Sep". */
  day: string;
  month: string;
  year?: string;
  time?: string;
  location: string;
  image: string;
  /** Original WordPress event URL. */
  legacyUrl?: string;
  /** Extra detail line from the original listing (e.g. blood donation dates). */
  note?: string;
  /** Paragraphs from the original event page, verbatim. */
  description?: string[];
  /** Photo gallery from the original event page. */
  gallery?: { full: string; thumb?: string }[];
}

export interface Product {
  slug: string;
  title: string;
  /** One-line description from the original product post. */
  description?: string;
  date: string;
  image: string;
  legacyUrl: string;
}

export interface Testimonial {
  name: string;
  image: string;
  quote: string;
}

export interface GalleryImage {
  full: string;
  thumb?: string;
  alt: string;
}

export interface Institution {
  name: string;
  logo: string;
  href: string;
}

export interface Message {
  slug: string;
  pageTitle: string;
  name: string;
  designation: string;
  image: string;
  /** Each entry is a section; heading optional. */
  sections: { heading?: string; paragraphs?: string[]; points?: { title: string; text: string }[] }[];
}
