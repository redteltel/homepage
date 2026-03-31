
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'projects' | 'contact' | 'store') => void;
  currentView: 'home' | 'services' | 'projects' | 'contact' | 'store';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const menuItems = [
    { name: 'サービス', view: 'services' as const },
    { name: '施工事例', view: 'projects' as const },
    { name: '店舗案内', view: 'store' as const },
    { name: 'お問い合わせ', view: 'contact' as const }
  ];

  return (
    <footer className="bg-[#000f9f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <button 
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-2xl font-black italic tracking-tighter hover:text-blue-200 transition-colors text-left flex flex-col"
            >
              <span>パナランドフクシマ</span>
              <span className="text-sm font-normal not-italic text-blue-200 mt-1">(旧パナランドヨシダ)</span>
            </button>
            <p className="text-sm text-blue-100 leading-relaxed">
              あなたの街のパナソニックショップとして、家電のことから住まいのことまで、一生涯のお付き合いを大切にします。
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 border-b border-white/20 pb-2 uppercase tracking-widest text-xs">メニュー</h5>
            <ul className="space-y-3 text-sm text-blue-100">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => onNavigate(item.view)}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-300 mr-0 transition-all group-hover:w-3 group-hover:mr-2"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 border-b border-white/20 pb-2 uppercase tracking-widest text-xs">店舗のご案内</h5>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>パナランドフクシマ</li>
              <li>〒863-2172 熊本県天草市旭町43</li>
              <li>☎ 0969-24-0218</li>
              <li>営業時間: 9:00 - 17:00</li>
              <li className="text-red-300">定休日: 土日祝</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-lg border border-white/20">
            <span className="text-[10px] font-bold tracking-widest mb-2 text-center uppercase">あなたの近所の<br/>パナソニックショップ</span>
            <div className="text-xl font-black tracking-tighter">Panasonic</div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 text-center text-[10px] text-blue-200">
          © {new Date().getFullYear()} パナランドフクシマ (Panasonic Shop) All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
