'use client';

import HeroLogo from '../../molecules/HeroLogo2/HeroLogo2';
import HeroLogo3 from '../../molecules/HeroLogo3/HeroLogo3';
import HeroHeading from '../../molecules/HeroHeading/HeroHeading';
import HeroSubtitle from '../../molecules/HeroSubtitle/HeroSubtitle';
import HighlightBadge from '../../molecules/HighlightBadge/HighlightBadge';
import HeroCTAButtons from '../../molecules/HeroCTAButtons/HeroCTAButtons';
import ScrollIndicator from '../../atoms/ScrollIndicator/ScrollIndicator';

export default function HeroSec() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#151515] to-[#0A0A0A] flex items-center justify-center py-20 overflow-hidden">
          
      {/* Main Content */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 mb-8">

          <div className="flex-shrink-0 flex flex-col items-center justify-center gap-0 lg:h-full">
            <HeroLogo />
            <HeroLogo3 />
          </div>
          
          {/* textes */}
          <div className="flex-1 max-w-3xl flex flex-col justify-center">
            {/* Main Heading */}
            <HeroHeading />
            {/* Subtitle */}
            <HeroSubtitle />
            {/* Highlight Badge */}
            <HighlightBadge />
            
            {/* CTA Buttons */}
            <HeroCTAButtons />
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}