import type { CloudElement, FloatingTag } from '@/types';

export const cloudElements: CloudElement[] = [
  // Left side clouds
  {
    id: 'left-1',
    position: { top: '4rem', left: '1rem' },
    size: { width: '400px', height: '250px' },
    style: { background: 'white', blur: 'blur-lg', opacity: 0.95 },
    animation: { type: 'pulse-slow', delay: '0s' }
  },
  {
    id: 'left-2',
    position: { top: '8rem', left: '4rem' },
    size: { width: '350px', height: '200px' },
    style: { background: '#4d8af0/50', blur: 'blur-md', opacity: 0.90 },
    animation: { type: 'float', delay: '0.5s' }
  },
  {
    id: 'left-3',
    position: { top: '12rem', left: '2rem' },
    size: { width: '300px', height: '180px' },
    style: { background: 'white', blur: 'blur-md', opacity: 0.85 },
    animation: { type: 'pulse-slow', delay: '1s' }
  },
  {
    id: 'left-4',
    position: { top: '16rem', left: '6rem' },
    size: { width: '280px', height: '160px' },
    style: { background: '#4d8af0/40', blur: 'blur-sm', opacity: 0.80 },
    animation: { type: 'float', delay: '1.5s' }
  },
  {
    id: 'left-5',
    position: { top: '20rem', left: '0.5rem' },
    size: { width: '320px', height: '190px' },
    style: { background: 'white', blur: 'blur-lg', opacity: 0.75 },
    animation: { type: 'pulse-slow', delay: '2s' }
  },
  {
    id: 'left-6',
    position: { top: '24rem', left: '5rem' },
    size: { width: '260px', height: '140px' },
    style: { background: '#4d8af0/35', blur: 'blur-sm', opacity: 0.70 },
    animation: { type: 'float', delay: '2.5s' }
  },
  {
    id: 'left-7',
    position: { bottom: '15rem', left: '1.5rem' },
    size: { width: '280px', height: '170px' },
    style: { background: 'white', blur: 'blur-md', opacity: 0.65 },
    animation: { type: 'pulse-slow', delay: '3.2s' }
  },
  {
    id: 'left-8',
    position: { bottom: '10rem', left: '4.5rem' },
    size: { width: '240px', height: '150px' },
    style: { background: '#4d8af0/30', blur: 'blur-sm', opacity: 0.60 },
    animation: { type: 'float', delay: '3.7s' }
  },

  // Right side clouds
  {
    id: 'right-1',
    position: { top: '4rem', right: '1rem' },
    size: { width: '400px', height: '250px' },
    style: { background: '#4d8af0/55', blur: 'blur-lg', opacity: 0.95 },
    animation: { type: 'pulse-slow', delay: '0.3s' }
  },
  {
    id: 'right-2',
    position: { top: '8rem', right: '4rem' },
    size: { width: '350px', height: '200px' },
    style: { background: 'white', blur: 'blur-md', opacity: 0.90 },
    animation: { type: 'float', delay: '0.8s' }
  },
  {
    id: 'right-3',
    position: { top: '12rem', right: '2rem' },
    size: { width: '300px', height: '180px' },
    style: { background: '#4d8af0/45', blur: 'blur-md', opacity: 0.85 },
    animation: { type: 'pulse-slow', delay: '1.3s' }
  },
  {
    id: 'right-4',
    position: { top: '16rem', right: '6rem' },
    size: { width: '280px', height: '160px' },
    style: { background: 'white', blur: 'blur-sm', opacity: 0.80 },
    animation: { type: 'float', delay: '1.8s' }
  },
  {
    id: 'right-5',
    position: { top: '20rem', right: '0.5rem' },
    size: { width: '320px', height: '190px' },
    style: { background: '#4d8af0/40', blur: 'blur-lg', opacity: 0.75 },
    animation: { type: 'pulse-slow', delay: '2.3s' }
  },
  {
    id: 'right-6',
    position: { top: '24rem', right: '5rem' },
    size: { width: '260px', height: '140px' },
    style: { background: 'white', blur: 'blur-sm', opacity: 0.70 },
    animation: { type: 'float', delay: '2.8s' }
  },
  {
    id: 'right-7',
    position: { bottom: '15rem', right: '1.5rem' },
    size: { width: '280px', height: '170px' },
    style: { background: '#4d8af0/35', blur: 'blur-md', opacity: 0.65 },
    animation: { type: 'pulse-slow', delay: '3.4s' }
  },
  {
    id: 'right-8',
    position: { bottom: '10rem', right: '4.5rem' },
    size: { width: '240px', height: '150px' },
    style: { background: 'white', blur: 'blur-sm', opacity: 0.60 },
    animation: { type: 'float', delay: '3.9s' }
  },

  // Center clouds
  {
    id: 'center-1',
    position: { top: '2rem', left: '50%' },
    size: { width: '380px', height: '220px' },
    style: { background: '#4d8af0/35', blur: 'blur-lg', opacity: 0.65 },
    animation: { type: 'pulse-slow', delay: '0.7s' }
  },
  {
    id: 'center-2',
    position: { top: '6rem', left: '50%' },
    size: { width: '300px', height: '180px' },
    style: { background: 'white', blur: 'blur-md', opacity: 0.60 },
    animation: { type: 'float', delay: '1.2s' }
  },

  // Bottom clouds
  {
    id: 'bottom-left',
    position: { bottom: '8rem', left: '3rem' },
    size: { width: '350px', height: '200px' },
    style: { background: 'white', blur: 'blur-lg', opacity: 0.55 },
    animation: { type: 'pulse-slow', delay: '3s' }
  },
  {
    id: 'bottom-right',
    position: { bottom: '8rem', right: '3rem' },
    size: { width: '350px', height: '200px' },
    style: { background: '#4d8af0/30', blur: 'blur-lg', opacity: 0.55 },
    animation: { type: 'float', delay: '3.5s' }
  }
];

export const floatingTags: FloatingTag[] = [
  // Left side tags
  {
    id: 'left-tag-1',
    text: 'tags.ai_powered',
    position: { top: '10rem', left: '3rem' },
    animation: { delay: '0.3s' }
  },
  {
    id: 'left-tag-2',
    text: 'tags.innovation',
    position: { top: '14rem', left: '1.5rem' },
    animation: { delay: '0.5s' }
  },
  {
    id: 'left-tag-3',
    text: 'tags.smart_solutions',
    position: { top: '18rem', left: '5rem' },
    animation: { delay: '1s' }
  },
  {
    id: 'left-tag-4',
    text: 'tags.web_design',
    position: { top: '20rem', left: '2rem' },
    animation: { delay: '1.5s' }
  },
  {
    id: 'left-tag-5',
    text: 'tags.growth',
    position: { bottom: '20rem', left: '4rem' },
    animation: { delay: '2s' }
  },

  // Right side tags
  {
    id: 'right-tag-1',
    text: 'tags.automation',
    position: { top: '10rem', right: '3rem' },
    animation: { delay: '0.3s' }
  },
  {
    id: 'right-tag-2',
    text: 'tags.digital_transform',
    position: { top: '14rem', right: '1.5rem' },
    animation: { delay: '0.8s' }
  },
  {
    id: 'right-tag-3',
    text: 'tags.future_ready',
    position: { top: '18rem', right: '4rem' },
    animation: { delay: '1.2s' }
  },
  {
    id: 'right-tag-4',
    text: 'tags.seo',
    position: { top: '20rem', right: '2.5rem' },
    animation: { delay: '1.7s' }
  },
  {
    id: 'right-tag-5',
    text: 'tags.results',
    position: { bottom: '20rem', right: '5rem' },
    animation: { delay: '2.2s' }
  }
];