/**
 * Site content (edit this file to update the portfolio).
 * Sourced from Qasim Bin Saeed's CV.
 */

export const profile = {
  name: 'Qasim Bin Saeed',
  title: 'MSc Student / Teaching & Research Assistant',
  affiliation: 'University of Manitoba',
  shortBio:
    "I'm an MSc student and Graduate Research Assistant at the University of Manitoba, advised by Dr. YoungJin Cha. Previously, I was a Medical Imaging Research Assistant at Moffitt Cancer Center, where I worked on deep learning-based medical image analysis and segmentation.",
  researchFocus:
    'My research focuses on robotics, computer vision, and 3D scene understanding. Currently, I am working on autonomous robotic systems, neural scene representations, and learning-based 3D reconstruction, with applications in UAV-based infrastructure inspection, GPS-denied localization, and robot perception and navigation. My broader interests include embodied AI, Human-Robot/AI collaboration, and robot learning.',
  seekingNote:
    'I am actively seeking PhD opportunities in robotics, computer vision, and embodied AI.',
  seekingCta:
    'Please feel free to reach out if you are interested in my research or potential collaborations!',
  email: 'qasimsaeed590@gmail.com',
  github: 'https://github.com/QasimBinSaeed1',
  scholar: 'https://scholar.google.com/citations?user=LOmDV9kAAAAJ&hl=en&oi=ao',
  linkedin: 'https://www.linkedin.com/in/qasim-saeed',
  cvUrl: '/CV_Qasim_Bin_Saeed.pdf',
  photoUrl: '/images/profile.jpg',
  erdosNumber: null,
  dijkstraNumber: null
}

export const news = [
  {
    id: 10,
    date: 'Oct 08, 2026',
    content: 'Presenting two papers at IMAC-XLV 2027 (International Modal Analysis Conference).',
    link: null,
    isOld: false
  },
  {
    id: 1,
    date: 'Jul 08, 2026',
    content:
      '3DpredicNet published in IEEE Transactions on Industrial Informatics.',
    link: 'https://doi.org/10.1109/TII.2026.3706348',
    isOld: false
  },
  {
    id: 2,
    date: 'Jun 01, 2026',
    content: 'Presenting at EMI Conference 2026, University of Colorado Boulder.',
    link: null,
    isOld: false
  },
  {
    id: 3,
    date: 'May 15, 2026',
    content: 'Selected as a Mitacs Globalink Research Internship Mentor (10 interns).',
    link: null,
    isOld: false
  },
  {
    id: 4,
    date: 'Oct 08, 2025',
    content: 'Paper published in Scientific Reports (Nature Portfolio).',
    link: 'https://doi.org/10.1038/s41598-025-19141-0',
    isOld: false
  },
  {
    id: 5,
    date: 'Sep 17, 2025',
    content:
      'Joined Mitacs Lab2Market (CAD $15,000) to develop TerraTwin.',
    link: null,
    isOld: false
  },
  {
    id: 6,
    date: 'Sep 09, 2025',
    content: 'Attended IWSHM 2025 at Stanford University.',
    link: null,
    isOld: false
  },
  {
    id: 7,
    date: 'May 27, 2025',
    content: 'Presented at EMI Conference 2025, UC Irvine (Anaheim).',
    link: null,
    isOld: false
  },
  {
    id: 8,
    date: 'Mar 21, 2025',
    content: 'Won the 2025 CEGSA Graduate Research Competition (CivilGradExpo).',
    link: null,
    isOld: false
  },
  {
    id: 9,
    date: 'May 01, 2024',
    content:
      'Started M.Sc. in Civil Engineering at the University of Manitoba, advised by Prof. YoungJin Cha.',
    link: null,
    isOld: false
  }
]

export const education = [
  {
    id: 1,
    period: '2024.05 - 2026.08',
    description: 'M.Sc. in Civil Engineering, University of Manitoba, advised by',
    linkText: 'Dr. YoungJin Cha',
    linkUrl: 'https://youngjincha.com'
  },
  {
    id: 2,
    period: '2019.09 - 2023.06',
    description: 'B.Sc. in Electrical Engineering, NUST',
    linkText: null,
    linkUrl: null
  }
]

export const experience = [
  {
    id: 1,
    period: '2024.05 - Present',
    description: 'Teaching and Research Assistant,',
    linkText: 'University of Manitoba',
    linkUrl: 'https://umanitoba.ca/'
  },
  {
    id: 2,
    period: '2026.06 - Present',
    description: 'Research Internship Mentor,',
    linkText: 'Mitacs Globalink',
    linkUrl: 'https://www.mitacs.ca/en/programs/globalink'
  },
  {
    id: 3,
    period: '2023.06 - 2024.01',
    description: 'Medical Imaging Research Assistant,',
    linkText: 'Moffitt Cancer Center',
    linkUrl: 'https://www.moffitt.org/'
  },
  {
    id: 4,
    period: 'Reviewer',
    description:
      'ASCE Journal of Computing in Civil Engineering, IEEE SMC 2026',
    linkText: null,
    linkUrl: null
  }
]

export const publications = [
  {
    id: 1,
    slug: '3dpredictnet-pothole',
    title:
      'Monocular Computer Vision-Based Simultaneous Pothole Segmentation and 3-D Volume Prediction Using 3DpredicNet',
    authors:
      'Rahmat Ali, Qasim Bin Saeed, Oral Buyukozturk, S. Lee, YoungJin Cha',
    journal: 'IEEE Transactions on Industrial Informatics (IF: 10.4), 2026',
    thumbnailUrl: '/images/publications/3dpredictnet-pipeline.jpg',
    projectPage: null,
    paper: 'https://doi.org/10.1109/TII.2026.3706348',
    video: null,
    code: null,
    dataset: 'https://github.com/Youngjincha/Pothole440',
    order: 1
  },
  {
    id: 2,
    slug: 'mental-health-bilstm',
    title:
      'Multi-modal deep-attention-BiLSTM based early detection of mental health issues using social media posts',
    authors: 'Qasim Bin Saeed, YoungJin Cha',
    journal: 'Scientific Reports (IF: 4.3), 15, 35152, 2025',
    thumbnailUrl: '/images/publications/dablnet-workflow.jpg',
    projectPage: null,
    paper: 'https://doi.org/10.1038/s41598-025-19141-0',
    video: null,
    code: null,
    dataset: null,
    order: 2
  }
]

export const projects = [
  {
    id: 1,
    title: 'UAV / NeRF / 3DGS Structural Health Monitoring',
    description:
      'Advanced 3D reconstruction and damage mapping for civil infrastructure using SfM, NeRF, and 3D Gaussian Splatting.',
    thumbnailUrl: '/images/publications/soon.png',
    link: null,
    order: 1
  },
  {
    id: 2,
    title: '3DPredictNet',
    description:
      'Monocular computer vision for simultaneous pothole segmentation and 3D volume prediction.',
    thumbnailUrl: '/images/publications/soon.png',
    link: 'https://doi.org/10.1109/TII.2026.3706348',
    order: 2
  },
  {
    id: 3,
    title: 'PIRA - Diffusion Policies from Rescue Interventions',
    description:
      'Learning robust diffusion policies for robotics from rescue interventions (IEEE RA-L, in preparation).',
    thumbnailUrl: '/images/publications/soon.png',
    link: null,
    order: 3
  }
]

export const posts = []

export const affiliations = [
  {
    id: 1,
    name: 'University of Manitoba',
    logoUrl: '/images/logos/umanitoba.png',
    link: 'https://umanitoba.ca/',
    width: '160px',
    order: 1
  },
  {
    id: 2,
    name: 'Price Faculty of Engineering',
    logoUrl: '/images/logos/price-faculty.png',
    link: 'https://umanitoba.ca/engineering/',
    width: '65px',
    order: 2
  },
  {
    id: 3,
    name: 'NUST',
    logoUrl: '/images/logos/nust.png',
    link: 'https://nust.edu.pk/',
    width: '150px',
    order: 3
  },
  {
    id: 4,
    name: 'Moffitt Cancer Center',
    logoUrl: '/images/logos/moffitt.png',
    link: 'https://www.moffitt.org/',
    width: '150px',
    order: 4
  },
  {
    id: 5,
    name: 'Mitacs',
    logoUrl: '/images/logos/mitacs.png',
    link: 'https://www.mitacs.ca/',
    width: '110px',
    order: 5
  },
  {
    id: 6,
    name: 'i2I Research & Innovation Institute',
    logoUrl: '/images/logos/i2i.png',
    link: 'https://umanitoba.ca/',
    width: '160px',
    order: 6
  }
]

