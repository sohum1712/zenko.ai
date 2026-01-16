import { useMemo } from 'react';

export function useGujaratiAudience() {
  const primaryCTA = 'GET STARTED WITH US';
  const secondaryCTA = 'Free Consultation';

  const hooks = {
    headline: 'Grow Online with Zenko',
    subline: 'Design and marketing tailored for your brand',
  };

  return { isGujarati: false, primaryCTA, secondaryCTA, hooks };
}
