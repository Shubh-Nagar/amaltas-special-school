/**
 * Leadership messages ("Our Pillars").
 * Sources: /founder-chairman-message/, /chairman-message/, /principals-message/
 * All copy verified word-for-word against the live pages.
 */
import { WP } from './site';
import type { Message } from './types';

export const messages: Message[] = [
  {
    slug: 'founder-chairman-message',
    pageTitle: 'Founder Chairman Message',
    name: 'Mr. Suresh Singh Bhadoria',
    designation: 'Founder Chairman, Amaltas Educational Welfare Society',
    image: '/images/founder-chairman.jpg',
    sections: [
      {
        paragraphs: [
          'It is my pleasure to welcome you to Amaltas Special School, a beacon of hope and opportunity for children with special needs in the rural area of Dewas District. As the founder of Amaltas Educational Welfare Society, which runs this esteemed institution, I am proud to share our vision of providing high-quality education and care to children with diverse abilities.',
          'At Amaltas Special School, we believe that every child deserves the chance to thrive and reach their full potential, regardless of their abilities or geographical location. Our school is committed to providing a supportive and inclusive environment that fosters growth, learning, and development.',
          'We have been faithfully serving the community for years, and our experience has taught us the importance of providing personalized care and attention to each child. Our team of dedicated professionals works tirelessly to ensure that every child receives the support and guidance they need to succeed.',
          'What sets us apart is our commitment to providing holistic education and care, centered on the unique needs of each child. We offer a range of programs and services designed to promote academic, social, and emotional growth, including personalized learning plans, integrated therapy, and vocational training.',
          'Our goal is to empower children with special needs to become confident, independent, and contributing members of society. We strive to create a world where every child has the opportunity to thrive and reach their full potential.',
          'I would like to express my gratitude to our team of dedicated professionals who work tirelessly to provide high-quality care and education to our students. I would also like to thank our students and their families for trusting us with their care and education.',
          'As we continue to grow and evolve, I am confident that Amaltas Special School will remain a leader in providing education and care to children with special needs in the rural area of Dewas District.',
        ],
      },
    ],
  },
  {
    slug: 'chairman-message',
    pageTitle: 'Chairman Message',
    name: 'Mr. Mayankraj Singh Bhadoria',
    designation: 'Chairman',
    image: `${WP}/2025/06/Chairman.jpg`,
    sections: [
      {
        heading: 'Empowering Rural Education in Dewas District',
        paragraphs: [
          "As the founder of Amaltas Educational Welfare Society, which runs Amaltas Special School in the rural area of Dewas District, I'd like to highlight our commitment to providing quality education and care to children with special needs in this underserved region. Our school is dedicated to bridging the gap in educational opportunities between urban and rural areas, ensuring that every child, regardless of their geographical location or abilities, has access to holistic development.",
        ],
      },
      {
        heading: 'Our Vision for Rural Education',
        points: [
          {
            title: 'Inclusive Education',
            text: 'We strive to create an inclusive environment where children with diverse abilities can learn and grow together, fostering empathy, understanding, and social cohesion.',
          },
          {
            title: 'Community Engagement',
            text: "Our school actively engages with the local community, promoting awareness about the importance of education for children with special needs and encouraging parental involvement in their child's educational journey.",
          },
          {
            title: 'Tailored Learning',
            text: 'We provide personalized learning plans, integrated therapy, and vocational training to equip our students with the skills necessary to thrive in their chosen paths.',
          },
        ],
      },
      {
        heading: 'Empowering Rural Communities',
        paragraphs: ['By establishing Amaltas Special School in Dewas District, we aim to empower rural communities by:'],
        points: [
          {
            title: 'Breaking Barriers',
            text: 'Overcoming geographical and socio-economic barriers to education, ensuring that every child has access to quality learning opportunities.',
          },
          {
            title: 'Building Capacity',
            text: 'Strengthening local capacity to support children with special needs, promoting sustainability and long-term impact.',
          },
          {
            title: 'Fostering Inclusion',
            text: 'Encouraging social inclusion and acceptance of individuals with diverse abilities, contributing to a more equitable and compassionate society.',
          },
        ],
      },
      {
        paragraphs: [
          'Our commitment to empowering rural education in Dewas District reflects our vision of creating a more inclusive and supportive environment for all children, regardless of their abilities or geographical location. By working together, we can make a meaningful difference in the lives of our students and their families',
        ],
      },
    ],
  },
  {
    slug: 'principals-message',
    pageTitle: "Principal's Message",
    name: 'Dr. Bharti Lahoria',
    designation: 'Principal',
    image: `${WP}/2025/06/shared-image-6.jpeg`,
    sections: [
      {
        paragraphs: [
          'Our future goal is to become a model center of excellence in special education by fostering an inclusive and adaptive learning environment that empowers every student to reach their full potential. We aim to expand our individualized support services, invest in cutting-edge assistive technologies, and strengthen community partnerships to ensure our students are equipped with the academic, social, and vocational skills necessary for independent and fulfilling lives.',
        ],
      },
    ],
  },
];

export const getMessage = (slug: string) => messages.find((m) => m.slug === slug);
