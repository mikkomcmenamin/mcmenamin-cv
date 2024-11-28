import { useState, useEffect } from 'react';

export function useTypingAnimation(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(() => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
}
