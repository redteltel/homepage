
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StoreInfo from './components/StoreInfo';
import ServiceDetail from './components/ServiceDetail';
import ProjectDetail from './components/ProjectDetail';
import ContactDetail from './components/ContactDetail';
import StoreDetail from './components/StoreDetail';
import LinksPage from './components/LinksPage';

const DEFAULT_HERO_IMAGE = "https://lh3.googleusercontent.com/d/1N7RiC4k8FLzVVNv3_SpR71L4oACSvcZa";
const DEFAULT_CHAR_IMAGE = "https://lh3.googleusercontent.com/d/1tilGKn8Z3TqtoQ-vCNBfq_Z1eVj01QyA";

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMessage, setInitialChatMessage] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'services' | 'projects' | 'contact' | 'store' | 'links'>('home');

  // URLパラメータをチェックしてリンクページを表示するか判定
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'links') {
      setView('links');
    }
  }, []);

  // ビューが切り替わった時にページトップへスクロール
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  const openConsultant = (message?: string) => {
    if (message) {
      setInitialChatMessage(message);
    } else {
      setInitialChatMessage(null);
    }
    setIsChatOpen(true);
  };

  const navigateTo = (newView: 'home' | 'services' | 'projects' | 'contact' | 'store' | 'links') => {
    // リンクページから戻る場合はURLパラメータを削除する（履歴に残さないようにreplace）
    if (view === 'links' && newView !== 'links') {
      const url = new URL(window.location.href);
      url.searchParams.delete('page');
      window.history.replaceState({}, '', url);
    }
    setView(newView);
  };

  const scrollToSection = (sectionId: string) => {
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        // 固定ヘッダー（約80px）の分だけオフセットをつける
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (view !== 'home') {
      setView('home');
      // DOMの反映を待つ時間を少し長めに（200ms）確保
      setTimeout(performScroll, 200);
    } else {
      performScroll();
    }
  };

  if (view === 'links') {
    return <LinksPage onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-[#000f9f] bg-white">
      <Header onNavigate={navigateTo} onScrollTo={scrollToSection} currentView={view} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <Hero 
              onScrollToServices={() => scrollToSection('services-section')}
              onOpenConsultant={() => openConsultant()} 
              currentImage={DEFAULT_HERO_IMAGE}
            />
            <Services onOpenConsultant={openConsultant} onViewDetail={() => navigateTo('services')} />
            <Projects onViewAll={() => navigateTo('projects')} />
            <StoreInfo onNavigateStore={() => navigateTo('store')} />
            <Contact />
          </div>
        )}
        
        {view === 'services' && (
          <ServiceDetail onOpenConsultant={openConsultant} onBack={() => navigateTo('home')} />
        )}

        {view === 'projects' && (
          <ProjectDetail onOpenConsultant={openConsultant} onBack={() => navigateTo('home')} />
        )}

        {view === 'contact' && (
          <ContactDetail onBack={() => navigateTo('home')} />
        )}

        {view === 'store' && (
          <StoreDetail onBack={() => navigateTo('home')} />
        )}
      </main>
      
      <Footer onNavigate={navigateTo} currentView={view} />
      
      {/* 画面右下のフローティング相談ボタン */}
      {!isChatOpen && (
        <button 
          type="button"
          onClick={() => openConsultant()}
          className="fixed bottom-8 right-8 z-[100] bg-[#000f9f] text-white p-4 rounded-full shadow-[0_20px_50px_rgba(0,15,159,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center space-x-2 group border-4 border-white cursor-pointer"
          aria-label="店主に相談する"
        >
          <div className="bg-white rounded-full p-2 group-hover:rotate-12 transition-transform shadow-inner">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000f9f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
             </svg>
          </div>
          <span className="font-black pr-2 hidden md:inline">店主に相談する</span>
        </button>
      )}

      {/* AI Consultant Modal */}
      {isChatOpen && (
        <AIConsultant 
          onClose={() => setIsChatOpen(false)} 
          currentCharImage={DEFAULT_CHAR_IMAGE}
          initialMessage={initialChatMessage}
        />
      )}
    </div>
  );
};

export default App;
