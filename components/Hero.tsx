
import React from 'react';

interface HeroProps {
  onScrollToServices: () => void;
  onOpenConsultant: () => void;
  currentImage: string;
}

const Hero: React.FC<HeroProps> = ({ onScrollToServices, onOpenConsultant, currentImage }) => {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-gray-100">
      {/* Background Image & Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={currentImage} 
          alt="パナランドフクシマ 店舗外観" 
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1605117815705-602dc851897d?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        {/* Modern Glassy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden md:block"></div>
        <div className="absolute inset-0 bg-white/60 md:hidden backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-[30]">
        <div className="max-w-3xl space-y-10 md:space-y-12">
          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] text-[#000f9f] tracking-tighter font-maru">
            「困った」を、<br />
            <span className="text-blue-600">「良かった」</span>に。<br />
            <span className="text-2xl md:text-5xl block mt-6 font-bold text-gray-800 tracking-tight font-sans">
              街のでんきやさん、パナランドフクシマです。<br />
              <span className="text-lg md:text-2xl text-gray-500 mt-2 block">(旧パナランドヨシダ)</span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-medium text-gray-700 leading-relaxed max-w-xl border-l-8 border-blue-600 pl-8 bg-white/50 backdrop-blur-md py-6 rounded-r-[2rem] shadow-sm">
            天草市佐伊津で数十年。家電の修理から最新の省エネ生活まで。
            「誰に聞けばいいか分からない」その瞬間、私たちが駆けつけます。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6 relative z-[40]">
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onScrollToServices();
              }}
              className="group bg-[#000f9f] hover:bg-blue-800 text-white px-12 py-6 rounded-full font-black text-xl transition-all shadow-[0_25px_50px_-12px_rgba(0,15,159,0.4)] flex items-center justify-center space-x-4 hover:scale-105 active:scale-95 border-2 border-[#000f9f] cursor-pointer"
            >
              <span>提供サービスを見る</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[30] animate-bounce hidden md:block pointer-events-none">
        <div className="w-8 h-12 rounded-full border-2 border-[#000f9f]/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-[#000f9f] rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
