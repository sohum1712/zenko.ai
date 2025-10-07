import React from 'react';

const ZenkoMascot: React.FC = () => {
  return (
    <div className="mascot-3d mx-auto my-6" aria-hidden>
      <div className="mascot-cube">
        <div className="mascot-face front">ZENKO</div>
        <div className="mascot-face back">DIGITAL</div>
        <div className="mascot-face right">AGENCY</div>
        <div className="mascot-face left">CREATIVE</div>
        <div className="mascot-face top">BUILD</div>
        <div className="mascot-face bottom">GROW</div>
      </div>
    </div>
  );
};

export default ZenkoMascot;
