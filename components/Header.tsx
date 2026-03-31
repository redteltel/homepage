
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'services' | 'projects' | 'contact' | 'store') => void;
  onScrollTo: (sectionId: string) => void;
  currentView: 'home' | 'services' | 'projects' | 'contact' | 'store';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollTo, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (view: 'home' | 'services' | 'projects' | 'contact' | 'store', sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId && currentView === 'home') {
      onScrollTo(sectionId);
    } else {
      onNavigate(view);
    }
  };

  const menuItems = [
    { name: 'サービス', view: 'services' as const, section: 'services-section' },
    { name: '施工事例', view: 'projects' as const, section: '施工・納入事例' },
    { name: '店舗案内', view: 'store' as const, section: '店舗案内' },
    { name: 'お問い合わせ', view: 'contact' as const, section: 'お問い合わせ' }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.15)] py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="flex flex-col relative z-50 cursor-pointer">
            <div className="flex items-baseline">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter font-maru transition-colors duration-300 ${(isScrolled || currentView !== 'home' || isMobileMenuOpen) ? 'text-[#000f9f]' : 'text-[#000f9f] md:text-white'}`}>パナランドフクシマ</span>
            </div>
            <span className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors duration-300 ${(isScrolled || currentView !== 'home' || isMobileMenuOpen) ? 'text-blue-600' : 'text-blue-600 md:text-white/80'}`}>Panasonic Shop</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button 
                type="button"
                key={item.name}
                onClick={() => handleNavClick(item.view, item.section)}
                className={`text-[12px] font-black uppercase tracking-widest hover:text-blue-500 transition-all relative group cursor-pointer ${(isScrolled || currentView !== 'home') ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            <div className={`flex items-center space-x-3 px-6 py-2.5 rounded-full border-2 transition-all transform hover:scale-105 ${(isScrolled || currentView !== 'home') ? 'border-[#000f9f] text-[#000f9f] bg-blue-50/50' : 'border-[#000f9f] md:border-white text-[#000f9f] md:text-white bg-white/10'}`}>
              <span className="text-sm font-black tracking-tighter italic">☎ 0969-24-0218</span>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 relative z-50 transition-colors cursor-pointer ${(isScrolled || currentView !== 'home' || isMobileMenuOpen) ? 'text-[#000f9f]' : 'text-[#000f9f] md:text-white'}`}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          {menuItems.map((item) => (
            <button 
              type="button"
              key={item.name}
              onClick={() => handleNavClick(item.view, item.section)}
              className={`text-2xl font-black uppercase tracking-widest text-[#000f9f] font-maru cursor-pointer ${currentView === item.view ? 'border-b-4 border-[#000f9f]' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-8 border-t border-gray-100 w-2/3 text-center">
            <a href="tel:0969240218" className="text-3xl font-black text-[#000f9f] italic">☎ 0969-24-0218</a>
            <p className="text-xs text-gray-400 mt-2 font-bold tracking-widest">営業時間 9:00 - 17:00 (土日祝定休)</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
