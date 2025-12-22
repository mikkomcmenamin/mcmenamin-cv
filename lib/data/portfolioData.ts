export interface IPortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const portfolioDescription =
  "Pretty Okay Apps is my sidehustle and I'm currently working on building SmartReps, an AI-powered workout app.";

export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'SmartReps',
    description:
      'AI-powered workout app that helps you track and optimize your training.',
    image: '/smartreps.webp',
    tags: ['React Native', 'Convex', 'TypeScript', 'Expo', 'Design'],
  },
  {
    title: 'Buddybook',
    description:
      "BuddyBook helps you maintain meaningful friendships and keeps your buddies' information handy.",
    image: '/buddybook.jpg',
    tags: ['Flutter', 'Next.js', 'Supabase'],
  },
];
