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
    title: 'Recruiting new members!(연구생 모집)',
    content: 'We are looking for students to work with! If you are interested, please send an email to the professor. (jh.cho at kau.ac.kr)',
    link: '/photo/lab_apply.pdf'
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
    title: 'Improving Image de-raining using Reference-guided Transformers',
    authors: ['Zihao Ye', 'Jaehoon Cho', 'Changjae Oh'],
    venue: 'IEEE International Conference on Image Processing (ICIP)',
    year: 2024,
    type: 'Conference',
    link: '#'
  },
  {
    id: 'p4',
    title: 'Multi-task Learning for Real-time Autonomous Driving Leveraging Task-adaptive Attention Generator',
    authors: ['Wonhyeok Choi', 'Mingyu Shin', 'HYUKZAE LEE', 'Jaehoon Cho', 'Jaehyeon Park', 'Sunghoon Im'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: 2024,
    type: 'Conference',
    link: '#'
  },
  {
    id: 'p5',
    title: 'Memory-Guided Image De-Raining Using Time-Lapse Data',
    authors: ['Jaehoon Cho', 'Seungryong Kim', 'Kwanghoon Sohn'],
    venue: 'IEEE Transactions on Image Processing (TIP)',
    year: 2022,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'p6',
    title: 'Wide and Narrow: Video Prediction from Context and Motion',
    authors: ['Jaehoon Cho', 'Jiyoung Lee', 'Changjae Oh', 'Wonil Song', 'Kwanghoon Sohn'],
    venue: 'British Machine Vision Conference (BMVC)',
    year: 2021,
    type: 'Conference',
    link: '#'
  },
  {
    id: 'p7',
    title: 'Deep Monocular Depth Estimation Leveraging a Large-scale Outdoor Stereo Dataset',
    authors: ['Jaehoon Cho', 'Dongbo Min', 'Youngjung Kim', 'Kwanghoon Sohn'],
    venue: 'Expert Systems With Applications (ESWA)',
    year: 2021,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'p8',
    title: 'Pyramid Inter-Attention for High Dynamic Range Imaging',
    authors: ['Sungil Choi', 'Jaehoon Cho', 'Wonil Song', 'Jihwan Choe', 'Jisung Yoo', 'Kwanghoon Sohn'],
    venue: 'Sensors',
    year: 2021,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'p9',
    title: 'Single Image Deraining Using Time-lapse Data',
    authors: ['Jaehoon Cho', 'Seungryong Kim', 'Dongbo Min', 'Kwanghoon Sohn'],
    venue: 'IEEE Transactions on Image Processing (TIP)',
    year: 2020,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'p10',
    title: 'Multi-Task Self-Supervised Visual Representation Learning for Monocular Road Segmentation',
    authors: ['Jaehoon Cho', 'Youngjung Kim', 'Changjae Oh', 'Kwanghoon Sohn'],
    venue: 'IEEE International Conference on Multimedia and Expo (ICME)',
    year: 2018,
    type: 'Conference',
    link: '#'
  },
  {
    id: 'p11',
    title: 'DIML/CVL RGB-D Dataset: 2M RGB-D Images of Natural Indoor and Outdoor Scenes',
    authors: ['Jaehoon Cho', 'Dongbo Min', 'Youngjung Kim', 'Kwanghoon Sohn'],
    venue: 'arXiv',
    year: 2021,
    type: 'Preprint',
    link: '#'
  }
];


export const RESEARCH_DATA: Project[] = [

  {
    id: 'proj2',
    title: 'VLM-based VQA for Driving Scenarios',
    description: 'Developing a Vision-Language Model (VLM) for Visual Question Answering (VQA) to improve situational awareness and decision-making in complex autonomous driving scenarios.',    
    imageUrl: '/photo/VQA.jpg',
    status: 'Ongoing',
    link: '/photo/[HMG]VQA.pdf/'
  },
  {
    id: 'proj3',
    title: 'Multi-sensor System Fusion',
    description: 'Implementing a robust multi-sensor fusion framework utilizing Unified BEV (Bird’s Eye View) representations to integrate LiDAR, Radar, and camera data for precise perception.',
    imageUrl: '/photo/BEV.jpg',
    status: 'Ongoing',
    link: 'https://openreview.net/forum?id=yo9WIIecAu'
  },
  {
    id: 'proj4',
    title: 'Feature-based Knowledge Distillation',
    description: 'Developing an advanced knowledge distillation framework that transfers rich hierarchical features from CNN-based teacher models to lightweight Transformer-based student models.',
    imageUrl: '/photo/KD.jpg',
    status: 'Ongoing',
    link: '#'
  },
  {
  id: 'proj5',
  title: 'Quantization for Inference Acceleration',
  description: 'FP32-to-INT8 Quantization of ONNX Models for Latency Reduction on Edge/Inference Hardware.',
  imageUrl: '/photo/quantization.jpg',
  status: 'Ongoing',
  link: '/photo/[HMG]quantization.pdf/'
  },
  {
  id: 'proj6',
  title: 'Synthetic Data Augmentation for Real-World Model Performance',
  description: 'This study investigates whether synthetic data can serve as a viable alternative or complement to real-world data in model training.',
  imageUrl: '/photo/synthetic.jpg',
  status: 'Ongoing',
  link: '/photo/[HMG]synthetic_data.pdf/'
  },
  {
  id: 'proj1',
  title: '200M RGB+D Dataset Construction',
  description: 'Constructing a large-scale indoor and outdoor RGB+D dataset with 200 million samples to enhance depth estimation and 3D scene understanding in diverse environments.',
  imageUrl: '/photo/Dataset.jpg',
  status: 'Completed',
  link: 'https://dimlrgbd.github.io/'
  }
];

export const PROJECTS_DATA: Project[] = [
  // {
  //   id: 'proj1',
  //   title: 'Next-Gen Autonomous Navigation',
  //   description: 'Developing robust perception and planning algorithms for autonomous vehicles in complex urban environments.',
  //   imageUrl: 'https://picsum.photos/seed/nav/800/600',
  //   status: 'Ongoing'
  // },
  // {
  //   id: 'proj2',
  //   title: 'Privacy-Preserving Federated Learning',
  //   description: 'Investigating new methods for training machine learning models across decentralized devices while maintaining strict data privacy.',
  //   imageUrl: 'https://picsum.photos/seed/privacy/800/600',
  //   status: 'Ongoing'
  // },
  // {
  //   id: 'proj3',
  //   title: 'Human-AI Collaborative Systems',
  //   description: 'Designing interfaces and algorithms that enable seamless cooperation between humans and AI agents in creative tasks.',
  //   imageUrl: 'https://picsum.photos/seed/collab/800/600',
  //   status: 'Completed'
  // }
];




export const MEMBERS_DATA: Member[] = [
  {
    id: 'm1',
    name: 'Jaehoon Cho',
    role: 'Professor',
    category: 'Faculty',
    imageUrl: '/photo/profile_photo.jpg',
    description: 'jh.cho (at) kau (dot) ac (dot) kr',
    email: 'jh.cho@kau.ac.kr',
    website: 'https://jhcho90.github.io/'
  },
  {
    id: 'm2',
    name: 'This could be you!',
    role: 'Master Student',
    category: 'Students',
    imageUrl: '/photo/you.png',
  }
  /*
  {
    id: 'm3',
    name: 'This could be you!',
    role: 'Ph.D Student',
    category: 'Students',
    imageUrl: '/photo/you.png',
  }
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
