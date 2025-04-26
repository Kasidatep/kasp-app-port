// components/TypingHeader.tsx
"use client";

import { useEffect, useRef, useState } from 'react';

interface TypingHeaderProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingHeader({ text, speed = 50, className = '' }: TypingHeaderProps) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const currentIndex = useRef(0);
  
  useEffect(() => {
    // Reset if text changes
    currentIndex.current = 0;
    setDisplayText('');
    
    // Type out the text one character at a time
    const typingInterval = setInterval(() => {
      if (currentIndex.current < text.length) {
        setDisplayText(prev => prev + text.charAt(currentIndex.current));
        currentIndex.current++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    // Cleanup
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);
  
  return (
    <div className={`typing-container ${className}`}>
      <span className="typing-text">{displayText}</span>
      <span className={`cursor ${cursorVisible ? 'visible' : 'invisible'}`}>|</span>
    </div>
  );
}