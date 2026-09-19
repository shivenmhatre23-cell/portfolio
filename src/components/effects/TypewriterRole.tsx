import React, { useState, useEffect } from 'react';

interface TypewriterRoleProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypewriterRole: React.FC<TypewriterRoleProps> = ({
  phrases = [
    'CSE Student @ IIIT Bhubaneswar',
    'Full-Stack & Systems Builder',
    'Building Practical Software',
    'Exploring Machine Learning & AI',
    'Mastering Data Structures in C++',
  ],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1800,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === fullText) {
      // Pause before starting to delete
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      // Natural breath before typing next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 200);
    } else {
      // Typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center font-mono">
      <span className="text-emerald-400 font-semibold">{currentText}</span>
      <span className="inline-block w-2 h-5 ml-1 bg-emerald-400 cursor-blink"></span>
    </span>
  );
};
