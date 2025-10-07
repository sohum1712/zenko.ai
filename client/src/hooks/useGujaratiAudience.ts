import { useMemo } from 'react';

export function useGujaratiAudience() {
  // Basic heuristics for Gujarati audience
  const isGujarati = useMemo(() => {
    const lang = (navigator?.language || '').toLowerCase();
    const langs = navigator?.languages?.map(l => l.toLowerCase()) || [];
    const inIndiaTZ = Intl.DateTimeFormat().resolvedOptions().timeZone?.includes('Kolkata');
    return lang.startsWith('gu') || langs.some(l => l.startsWith('gu')) || inIndiaTZ;
  }, []);

  const primaryCTA = isGujarati ? 'ચાળો, સાથે મળીને વેબસાઇટ બનાવીએ' : 'GET STARTED WITH US';
  const secondaryCTA = isGujarati ? 'ફ્રી સલાહ મેળવો' : 'Free Consultation';

  const hooks = {
    headline: isGujarati ? 'જેનકો સાથે તમારું બિઝનેસ ઓનલાઈન વધાવો' : 'Grow Online with Zenko',
    subline: isGujarati ? 'ગુજરાતી બ્રાન્ડ્સ માટે ખાસ ડિઝાઇન અને માર્કેટિંગ' : 'Design and marketing tailored for Gujarati brands',
  };

  return { isGujarati, primaryCTA, secondaryCTA, hooks };
}
