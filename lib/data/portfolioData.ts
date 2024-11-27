export interface IPortfolioItem {
  title: string,
  description: string,
  image: string,
  tags: string[],
}

export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'Pretty Okay Stack [WIP]',
    description: 'Production-ready SaaS template with Next.js, Fastify, Postgres, deployed to Railway.',
    image: '/prettyokaystack.jpg',
    tags: ['Founder', 'Development', 'Design']
  },
  {
    title: 'Buddybook',
    description: 'BuddyBook helps you maintain meaningful friendships and keeps your buddies\' information handy.',
    image: '/buddybook.jpg',
    tags: ['AR/VR', 'Interaction Design', 'UX Research']
  }
]

