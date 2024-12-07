export interface ITimelineItem {
  position: string;
  company: string;
  period: string;
  description?: string;
  isActive?: boolean;
  technologies?: string[];
  projects?: Project[];
  breakpoint?: number;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const timelineItems: ITimelineItem[] = [
  {
    position: 'Senior Software Developer & Partner',
    company: 'Pareto Software Oy',
    period: '9/2023 - Present',
    description:
      'Leading frontend development in various client projects. Focusing on TypeScript, React, and modern web technologies.',
    projects: [
      {
        name: 'Undisclosed Client',
        period: '11/2024 – ',
        description:
          'Converting a large codebase from Javascript to Typescript.',
        technologies: ['TypeScript', 'JavaScript', 'React', 'Node.js'],
      },
      {
        name: 'Pareto Website',
        period: '9/2024 – 10/2024 ',
        description:
          'Designed and co-developed the new www.paretosoftware.fi website with headless CMS',
        technologies: [
          'Figma',
          'Next.js',
          'React',
          'TypeScript',
          'PayloadCMS',
          'MongoDB',
        ],
      },
      {
        name: 'Autokilpailutus.fi',
        period: '8/2024 – 11/2024',
        description:
          'Implemented new 2.0 design for trade-in car sales platform. Converted an untyped codebase to strict TypeScript and improved architecture. ' +
          'New platform went to production in 12/2024',
        technologies: [
          'Vue',
          'TypeScript',
          'Docker',
          'Tanstack Query',
          'Django',
          'Wagtail CMS',
        ],
      },
      {
        name: 'Next.js Web App',
        period: '7/2024 – 8/2024',
        description:
          'Designed and developed a Next.js web app. Integrated a newsletter platform and Stripe for payments. Implemented an AI-Chat feature utilizing OpenAI API.',
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'shadcn/ui',
          'TailwindCSS',
          'Stripe',
          'OpenAI',
          'Supabase',
        ],
      },
      {
        name: 'Groke Technologies: Fleet Management App',
        period: '10/2023 - Present',
        description:
          'Leading the design and frontend development of Groke Fleet remote fleet monitoring app. Fleet won the Red Dot Design Awards Design Concept - ' +
          'Best of the Best award in June 2024.',
        technologies: [
          'Flutter',
          'Dart',
          'Figma',
          'Python',
          'Django',
          'WebRTC',
          'Docker',
          'Google Cloud',
        ],
      },
    ],
    isActive: true,
    breakpoint: 4,
  },
  {
    position: 'Lead UI Software Developer',
    company: 'Groke Technologies',
    period: '1/2021 – 9/2023',
    description:
      'Design and development of Groke Pro and Groke Fleet user interface applications from concept to launch, focusing on intuitive user experience and functional design. ' +
      'Responsible for technology selections, user interface architecture, feature prioritization, and leading the design effort.',
    technologies: [
      'Unity',
      'C#',
      'Flutter',
      'Dart',
      'ROS2',
      'WebRTC',
      'Docker',
      'Figma',
      'iPadOS/MacOS',
      'Codemagic',
      'Sentry',
      'Ubuntu',
      'C++',
      'Python',
      'Webflow',
    ],
  },
  {
    position: 'XR Tech Lead',
    company: 'Insta Digital',
    period: '11/2018 – 1/2021',
    description:
      'Lead developer on several virtual reality and augmented reality projects. Responsible for recruitment, staffing, internal development, and ' +
      'collaboration with sales and HR. Member of company steering group.',
    projects: [
      {
        name: 'Undisclosed Client: Maritime Situational Awareness App',
        period: '1/2020 - 1/2021',
        description:
          'Lead Frontend Developer. Designed the frontend architecture for a new maritime situational awareness app and implemented the first working prototype.',
        technologies: ['Unity', 'C#', 'GStreamer', 'RTSP', 'ROS2'],
      },
      {
        name: 'Undisclosed Client: Pointclouds Visualization',
        period: '10/2019 – 1/2020',
        description:
          'Developed a real-time streaming point cloud visualization solution for an industrial company.',
        technologies: ['Unity', 'C#', 'Pointclouds', 'Virtual Reality'],
      },
      {
        name: 'Undisclosed Client',
        period: '8/2019–10/2019',
        description:
          'Improved code architecture and worked on several new features for a maritime situational awareness app.',
        technologies: ['Unity', 'C#'],
      },
      {
        name: 'Undisclosed Client: Crowd Annotation Tool',
        period: '4/2019 - 6/2019',
        description:
          'Developed a digital twin of a city area to generate and annotate virtual camera photos of crowds for machine learning.',
        technologies: ['Unity', 'C#', 'ML'],
      },
      {
        name: 'Undisclosed Client: Drone Video Streaming',
        period: '1/2019 – 5/2019',
        description:
          'Developed an app to stream real-time video from drones to the cloud.',
        technologies: ['WebRTC', 'AWS', 'Kurento', 'JavaScript'],
      },
      {
        name: 'Undisclosed Client: CAD Model Viewer',
        period: '11/2018 – 12/2018',
        description:
          'Developed an app that was used to view CAD models in virtual reality.',
        technologies: ['Unity', 'C#', 'Pixyz', 'CAD', 'Virtual Reality'],
      },
    ],
  },
  {
    position: 'Software Developer',
    company: 'Intopalo',
    period: '5/2017 – 11/2018',
    breakpoint: 2,
    description:
      'Frontend development focusing on XR technologies. Worked on various virtual and augmented reality projects for industrial clients.',
    projects: [
      {
        name: 'Rolls Royce: Intelligent Awareness',
        period: '4/2018 - 11/2018',
        description:
          'Lead Frontend Developer for Rolls Royce Intelligent Awareness project. Developed an advanced situational awareness product with real-time virtual 3D ' +
          'and augmented reality views.',
        technologies: [
          'Unity',
          'C#',
          'DDS',
          'gRPC',
          'Ubuntu',
          'Video Streaming',
          'JavaScript',
          'React',
        ],
      },
      {
        name: 'Planmeca: Collaborative VR platform',
        period: '1/2018 – 3/2018',
        description:
          "Collaborative multi-user environment for design validation in virtual reality. Wrote bachelor's thesis on the subject and project:",
        technologies: ['Unity', 'C#', 'Photon Bolt', 'Virtual Reality'],
        link: 'https://www.theseus.fi/handle/10024/148757',
      },
      {
        name: 'VR and AR Showcase Projects',
        period: '5/2017 – 12/2017',
        description:
          "Developed several VR and AR showcase demo projects using Unity and Unreal Engine to present Intopalo's XR capabilities. Represented Intopalo at tech fairs and supported sales and marketing in acquiring new customer projects revolving around emerging VR and AR technologies.",
        technologies: [
          'Unreal Engine',
          'Unity',
          'C#',
          'C++',
          'Virtual Reality',
          'Augmented Reality',
          'ARCore',
          'Vuforia',
          'ARKit',
          'iOS',
          'Hololens',
          'JavaScript',
        ],
      },
    ],
  },
  {
    position: 'Project Manager',
    company: 'Uula Color Oy',
    period: '10/2010 – 8/2015',
    description:
      'Expanded international business. Designed ERP migration process. Automated different sales and shipping mechanics. ' +
      'Managed company ICT systems. Enhanced marketing efforts by increasing social media following. Designed a new website and initiated web store project.',
    technologies: [
      'Lemonsoft',
      'SAP',
      'HTML',
      'CSS',
      'Excel',
      'Digital Marketing',
    ],
  },
];
