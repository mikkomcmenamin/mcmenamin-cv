import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface CustomButtonProps extends ButtonProps {
  glowColor?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, glowColor = 'cyan', children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden border border-transparent bg-opacity-30 text-sm font-medium transition-all',
          `bg-${glowColor}-900/30 text-${glowColor}-300 hover:bg-${glowColor}-900/50 hover:border-${glowColor}-700/50`,
          'before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:bg-gradient-to-t',
          `before:from-${glowColor}-400/20 before:to-transparent before:transition-transform before:duration-300`,
          'hover:before:translate-y-0',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
