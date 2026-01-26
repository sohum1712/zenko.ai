import React from 'react';
import type { CloudElement as CloudElementType } from '@/types';

interface CloudElementProps {
  cloud: CloudElementType;
}

const CloudElement: React.FC<CloudElementProps> = ({ cloud }) => {
  // Use inline styles for positioning instead of dynamic classes
  const positionStyle: React.CSSProperties = {
    ...cloud.position,
    width: cloud.size.width,
    height: cloud.size.height,
    background: cloud.style.background.includes('/') 
      ? `rgba(77, 138, 240, ${parseFloat(cloud.style.background.split('/')[1]) / 100})` 
      : cloud.style.background,
    filter: `blur(${cloud.style.blur.replace('blur-', '').replace('sm', '4px').replace('md', '8px').replace('lg', '16px')})`,
    opacity: cloud.style.opacity,
    animationDelay: cloud.animation.delay
  };

  const transformClasses = cloud.position.left === '50%' 
    ? '-translate-x-1/2' 
    : cloud.id === 'center-2' 
    ? '-translate-x-1/2 translate-x-16' 
    : '';

  const animationClass = cloud.animation.type === 'pulse-slow' ? 'animate-pulse-slow' : 'animate-float';

  return (
    <div
      className={`absolute ${transformClasses} rounded-full ${animationClass} shadow-2xl`}
      style={positionStyle}
    />
  );
};

export default React.memo(CloudElement);