export interface IPortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const portfolioDescription =
  "Pretty Okay Apps is my sidehustle and I'm currently working on building a portfolio of useful " +
  'apps and tools for consumers and developers.';

export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'Pretty Okay Stack [WIP]',
    description:
      'Production-ready SaaS template with Next.js, Fastify, Postgres, deployed to Railway.',
    image: '/prettyokaystack.jpg',
    tags: ['Next.js', 'Fastify', 'Postgres', 'Prisma', 'Clerk'],
  },
  {
    title: 'Buddybook',
    description:
      "BuddyBook helps you maintain meaningful friendships and keeps your buddies' information handy.",
    image: '/buddybook.jpg',
    tags: ['Flutter', 'Next.js', 'Supabase'],
  },
];
