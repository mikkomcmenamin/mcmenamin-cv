import dynamic from 'next/dynamic';
import { FadeIn } from './animations/FadeIn';

const BlackHole = dynamic(() => import('./BlackHole'), {
  ssr: false,
  loading: () => null,
});

export default function BlackHoleSection() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <div className="relative h-full w-full">
        <FadeIn duration={0.5} className="h-full">
          <div className="relative h-full w-full -translate-y-24 sm:translate-y-0">
            <BlackHole />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
