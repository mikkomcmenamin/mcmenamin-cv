export interface IEducationItem {
  degree: string;
  school: string;
  year: string;
}

export const educationItems: IEducationItem[] = [
  {
    degree: 'Bachelor of Business Information Systems - Game Production',
    school: 'Tampere University of Applied Sciences',
    year: '2015-2018',
  },
  {
    degree: 'Civil Engineering',
    school: 'Tampere University',
    year: '2008-2010',
  },
];

export interface ICertification {
  name: string;
  link?: string;
}

export const certifications: ICertification[] = [
  {
    name: 'Artificial Intelligence (Aalto University)',
    link: 'https://openbadgefactory.com/v1/assertion/b6e4524287664ccc94c0c2489cc79a35a80dca8f.html',
  },
  {
    name: 'Speech Processing (Aalto University)',
    link: 'https://openbadgefactory.com/obv3/credentials/2c6a2a24d794a3a81cb202885b97be31b09f2b1d.html',
  },
  { name: 'Supervised Machine Learning (Aalto University)' },
  {
    name: 'Unity Certified Programmer',
    link: 'https://www.credly.com/badges/632cbabd-006d-49eb-b56e-d0abc6b10de6/linked_in_profile',
  },
  {
    name: 'Elements of AI',
    link: 'https://certificates.mooc.fi/validate/gomqiuowxa',
  },
  { name: 'Mastering React' },
  { name: 'Production Manager' },
  {
    name: 'Sustainable Space',
    link: 'https://courses.mooc.fi/certificates/validate/v6z8xs3kub38tn3',
  },
];
