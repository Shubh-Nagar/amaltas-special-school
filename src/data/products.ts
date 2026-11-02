/** Creative Store products — from https://amaltasspecialschool.in/category/products/ */
import { WP } from './site';
import type { Product } from './types';

export const products: Product[] = [
  {
    slug: 'festive-diyas',
    title: 'FESTIVE DIYAS',
    description: 'Brighten up your homes with hand-decorated diyas.',
    date: 'May 23, 2025',
    image: `${WP}/2025/05/shared-image-5a.jpg`,
    legacyUrl: 'https://amaltasspecialschool.in/festive-diyas/',
  },
  {
    slug: 'ganpati-murti',
    title: 'GANPATI MURTI',
    description: 'Blessings sculpted with love and skill.',
    date: 'May 23, 2025',
    image: `${WP}/2025/05/shared-image-3.jpeg`,
    legacyUrl: 'https://amaltasspecialschool.in/ganpati-murti/',
  },
  {
    slug: 'rakhies-crafts',
    title: 'RAKHIES & CRAFTS',
    description: 'Tied with love, crafted with skill.',
    date: 'May 23, 2025',
    image: `${WP}/2025/05/RAKHIES-CRAFTS.jpg`,
    legacyUrl: 'https://amaltasspecialschool.in/rakhies-crafts/',
  },
];

/** Creative Store photos from the Facilities page. */
export const creativeStorePhotos = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  full: `${WP}/2025/06/Creative-Store-${n}.jpg`,
  alt: `Creative Store — student handmade products ${n}`,
}));
