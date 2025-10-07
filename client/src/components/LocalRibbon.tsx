import React from 'react';

const LocalRibbon: React.FC = () => {
  return (
    <div className="bg-[#4D4D4D] text-[#DEDEDE] text-xs md:text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-4">
        <span>Gujarati-first design • Local Support • Fast Delivery</span>
        <span className="hidden md:inline">|</span>
        <span>ગુજરાતી કન્ટેન્ટ, બ્રાન્ડિંગ અને માર્કેટિંગ</span>
      </div>
    </div>
  );
};

export default LocalRibbon;
