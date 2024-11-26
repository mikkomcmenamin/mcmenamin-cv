export interface IPortfolioItem {
  title: string,
  description: string,
  image: string,
  tags: string[],
}

export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'Neon City',
    description: 'A futuristic cityscape design concept',
    image: 'https://source.unsplash.com/random/600x400?cityscape',
    tags: ['3D Modeling', 'Concept Art', 'Lighting Design']
  },
  {
    title: 'Quantum UI',
    description: 'User interface design for quantum computing applications',
    image: 'https://source.unsplash.com/random/600x400?technology',
    tags: ['UI/UX', 'Wireframing', 'Prototyping']
  },
  {
    title: 'Cybernetic Enhancements',
    description: 'Conceptual designs for next-gen cybernetic implants',
    image: 'https://source.unsplash.com/random/600x400?cyberpunk',
    tags: ['Product Design', 'Biotech', 'Illustration']
  },
  {
    title: 'Holographic Workspace',
    description: 'Immersive holographic environment for remote collaboration',
    image: 'https://source.unsplash.com/random/600x400?hologram',
    tags: ['AR/VR', 'Interaction Design', 'UX Research']
  }
]

