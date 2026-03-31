
import React from 'react';

const services = [
  {
    title: '最新家電のご提案',
    desc: '4Kテレビ「ビエラ」や省エネ冷蔵庫、洗濯機など。パナソニック製品の性能を最大限に活かす設置まで承ります。',
    tag: 'Panasonic専門店',
  },
  {
    title: 'エアコン・空調工事',
    desc: '「エオリア」の設置から、プロの技術による内部クリーニングまで。快適で清潔な空気環境をご提案します。',
    tag: '即日対応も相談可',
  },
  {
    title: 'リフォーム・リノベーション',
    desc: 'システムキッチンやバスルームの入れ替え、バリアフリー化など。パナソニックの設備で理想の住まいを。',
    tag: '住まいのリフォーム',
  },
  {
    title: '聞こえの相談窓口',
    desc: 'パナソニックの補聴器の試聴やメンテナンス。聞こえのお悩みも、いつもの店主がじっくりお伺いします。',
    tag: '補聴器認定店',
  }
];

interface ServicesProps {
  onOpenConsultant: (message?: string) => void;
  onViewDetail: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenConsultant, onViewDetail }) => {
  return (
    <section id="services-section" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#000f9f] font-black tracking-widest text-sm uppercase mb-2">Our Support</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 italic">プロにお任せください。</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-50 rounded-lg p-10 border-b-4 border-transparent hover:border-[#000f9f] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block text-[10px] font-black bg-blue-100 text-[#000f9f] px-2 py-0.5 rounded">
                  {s.tag}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-[#000f9f]">{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{s.desc}</p>
              
              <div className="space-y-3">
                <button 
                  type="button"
                  onClick={() => onOpenConsultant(`${s.title}について相談したかとですが...`)}
                  className="w-full py-3 px-4 bg-[#000f9f] text-white font-bold text-sm rounded-xl hover:bg-blue-800 transition-all shadow-sm flex items-center justify-center space-x-2 group/btn cursor-pointer"
                >
                  <span>店主に相談する</span>
                </button>
                <button 
                  type="button"
                  onClick={onViewDetail}
                  className="w-full py-3 px-4 bg-white border border-blue-200 text-[#000f9f] font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center cursor-pointer"
                >
                  詳細を詳しく見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
