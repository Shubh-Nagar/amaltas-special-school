import type { Institution, NavLink } from './types';

/** Base URL of the existing WordPress media library — all images are referenced from here. */
export const WP = 'https://amaltasspecialschool.in/wp-content/uploads';

export const site = {
  name: 'Amaltas Special School',
  shortName: 'Amaltas Special School',
  tagline: 'SPECIAL SCHOOL',
  parentOrg: 'Amaltas Educational Welfare Society',
  logo: `${WP}/2025/05/Amaltas-Special-School-Logo-2.png`,
  popup: `${WP}/2025/11/pop-up-special-school.jpeg`,
  address: 'Amaltas Special School, Bangar, Dewas (MP) 455001',
  phoneDisplay: '+91-9617245556',
  phoneHref: 'tel:+919617245556',
  whatsappHref: 'https://wa.me/919617245556',
  email: 'amaltasspecialschool@gmail.com',
  mapQuery: 'https://www.google.com/maps/search/?api=1&query=Amaltas+Special+School+Bangar+Dewas',
  mapEmbed:
    'https://www.google.com/maps?q=Amaltas%20Special%20School%2C%20Bangar%2C%20Dewas&output=embed',
  copyright: '© Amaltas Special School. All Rights Reserved',
  studentListPdf: `${WP}/2025/06/special-school-student-list.pdf`,
};

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/amaltasspecialschool', icon: 'facebook' },
  { label: 'X', href: 'https://x.com/AmaltasDewas', icon: 'x' },
  { label: 'Instagram', href: 'https://www.instagram.com/special_school_dewas', icon: 'instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@AmaltasUniversityDewas', icon: 'youtube' },
] as const;

/** Primary navigation — mirrors the menu structure of the original site. */
export const mainNav: NavLink[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Vision & Mission', to: '/vision-mission' },
      { label: 'Founder Chairman Message', to: '/founder-chairman-message' },
      { label: 'Chairman Message', to: '/chairman-message' },
      { label: "Principal's Message", to: '/principals-message' },
      { label: 'Our Team', to: '/our-team' },
      { label: 'Awards & Achievements', to: '/awards-achievements' },
      { label: 'Why Us', to: '/why-us' },
    ],
  },
  {
    label: 'Therapies',
    to: '/therapies',
    children: [
      { label: 'Occupational Therapy', to: '/therapies/occupational-therapy' },
      { label: 'Physiotherapy', to: '/therapies/physiotherapy' },
      { label: 'Speech Therapy', to: '/therapies/speech-therapy' },
      { label: 'Counselling', to: '/therapies/counselling' },
      { label: 'Yoga Therapy', to: '/therapies/yoga-therapy' },
      { label: 'Dance Therapy', to: '/therapies/dance-therapy' },
      { label: 'Bhajan Therapy', to: '/therapies/bhajan-therapy' },
    ],
  },
  // "Admission" pointed to "#" on the original site; it now routes to the tour/enquiry form.
  { label: 'Admission', to: '/contact-us#schedule-a-tour' },
  { label: 'Facilities and Infrastructure', to: '/facilities-and-infrastructure' },
  {
    label: 'Explore Us',
    to: '/activities-events',
    children: [
      { label: 'Happy Parents', to: '/happy-parents' },
      { label: 'Activities / Events', to: '/activities-events' },
      { label: 'Upcoming Events', to: '/upcoming-events' },
      { label: 'Photogallery', to: '/photogallery' },
      { label: 'Amaltas Special School in News', to: '/amaltas-special-school-in-news' },
      { label: 'Gift Distribution', to: '/gift-distribution' },
      { label: 'Creative Store', to: '/products' },
    ],
  },
  { label: 'Contact Us', to: '/contact-us' },
];

export const footerLinks = {
  quick: [
    { label: 'About Us', to: '/about-us' },
    { label: 'Admission', to: '/contact-us#schedule-a-tour' },
    { label: 'Facilities and Infrastructure', to: '/facilities-and-infrastructure' },
    { label: 'Our Team', to: '/our-team' },
    { label: 'Awards & Achievements', to: '/awards-achievements' },
    { label: 'Contact Us', to: '/contact-us' },
    { label: 'Students', to: '/students' },
  ],
  therapies: [
    { label: 'Occupational Therapy', to: '/therapies/occupational-therapy' },
    { label: 'Physiotherapy', to: '/therapies/physiotherapy' },
    { label: 'Speech Therapy', to: '/therapies/speech-therapy' },
    { label: 'Counselling', to: '/therapies/counselling' },
    { label: 'Yoga Therapy', to: '/therapies/yoga-therapy' },
    { label: 'Dance Therapy', to: '/therapies/dance-therapy' },
    { label: 'Bhajan Therapy', to: '/therapies/bhajan-therapy' },
  ],
  explore: [
    { label: 'Happy Parents', to: '/happy-parents' },
    { label: 'Activities / Events', to: '/activities-events' },
    { label: 'Photogallery', to: '/photogallery' },
    { label: 'Amaltas Special School in News', to: '/amaltas-special-school-in-news' },
    { label: 'Gift Distribution', to: '/gift-distribution' },
    { label: 'Upcoming Events', to: '/upcoming-events' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-conditions' },
  ],
};

export const institutions: Institution[] = [
  { name: 'Amaltas Medical College', logo: `${WP}/2025/05/Untitled-design-21.png`, href: 'https://amaltasmedicalcollege.in/' },
  { name: 'Amaltas Nursing', logo: `${WP}/2025/05/Untitled-design-19.png`, href: 'http://amaltasgroup.co.in/nursing' },
  { name: 'Amaltas Ayurvedic', logo: `${WP}/2025/05/Untitled-design-23.png`, href: 'http://amaltasgroup.co.in/ayurvedic/' },
  { name: 'Amaltas Paramedical', logo: `${WP}/2025/05/Untitled-design-11.png`, href: 'http://amaltasgroup.co.in/paramedical/' },
  { name: 'Amaltas Pharmacy', logo: `${WP}/2025/06/Untitled-design-24.png`, href: 'http://amaltasgroup.co.in/pharmacy/' },
];
