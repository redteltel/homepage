
import React from 'react';

interface StoreDetailProps {
  onBack: () => void;
}

const StoreDetail: React.FC<StoreDetailProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-32 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 relative overflow-hidden mb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button 
              onClick={onBack}
              className="mb-8 inline-flex items-center space-x-2 text-blue-600 hover:text-[#000f9f] transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>トップページへ戻る</span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-maru tracking-tighter leading-tight text-[#000f9f]">
              店舗案内・アクセス
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
              天草市佐伊津で数十年。地域の皆様に支えられ、<br />
              これからも「まちのでんきや」として歩み続けます。
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Concept Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] block mb-4">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 font-maru leading-tight italic">
                「売って終わり」ではない、<br />
                一生涯のお付き合い。
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
                <p>
                  私たちは、単に家電製品を販売するだけの店ではありません。お客様の暮らしに寄り添い、困った時には一番に思い出していただける存在でありたいと考えています。
                </p>
                <p>
                  天草の気候、地元の家の構造、転じて天草市佐伊津の皆様の暮らし方。それらを熟知している私たちだからこそできる、きめ細やかなサポートを大切にしています。
                </p>
                <p>
                  「パナランドフクシマに頼めば安心だ」そのお言葉が、私たちの原動力です。
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] rotate-3"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1N7RiC4k8FLzVVNv3_SpR71L4oACSvcZa" 
                alt="パナランドフクシマ店舗外観" 
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Store Info Table */}
          <div className="bg-white border-2 border-blue-50 rounded-[3rem] p-10 md:p-20 shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl font-black text-gray-900 mb-12 font-maru text-center">店舗基本情報</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">店名</span>
                  <span className="font-bold text-gray-900">パナランドフクシマ (旧パナランドヨシダ)</span>
                </div>
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">所在地</span>
                  <span className="font-bold text-gray-900">〒863-2172 熊本県天草市旭町43</span>
                </div>
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">電話番号</span>
                  <span className="font-bold text-gray-900 text-xl tracking-tighter">0969-24-0218</span>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">営業時間</span>
                  <span className="font-bold text-gray-900">9:00 〜 17:00</span>
                </div>
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">定休日</span>
                  <span className="font-bold text-red-500">土曜日・日曜日・祝日</span>
                </div>
                <div className="flex border-b border-gray-100 pb-4">
                  <span className="w-32 font-black text-gray-400 text-xs uppercase tracking-widest">駐車場</span>
                  <span className="font-bold text-gray-900">あり（店舗正面に駐車可能です）</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-black text-gray-900 font-maru italic">アクセスマップ</h3>
              <p className="text-sm text-gray-500 mt-2">店舗周辺の地図です。旭町交差点からもアクセス良好です。</p>
            </div>
            <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src="https://maps.google.com/maps?q=パナランドフクシマ&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="パナランドフクシマ 詳細地図"
              ></iframe>
            </div>
            <div className="text-center pt-4">
               <a 
                href="https://www.google.com/maps/dir/?api=1&destination=パナランドフクシマ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#000f9f] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-900/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Googleマップで経路案内を表示</span>
              </a>
            </div>
          </div>

          {/* Message Section */}
          <div className="text-center bg-gray-900 text-white rounded-[4rem] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              <div className="w-24 h-24 bg-white rounded-full mx-auto p-1 flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1tilGKn8Z3TqtoQ-vCNBfq_Z1eVj01QyA" 
                  alt="店主" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-black font-maru leading-tight italic">皆様のご来店、<br />心よりお待ちしておりますばい！</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                電球一つから、最新家電、リフォームのご相談まで。<br />
                どんな小さなことでも構いません。どうぞお気軽にお立ち寄りください。<br />
                温かいお茶をご用意してお待ちしております。
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
