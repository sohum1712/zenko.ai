import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import type { FloatingTag as FloatingTagType } from '@/types';

interface FloatingTagProps {
  tag: FloatingTagType;
}

const FloatingTag: React.FC<FloatingTagProps> = ({ tag }) => {
  const { t } = useTranslation();

  // Use inline styles for positioning instead of dynamic classes
  const positionStyle: React.CSSProperties = {
    ...tag.position,
    animationDelay: tag.animation.delay
  };

  return (
    <div 
      className="absolute animate-float"
      style={positionStyle}
    >
      <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
        {t(tag.text)}
      </span>
    </div>
  );
};

export default React.memo(FloatingTag);