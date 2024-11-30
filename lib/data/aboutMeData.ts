interface WorkItem {
  position: string;
  company: string;
  url?: string;
}

interface AboutMeData {
  title: string;
  description: string;
  currentWork: WorkItem[];
}

export const aboutMeData: AboutMeData = {
  title: 'Hey, I\'m Mikko!',
  description:
    "Welcome to my homepage! I'm an experienced software developer with over 8 years of expertise building enterprise applications. " +
    "I have an eye for good design and user experience, and I've built apps for web, desktop, mobile, and XR platforms. " +
    "I specialize in frontend development utilizing frameworks such as Next.js/React, Flutter, Vue, SwiftUI and Unity, but I'm also adept at full-stack tasks. " +
    'My experience spans situational awareness software, augmented reality apps, generative AI, games, mobile and web apps, and digital twins. ' +
    'I help teams ship software to production with determination, focusing on awesome UX/UI. I want to make a positive impact to the world and be useful.',
  currentWork: [
    {
      company: 'Pareto Software',
      position: 'Senior Software Developer',
      url: 'https://www.paretosoftware.fi',
    },
    {
      company: 'Pretty Okay Apps',
      position: 'Founder',
    },
  ],
};
