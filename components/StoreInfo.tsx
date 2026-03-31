
import React from 'react';

interface StoreInfoProps {
  onNavigateStore: () => void;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ onNavigateStore }) => {
  return (
    <section id="店舗案内" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#000f9f] font-black tracking-widest text-sm uppercase mb-2">Shop Access</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 italic">店舗案内・アクセス</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-[#000f9f] text-white p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center">
              <h4 className="text-2xl font-black mb-8 border-b border-white/20 pb-4 tracking-tighter">パナランドフクシマ</h4>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">住所</p>
                  <p className="font-bold leading-relaxed text-lg">
                    〒863-2172<br />
                    熊本県天草市旭町43
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">電話番号</p>
                  <p className="text-3xl font-black italic">0969-24-0218</p>
                </div>

                <div>
                  <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">営業時間 / 定休日</p>
                  <p className="font-bold text-lg">9:00 - 17:00</p>
                  <p className="font-bold text-red-300">定休日：土日祝</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20 space-y-3">
                <button 
                  onClick={onNavigateStore}
                  className="bg-white text-[#000f9f] px-6 py-4 rounded-full font-black text-sm hover:bg-blue-50 transition-colors w-full justify-center shadow-lg block text-center"
                >
                  店舗の詳細を見る
                </button>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=パナランドフクシマ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-full font-black text-sm hover:bg-blue-500 transition-colors w-full justify-center shadow-lg"
                >
                  <span>ここへのルートを検索</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
            <iframe 
              src="https://maps.google.com/maps?q=パナランドフクシマ&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="パナランドフクシマ 地図"
              className="filter contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
