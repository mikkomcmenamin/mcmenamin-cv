import { Code2 } from 'lucide-react';

interface TechTagProps {
  name: string;
  className?: string;
}

export function TechTag({ name, className = '' }: TechTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-cyan-900 px-2.5 py-0.5 text-xs font-medium text-cyan-300 transition-all hover:bg-[#330011] hover:text-[#ff0044] hover:shadow-[0_0_15px_rgba(255,0,68,0.3)] ${className}`}
    >
      <Code2 className="mr-1 h-3 w-3" />
      {name}
    </span>
  );
}
