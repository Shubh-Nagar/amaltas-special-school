/** Therapies — from https://amaltasspecialschool.in/therapies/ and each /courses/<slug>/ page. */
import { WP } from './site';
import type { Therapy } from './types';

export const therapies: Therapy[] = [
  {
    slug: 'occupational-therapy',
    title: 'Occupational Therapy',
    image: `${WP}/2025/05/Occupational-Therapy.jpg`,
    icon: 'hand',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/occupational-therapy/',
    points: [
      'Develops daily living skills, such as dressing and grooming.',
      'Enhances functional abilities for work, leisure, and social interactions.',
      'Promotes independence and improves quality of life.',
      'Helps individuals develop adaptive strategies and sensory integration skills.',
    ],
  },
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    image: `${WP}/2025/05/Physiotherapy.jpg`,
    icon: 'activity',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/physiotherapy/',
    points: [
      'Helps individuals with physical disabilities or impairments to improve their mobility, strength, and function.',
      'Enhances gross and fine motor skills, balance, and coordination.',
      'Supports individuals in achieving their maximum potential and participating in daily activities.',
    ],
  },
  {
    slug: 'speech-therapy',
    title: 'Speech Therapy',
    image: `${WP}/2025/05/Speech-Therapy.jpg`,
    icon: 'message',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/speech-therapy__trashed-2/',
    points: [
      'Assesses and treats communication disorders, including speech, language, and hearing impairments.',
      'Develops strategies to improve communication skills, such as articulation, fluency, and comprehension.',
      'Enhances social communication and interaction skills.',
    ],
  },
  {
    slug: 'counselling',
    title: 'Counselling',
    image: `${WP}/2025/05/Counselling.jpg`,
    icon: 'smile',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/counselling/',
    points: [
      'Provides a supportive and non-judgmental environment to discuss emotional and psychological concerns.',
      'Helps individuals develop coping strategies, self-awareness, and self-acceptance.',
      'Supports individuals in managing stress, anxiety, and other mental health challenges.',
    ],
  },
  {
    slug: 'yoga-therapy',
    title: 'Yoga Therapy',
    image: `${WP}/2025/05/Yoga-Therapy.jpg`,
    icon: 'flower',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/yoga-therapy/',
    points: [
      'Utilizes yoga techniques to promote physical, emotional, and mental well-being.',
      'Enhances flexibility, balance, and strength, while reducing stress and anxiety.',
      'Supports individuals in developing greater body awareness and self-regulation skills.',
    ],
  },
  {
    slug: 'dance-therapy',
    title: 'Dance Therapy',
    image: `${WP}/2025/05/Dance-Therapy.jpg`,
    icon: 'music',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/dance-therapy/',
    points: [
      'Uses movement and dance to express and communicate emotions, thoughts, and experiences.',
      'Enhances creativity, self-expression, and social interaction skills.',
      'Supports individuals in developing greater body awareness and confidence.',
    ],
  },
  {
    slug: 'bhajan-therapy',
    title: 'Bhajan Therapy',
    image: `${WP}/2025/05/Bhajan-Therapy.jpg`,
    icon: 'bell',
    price: 'Free',
    level: 'All Levels',
    legacyPath: '/courses/bhajan-therapy/',
    points: [
      'Utilizes devotional music and chanting to promote emotional and spiritual well-being.',
      'Enhances relaxation, stress reduction, and mood improvement.',
      'Supports individuals in developing greater sense of calm, peace, and inner connection.',
    ],
  },
];

export const getTherapy = (slug: string) => therapies.find((t) => t.slug === slug);
