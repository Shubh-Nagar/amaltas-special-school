/**
 * Home page copy — taken from https://amaltasspecialschool.in/
 * All copy verified word-for-word against the live page.
 */
import { WP } from './site';

export const hero = {
  eyebrow: 'SPECIAL SCHOOL',
  title: 'Helping Children Learn and Grow',
  body: 'Welcome to Amaltas Special School, where every child is treated with love and care. We use child-friendly teaching methods and helpful therapies to teach new skills, build confidence, and bring happiness to their lives.',
  image: `${WP}/2025/06/shared-image-4.png`,
  primaryCta: { label: 'Get Started', to: '/contact-us' },
  secondaryCta: { label: 'About Us', to: '/about-us' },
  rating: { value: '4.9/5.0', label: 'Review', googleIcon: `${WP}/2023/11/google.png` },
};

export const features = [
  {
    title: 'Multisensory Learning & Activities',
    text: 'Unlock potential through play, movement, and creative expression! Our multisensory approach sparks curiosity, creativity, and joy in learning.',
    icon: 'sparkles',
  },
  {
    title: 'Inclusive Educational Resources',
    text: 'Learning, tailored to every child! Our adaptive materials and resources cater to individual needs, fostering literacy, numeracy, and social growth.',
    icon: 'book',
  },
  {
    title: 'Skill Progress Monitoring & Support',
    text: 'Track progress, celebrate milestones! Our tools empower educators and caregivers to create personalized plans, ensuring every child reaches their full potential.',
    icon: 'chart',
  },
];

export const aboutPreview = {
  eyebrow: 'About Us',
  title: "Our Commitment to Every Child's Growth – Get to Know Us",
  intro:
    'Welcome to Amaltas Special School, where learning meets compassion. We support children with special needs through education, therapy, and life skills—all under one roof.',
  image: `${WP}/2025/06/shared-image-5.png`,
  cta: { label: 'More About Us', to: '/about-us' },
  points: [
    {
      title: 'Skilled & Supportive Team',
      text: 'Our educators, therapists, and caretakers offer loving care through programs like the Functional Academic Checklist (FACP), tailored to every child.',
      icon: 'users',
    },
    {
      title: 'Functional & Inclusive Learning',
      text: 'We use multisensory methods, including Activities of Daily Living (ADLs), Functional Academics (FA), and Pre-Vocational Skills (PVS), to create joyful and meaningful learning.',
      icon: 'puzzle',
    },
    {
      title: 'Therapy-Integrated Environment',
      text: 'Children thrive with therapies like Speech Therapy, Physiotherapy, Yoga, and Dance Therapy in a safe, structured, and inclusive environment made just for them.',
      icon: 'heart',
    },
    {
      title: 'Collaborative Family Approach',
      text: "We partner with parents, share progress, and offer guidance that supports each child's growth both in school and beyond.",
      icon: 'home',
    },
  ],
};

export const trio = [
  {
    title: 'Our Mission',
    text: 'At Amaltas Special School, our mission is to provide a nurturing, inclusive, and empowering environment for children with special needs. We focus on building confidence, life skills, and a love for learning through personalized support and care.',
    to: '/vision-mission',
    tone: 'leaf',
  },
  {
    title: 'Who We Are',
    text: 'Amaltas Special School is a unit of Amaltas Educational Welfare Society and operates with the same vision and mission—to uplift, educate, and empower children with special needs. We are dedicated to creating a nurturing environment where each child receives the support they need to grow, learn, and lead a more independent life.',
    to: '/about-us',
    tone: 'blossom',
  },
  {
    title: 'Our Approach',
    text: "We believe every child learns differently. That's why we follow a holistic approach that blends academics, therapy, and creative activities to meet individual needs and spark growth—emotionally, socially, and intellectually.",
    to: '/why-us',
    tone: 'cream',
  },
] as const;

export const therapiesIntro = {
  eyebrow: 'Therapies',
  title: 'Empowering Growth Through Specialized Therapy Programs',
  text: "At Amaltas Special School, we blend care and expertise to support every child's unique journey. Our therapy programs—ranging from physiotherapy to bhajan therapy—are designed to nurture development, build confidence, and enhance overall well-being.",
  cta: { label: 'View All Therapies', to: '/therapies' },
};

export const flourish = {
  title: ['Where Caring &', 'Learning Flourish'],
  image: `${WP}/2025/06/shared-image-1.jpeg`,
};

export const pillars = {
  title: 'Behind Every Milestone Stands a Visionary.',
  image: `${WP}/2025/05/Our-Pillars-1.jpg`,
  cta: { label: 'Meet Our Pillars', to: '/founder-chairman-message' },
};

export const eventsIntro = {
  eyebrow: 'Events',
  title: 'Explore, Engage & Enjoy - Highlights from Amaltas Special School',
  ctaAll: { label: 'View All Events', to: '/activities-events' },
  ctaUpcoming: { label: 'View All Upcoming Events', to: '/upcoming-events' },
};

export const tour = {
  eyebrow: 'Schedule a Tour',
  title: 'Secure Your Date for a Comprehensive School Tour',
  image: `${WP}/2025/06/Amlatas-Special-schedule-tour.png`,
  submit: 'Submit Now',
};

export const discover = {
  title: 'Discover Our School',
  text: 'Welcome to Amaltas Special School, where every child is welcomed with care and learning is filled with hope and growth. Come see how we nurture skills, confidence, and joy in every student.',
  image: `${WP}/2025/05/DISCOVER-OUR-SCHOOL.jpg`,
};

export const empowering = {
  title: 'Empowering Special Minds to Discover, Learn, and Grow Together',
  image: `${WP}/2023/11/inspiring-img.png`,
  cta: { label: 'Support Their Journey', to: '/contact-us' },
};

export const storeIntro = {
  eyebrow: 'Creative Store',
  title: 'Every Product Tells a Story of Love, Effort, and Growth',
  text: [
    'These creative hands have put in a lot of love making them.',
    'Each handcrafted item reflects not only skill and imagination, but also the joy of learning and becoming self-reliant.',
    'From festive décor to everyday gifts, every purchase supports their journey toward confidence and independence.',
  ],
  cta: { label: 'View All Products', to: '/products' },
};

export const newsIntro = {
  title: 'Amaltas Special School in News',
  cta: { label: 'View All News', to: '/amaltas-special-school-in-news' },
};
