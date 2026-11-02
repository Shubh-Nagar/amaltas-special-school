/**
 * About Us, Vision & Mission, Why Us, Our Team, Facilities and Infrastructure.
 * Sources: /about-us/, /vision-mission/, /why-us/, /our-team/, /facilities-and-infrastructure/
 * All copy verified word-for-word against the live pages.
 */
import { WP } from './site';

export const about = {
  title: 'About Us',
  image: `${WP}/2025/06/Amaltas-Special-School-About-Us.jpg`,
  welcome: {
    heading: 'Welcome to Amaltas Special School',
    text: 'The Doors of Amaltas special school are always open to the Differently Abled children/persons who are deprived of a special school and training centre. We are at your service with our well-experienced, dedicated, humble, and loving Special Educators and Caretakers who are available and work round the clock untiringly. Our institution is committed to providing a nurturing and supportive environment, empowering individuals with diverse abilities to reach their full potential and live a fulfilling life.',
  },
  story: {
    heading: 'Our Story',
    text: 'Established by the Amaltas Educational Welfare Society, our institution is committed to providing specialized education and care to individuals with disabilities. We believe in creating a safe, inclusive, and supportive environment that fosters growth, learning, and development.',
  },
  philosophy: {
    heading: 'Our Philosophy',
    text: 'At Amaltas Special School, we are committed to providing high-quality care and education to children with special needs, helping them develop their skills and abilities. We extend our helping hand to individuals with mild, moderate, and severe challenges, spanning across all genders and age groups from zero to forty years. Our approach is to identifying and nurturing the unique strengths and abilities of each individual, promoting independence, self-confidence, and social inclusion.',
  },
  programs: {
    heading: 'Our Programs and Services',
    intro: 'We offer a comprehensive range of programs and services, including:',
    items: [
      'Functional Academic Checklist Programme (FACP)',
      'Activities of Daily Living Skills (ADLS)',
      'Functional Academics (FA)',
      'Pre-Vocational Skills (PVS)',
      'Speech Therapy',
      'Physiotherapy',
      'Yoga',
      'Sports and Games',
      'Vocational Skills',
      'Drama and Dance Therapy',
      'Extracurricular Activities',
      'Psychological assessment & Therapy',
    ],
  },
  joinUs: {
    heading: 'Join Us',
    text: 'If you are seeking a supportive and nurturing environment for your child or loved one, we invite you to join us at Amaltas Special School. Contact us today to learn more about our programs and services, and let us work together to empower individuals with diverse abilities to reach their full potential.',
  },
  approach: {
    heading: 'Our Approach',
    text: "We understand that every child is unique, and learning should reflect this individuality. That's why we offer a holistic approach to education that goes beyond textbooks and tests.",
  },
};

export const visionMission = {
  title: 'Vision & Mission',
  image: `${WP}/2025/06/Vission-Mission.png`,
  vision: {
    heading: 'Vision',
    text: 'To empower individuals with diverse abilities to reach their full potential and live a fulfilling life, by providing a supportive and inclusive environment that fosters growth, learning, and development.',
  },
  mission: {
    heading: 'Mission',
    lead: 'To unlock the potential of every student through:',
    points: [
      { title: 'Personalized Learning Plans', text: 'that cater to individual needs and abilities' },
      { title: 'Integrated Therapy & Education', text: 'that promotes personal and academic growth' },
      {
        title: 'A Collaborative Team Approach',
        text: 'that connects therapists, educators, and families to ensure holistic development',
      },
    ],
    closing:
      'By working together, we aim to shape the future of our students and help them achieve their goals, while promoting independence, self-confidence, and social inclusion.',
  },
};

export const whyUs = {
  title: 'Why Us',
  image: `${WP}/2025/06/shared-image-6.png`,
  heading: 'Why Choose Amaltas Special School?',
  intro:
    'At Amaltas Special School, we are dedicated to providing a nurturing and supportive environment that empowers individuals with diverse abilities to reach their full potential. Here’s why we stand out:',
  points: [
    {
      title: 'Personalized Approach',
      text: 'We believe in tailoring our programs and services to meet the unique needs and abilities of each student. Our personalized learning plans ensure that every student receives the support and guidance they need to succeed.',
      icon: 'target',
    },
    {
      title: 'Integrated Therapy & Education',
      text: 'Our integrated approach combines therapy and education to promote personal and academic growth. This holistic approach enables our students to develop their skills and abilities in a supportive and inclusive environment.',
      icon: 'layers',
    },
    {
      title: 'Collaborative Team Approach',
      text: 'Our team of experienced and dedicated professionals works collaboratively with therapists, educators, and families to ensure the holistic development of our students. This approach enables us to provide comprehensive support and care to our students.',
      icon: 'users',
    },
    {
      title: 'Experienced and Dedicated Team',
      text: 'Our team of special educators, therapists, and caretakers are experienced and dedicated to providing high-quality care and education to our students. We strive to create a supportive and inclusive environment that fosters growth, learning, and development.',
      icon: 'award',
    },
    {
      title: 'State-of-the-Art Facilities',
      text: 'We provide state-of-the-art facilities, including smart classrooms, library, and bus facility, to support the learning and development of our students.',
      icon: 'building',
    },
    {
      title: 'Resource Room',
      text: 'Our Resource Room provides training and support to our students, enabling them to develop their skills and abilities. This facility plays a crucial role in empowering our students to reach their full potential.',
      icon: 'puzzle',
    },
    {
      title: 'Creativity Store',
      text: 'Our Creativity Store is a unique initiative that enables our students to showcase their talents and skills. By selling handmade items, gifts, and other articles prepared by our students, we provide them with an opportunity to earn and develop their entrepreneurial skills.',
      icon: 'gift',
    },
    {
      title: 'Residential School & Training Centre',
      text: 'As a residential school, we provide a safe and supportive living environment for our students, allowing them to live and learn together. Our training centre offers a range of programs and services designed to promote independence, self-confidence, and social inclusion.',
      icon: 'home',
    },
    {
      title: 'Proven Track Record',
      text: 'We have a proven track record of empowering individuals with diverse abilities to reach their full potential and live fulfilling lives. Our commitment to providing high-quality care and education has earned us a reputation as a leading special school in the region.',
      icon: 'trending',
    },
  ],
  join: {
    title: 'Join Our Community',
    text: 'If you are seeking a supportive and nurturing environment for your child or loved one, we invite you to join our community at Amaltas Special School. Contact us today to learn more about our programs and services.',
  },
};

export const team = {
  title: 'Our Team',
  image: `${WP}/2025/06/Teams.png`,
  intro:
    'Our team of experienced and dedicated professionals is committed to providing high-quality care and education to our students. We strive to create a supportive and inclusive environment that fosters growth, learning, and development.',
  roles: [
    { title: 'Special Educators', icon: 'book' },
    { title: 'Occupational Therapist', icon: 'hand' },
    { title: 'Physiotherapist', icon: 'activity' },
    { title: 'Speech Therapist', icon: 'message' },
    { title: 'Vocational Training', icon: 'wrench' },
    { title: 'Psychologist', icon: 'brain' },
    { title: 'Paediatrician', icon: 'stethoscope' },
    { title: 'Psychiatrist', icon: 'smile' },
  ],
};

export const facilities = {
  title: 'Facilities and Infrastructure',
  intro:
    'At Amaltas Special School, we provide a supportive and inclusive environment that fosters growth, learning, and development. Our state-of-the-art facilities and infrastructure are designed to meet the unique needs of our students.',
  intro2:
    'At Amaltas Special School, we strive to create a supportive and inclusive environment for our students. Our facilities are designed to meet their unique needs and provide a comfortable learning experience.',
  smartClassrooms: {
    heading: 'Smart Classrooms',
    image: `${WP}/2025/06/Smart-Classroom.png`,
    paragraphs: [
      'Our classrooms are equipped with interactive tools and technology to make learning engaging and fun.',
      'At Amaltas Special School, our Smart Classrooms use modern technology to create a joyful, interactive, and supportive learning environment. Visual and learning helps students understand better, build confidence, and grow at their own pace.',
    ],
    benefitsLabel: 'Benefits',
    benefits: ['Enhanced engagement', 'Simplified learning', 'Inclusive for all students'],
  },
  library: {
    heading: 'Library',
    text: 'Our library has a collection of books and resources that cater to different interests and reading levels. Students can access a variety of materials to support their learning.',
    images: [1, 2, 3].map((n) => `${WP}/2025/06/library${n}.jpg`),
  },
  transportation: {
    heading: 'Transportation',
    text: 'We provide a safe and comfortable bus service for our students, ensuring their well-being during their daily commute.',
  },
  creativeStore: {
    heading: 'Creative Store',
    text: 'Our Creative Store showcases the artistic talents of our students, featuring handmade products like paintings, cards, and more.',
  },
  residential: {
    heading: 'Residential Facility',
    text: 'Our residential facility provides a safe and supportive living environment, helping students develop life skills, social skills, and academic skills for independent living.',
  },
};
