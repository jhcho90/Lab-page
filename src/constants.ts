import { NewsItem, Publication, Project, Member } from './types';

export const NEWS_DATA: NewsItem[] = [
  /*
  {
    id: '1',
    date: '2024-02-20',
    title: 'Paper accepted at CVPR 2024',
    content: 'Our work on efficient neural architectures has been accepted for presentation at CVPR 2024.'
  },
  {
    id: '2',
    date: '2024-01-15',
    title: 'New Research Grant Awarded',
    content: 'The lab has received a major research grant from the National Science Foundation.'
  },
  */
  {
    id: '1',
    date: '2026-03-01',
    title: 'Recruiting new members!',
    content: 'We are looking for undergraduate interns, and graduate students to work with! If you are interested, please send your CV to the professor.'
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'p1',
    title: 'Learning Confidence Measure with Transformer in Stereo Matching',
    authors: ['Jini Yang', 'Minjung Yoo', 'Jaehoon Cho', 'Sunok Kim'],
    venue: 'Pattern Recognition (PR)',
    year: 2025,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'p2',
    title: 'A Prototype Unit for Image De-raining using Time-Lapse Data',
    authors: ['Jaehoon Cho', 'Jini Yang', 'Minjung Yoo', 'Sunok Kim'],
    venue: 'British Machine Vision Conference (BMVC)',
    year: 2024,
    type: 'Conference',
    link: '#'
  },
  {
    id: 'p3',
    title: 'Efficient Training of Vision Transformers',
    authors: ['Bob Wilson', 'Lab Member'],
    venue: 'arXiv',
    year: 2024,
    type: 'Preprint',
    link: '#'
  },
  {
    id: 'p4',
    title: 'Robust Reinforcement Learning in Dynamic Environments',
    authors: ['Jane Smith', 'Lab Member'],
    venue: 'ICML Workshop on Robustness',
    year: 2023,
    type: 'Workshop',
    link: '#'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'Next-Gen Autonomous Navigation',
    description: 'Developing robust perception and planning algorithms for autonomous vehicles in complex urban environments.',
    imageUrl: 'https://picsum.photos/seed/nav/800/600',
    status: 'Ongoing'
  },
  {
    id: 'proj2',
    title: 'Privacy-Preserving Federated Learning',
    description: 'Investigating new methods for training machine learning models across decentralized devices while maintaining strict data privacy.',
    imageUrl: 'https://picsum.photos/seed/privacy/800/600',
    status: 'Ongoing'
  },
  {
    id: 'proj3',
    title: 'Human-AI Collaborative Systems',
    description: 'Designing interfaces and algorithms that enable seamless cooperation between humans and AI agents in creative tasks.',
    imageUrl: 'https://picsum.photos/seed/collab/800/600',
    status: 'Completed'
  }
];

export const MEMBERS_DATA: Member[] = [
  {
    id: 'm1',
    name: 'Prof. Jaehoon Cho',
    role: 'Faculty',
    category: 'Faculty',
    imageUrl: '/photo/sihyun_jhc.jpg',
    description: 'Director of the AIMS Lab. Research interests include Deep Learning, Computer Vision, and Robotics.',
    email: 'jh.cho@kau.ac.kr',
    website: 'https://jhcho90.github.io/'
  },
  {
    id: 'm2',
    name: 'This could be you!',
    role: 'Master Student',
    category: 'Students',
    imageUrl: '/photo/you.png',
  },
  /*
  {
    id: 'm3',
    name: 'Emily Wong',
    role: 'PhD Student',
    category: 'Students',
    imageUrl: 'https://picsum.photos/seed/std2/400/400',
    description: 'Researching multi-modal learning and cross-domain adaptation.',
    email: 'emily.w@university.edu',
    website: 'https://example.com/emily-wong'
  },
  {
    id: 'm4',
    name: 'Michael Ross',
    role: 'Master Student',
    category: 'Students',
    imageUrl: 'https://picsum.photos/seed/std3/400/400',
    description: 'Working on efficient inference for edge devices.',
    email: 'michael.r@university.edu',
    website: 'https://example.com/michael-ross'
  }
  */
];
