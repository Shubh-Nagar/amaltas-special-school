/**
 * Parent testimonials as they appear on the current home page.
 *
 * ⚠️ CONTENT NOTE: On the live site all three cards share the same text, and that
 * text is leftover theme copy that mentions "Escada" (not this school). The names
 * and photos are also theme defaults. The full text is kept verbatim so nothing
 * is removed, but these should be replaced with real parent testimonials before launch.
 */
import { WP } from './site';
import type { Testimonial } from './types';

const sharedQuote =
  "Choosing Escada for our child's education was one of the best decisions we ever made. The teachers are not just educators; they are mentors who truly care about each child's development. Our daughter's confidence has soared, and she's excited to learn every day. We couldn't be happier!";

export const testimonials: Testimonial[] = [
  { name: 'Olivar Lucy', image: `${WP}/2023/11/testimonials-1.jpg`, quote: sharedQuote },
  { name: 'Floyd Miles', image: `${WP}/2023/11/testimonials-2.jpg`, quote: sharedQuote },
  { name: 'Kathryn Murphy', image: `${WP}/2023/11/testimonials-3.jpg`, quote: sharedQuote },
];

export const testimonialsIntro = {
  eyebrow: 'Testimonials',
  title: 'See What Our Parents Have to Say',
};
