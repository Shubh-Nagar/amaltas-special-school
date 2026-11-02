/**
 * Image collections: News, Photogallery, Gift Distribution, Happy Parents, Awards.
 * All URLs point at the existing WordPress media library, in the original page order.
 */
import { WP } from './site';
import type { GalleryImage } from './types';

/** Builds a gallery item; `thumb` uses the WordPress-generated thumbnail size where one exists. */
const img = (path: string, alt: string, thumb?: string): GalleryImage => ({
  full: `${WP}/${path}`,
  thumb: thumb ? `${WP}/${thumb}` : undefined,
  alt,
});

/* ------------------------------------------------------------------ News */
const newsPairs: [string, string][] = [
  ['2026/09/ganesh-ji-making-Special-scl-news-1.jpg.jpeg', '2026/09/ganesh-ji-making-Special-scl-news-1.jpg-240x300.jpeg'],
  ['2026/08/15-AUG.jpg.jpeg', '2026/08/15-AUG.jpg-240x300.jpeg'],
  ['2026/07/WhatsApp-Image-2026-07-10-at-2.07.37-PM.jpeg', '2026/07/WhatsApp-Image-2026-07-10-at-2.07.37-PM-240x300.jpeg'],
  ['2026/06/yoga.jpg', '2026/06/yoga-240x300.jpg'],
  ['2026/06/yoga-1.jpg', '2026/06/yoga-1-240x300.jpg'],
  ['2026/06/amaltas-news-4.jpeg', '2026/06/amaltas-news-4-240x300.jpeg'],
  ['2026/06/amaltas-news-1.jpeg', '2026/06/amaltas-news-1-240x300.jpeg'],
  ['2026/06/amaltas-news-2.jpeg', '2026/06/amaltas-news-2-240x300.jpeg'],
  ['2026/06/amaltas-news-3.jpeg', '2026/06/amaltas-news-3-240x300.jpeg'],
  ['2025/12/IMG-20251210-WA0099.jpg', '2025/12/IMG-20251210-WA0099-300x300.jpg'],
  ['2025/12/IMG-20251210-WA0100.jpg', '2025/12/IMG-20251210-WA0100-294x300.jpg'],
  ['2025/12/IMG-20251210-WA0101.jpg', '2025/12/IMG-20251210-WA0101-300x300.jpg'],
  ['2025/12/IMG-20251210-WA0102.jpg', '2025/12/IMG-20251210-WA0102-300x300.jpg'],
  ['2025/12/IMG-20251210-WA0112.jpg', '2025/12/IMG-20251210-WA0112-300x300.jpg'],
  ['2025/12/IMG-20251210-WA0091.jpg', '2025/12/IMG-20251210-WA0091-229x300.jpg'],
  ['2025/07/a1.jpg', '2025/07/a1-287x300.jpg'],
  ['2025/07/a2.jpg', '2025/07/a2-287x300.jpg'],
  ['2025/05/news1.jpg', '2025/05/news1-287x300.jpg'],
  ['2025/05/news3.jpg', '2025/05/news3-287x300.jpg'],
  ['2025/05/news2.jpg', '2025/05/news2-287x300.jpg'],
  ['2026/01/WhatsApp-Image-2026-01-17-at-11.15.53.jpeg', '2026/01/WhatsApp-Image-2026-01-17-at-11.15.53-300x300.jpeg'],
  ['2026/01/WhatsApp-Image-2026-01-17-at-11.15.54.jpeg', '2026/01/WhatsApp-Image-2026-01-17-at-11.15.54-300x300.jpeg'],
  ['2026/01/WhatsApp-Image-2026-01-17-at-11.15.55.jpeg', '2026/01/WhatsApp-Image-2026-01-17-at-11.15.55-300x300.jpeg'],
  ['2026/01/WhatsApp-Image-2026-01-17-at-11.15.57.jpeg', '2026/01/WhatsApp-Image-2026-01-17-at-11.15.57-300x300.jpeg'],
  ['2026/01/WhatsApp-Image-2026-01-17-at-11.08.42.jpeg', '2026/01/WhatsApp-Image-2026-01-17-at-11.08.42-240x300.jpeg'],
  ['2026/03/Untitled-1a.png', '2026/03/Untitled-1a-300x300.png'],
  ['2026/05/WhatsApp-Image-2026-05-13-at-16.51.02.jpeg', '2026/05/WhatsApp-Image-2026-05-13-at-16.51.02-240x300.jpeg'],
  ['2026/05/WhatsApp-Image-2026-05-13-at-16.51.06.jpeg', '2026/05/WhatsApp-Image-2026-05-13-at-16.51.06-240x300.jpeg'],
  ['2026/05/WhatsApp-Image-2026-05-13-at-16.51.04.jpeg', '2026/05/WhatsApp-Image-2026-05-13-at-16.51.04-240x300.jpeg'],
  ['2026/05/WhatsApp-Image-2026-05-13-at-16.51.05.jpeg', '2026/05/WhatsApp-Image-2026-05-13-at-16.51.05-240x300.jpeg'],
  ['2026/05/kilkari.jpg', '2026/05/kilkari-240x300.jpg'],
  ['2026/05/kilkari-1.jpg', '2026/05/kilkari-1-240x300.jpg'],
  ['2026/05/kilkari-2.jpg', '2026/05/kilkari-2-240x300.jpg'],
  ['2026/05/kilkari-3.jpg', '2026/05/kilkari-3-240x300.jpg'],
];
export const newsImages: GalleryImage[] = newsPairs.map(([full, thumb], i) =>
  img(full, `Amaltas Special School in the news — clipping ${i + 1}`, thumb),
);

/* ----------------------------------------------------------- Photogallery */
const photoPaths: string[] = [
  ...['6330', '6313', '6304', '6298', '6286', '6280', '6263', '6243', '6237', '6227', '6222', '6211', '6440', '6408', '6386', '6371'].map(
    (n) => `2026/08/435A${n}.jpg`,
  ),
  '2026/08/435A6354-1-rotated.jpg',
  '2026/08/435A6422-1-rotated.jpg',
  ...['7414', '7410', '7408', '7399', '7394', '7393', '7391', '7389', '7387', '7384', '7378', '7376'].map((n) => `2026/08/435A${n}.jpg`),
  '2026/08/3c2abb6d-405c-4d3b-8e76-905b45e8ed7f.png',
  ...['7432', '7429', '7425', '7417'].map((n) => `2026/08/435A${n}.jpg`),
  ...[
    '10.34.32', '10.34.50', '10.34.49', '10.34.49-1', '10.34.48', '10.34.48-1', '10.34.47', '10.34.47-1', '10.34.46',
    '10.34.46-1', '10.34.45', '10.34.44', '10.34.44-1', '10.34.43', '10.34.43-1', '10.34.42', '10.34.42-1', '10.34.41',
    '10.34.41-1', '10.34.40', '10.34.40-1', '10.34.39', '10.34.39-1', '10.34.38', '10.34.38-1', '10.34.37', '10.34.36',
    '10.34.36-1', '10.34.35', '10.34.34', '10.34.34-1', '10.34.33-1', '10.34.33', '10.34.31-1-rotated', '10.34.30-1-rotated',
    '10.04.12',
  ].map((t) => `2026/05/WhatsApp-Image-2026-05-13-at-${t}.jpeg`),
  ...['18.04.32', '18.04.31', '18.04.31-1', '18.04.30', '18.04.30-1', '18.04.29', '18.04.28', '18.04.28-1'].map(
    (t) => `2025/12/WhatsApp-Image-2025-12-30-at-${t}.jpeg`,
  ),
  ...[8, 5, 6, 7, 4, 3, 2, 1].map((n) => `2025/06/Creative-Store-${n}.jpg`),
  '2025/06/library1.jpg',
  '2025/06/library2.jpg',
  '2025/06/library3.jpg',
  ...['14.50.57-2', '14.50.57', '14.50.58-1', '14.50.58-2', '14.50.58', '14.50.59-1', '14.50.59', '14.51.00', '14.50.56', '14.50.57-1'].map(
    (t) => `2026/01/WhatsApp-Image-2026-01-27-at-${t}.jpeg`,
  ),
];
export const photogallery: GalleryImage[] = photoPaths.map((p, i) => img(p, `Amaltas Special School photo ${i + 1}`));

/* ------------------------------------------------------- Gift Distribution */
const giftPaths = [
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.06.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.06-1.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.07.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.07-1.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.08.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.08-1.jpeg',
  '2026/02/WhatsApp-Image-2026-02-19-at-09.55.05.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.29.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.29-1.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.28.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.27.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.27-2.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.27-1.jpeg',
  '2026/01/WhatsApp-Image-2026-01-29-at-18.14.26.jpeg',
  '2026/02/WhatsApp-Image-2026-02-10-at-16.14.31.jpeg',
  '2026/02/WhatsApp-Image-2026-02-10-at-16.14.32.jpeg',
];
export const giftDistribution: GalleryImage[] = giftPaths.map((p, i) => img(p, `Gift distribution photo ${i + 1}`));

/* ------------------------------------------------------------ Happy Parents */
export const happyParents: GalleryImage[] = [
  img('2026/01/shared-image-75.jpeg', 'Happy parents feedback 1'),
  img('2026/01/shared-image-76.jpeg', 'Happy parents feedback 2'),
  img(
    '2026/05/Screenshot-2026-05-13-at-13-36-04-WhatsApp-Image-2026-05-13-at-10.09.24.jpeg-JPEG-Image-720-%C3%97-1600-pixels-%E2%80%94-Scaled-40.png',
    'Happy parents feedback 3',
  ),
];

/* ---------------------------------------------------- Awards & Achievements */
export const awards: GalleryImage[] = [
  img('2026/01/shared-image-73.jpeg', 'Amaltas Special School award and achievement 1'),
  img('2026/01/shared-image-74a.jpg', 'Amaltas Special School award and achievement 2'),
];
