
import React from 'react';

interface ServiceDetailProps {
  onOpenConsultant: (message?: string) => void;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenConsultant, onBack }) => {
  const detailServices = [
    {
      title: "家電のホームドクター",
      subtitle: "点検・修理・メンテナンス",
      description: "「最近、テレビの映りが悪い」「エアコンから変な音がする」そんな時、すぐに駆けつけます。パナソニック製品を知り尽くしたプロが、的確に診断・修理します。他店で購入された製品でも、まずは一度ご相談ください。",
      features: ["迅速な出張修理", "定期点検サービス", "製品クリーニング"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "プロの設置・設定",
      subtitle: "性能を100%引き出す工事",
      description: "最新の4Kテレビや省エネエアコン。ただ置くだけでは本来の性能を発揮できません。お部屋の状況に合わせた最適な設置と、使い方のレクチャーまで丁寧に行います。配線もスッキリ美しく仕上げるのがプロのこだわりです。",
      features: ["最適な視聴環境づくり", "複雑な配線の整理", "親切な操作説明"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "リフォーム・リノベーション",
      subtitle: "水回り・電気・バリアフリー",
      description: "キッチン、バスルーム、トイレの入れ替えから、コンセントの増設、手すりの取り付けまで。パナソニックの最新設備を活用して、今の暮らしにぴったりの住まいをご提案します。地元の職人だからできる、顔の見える安心施工です。",
      features: ["水回りリフォーム", "照明・コンセント工事", "介護バリアフリー対応"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "「ついで」の小さなお手伝い",
      subtitle: "まちのでんきやさんならではの真心",
      description: "「高い所の電球が替えられない」「リモコンの電池の向きがわからない」そんな些細なことでも遠慮なくお呼びください。私たちパナランドフクシマは、お客様の日常の「ちょっと困った」を解決するために存在しています。",
      features: ["電球・電池の交換", "チャンネル設定", "家電の移動・整理"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24 pb-32 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-[#000f9f] text-white py-24 relative overflow-hidden mb-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button 
              onClick={onBack}
              className="mb-8 inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>トップページへ戻る</span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-maru tracking-tighter leading-tight">
              家電を売るだけじゃない。<br />
              <span className="text-blue-300">暮らしの安心</span>を売っています。
            </h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto">
              天草市佐伊津のパナランドフクシマは、単なる家電販売店ではありません。<br />
              地域の皆様の「お家のドクター」として、日々の暮らしを支えます。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {detailServices.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-50 p-6 rounded-3xl text-[#000f9f] flex-shrink-0">
                {service.icon}
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{service.subtitle}</span>
                  <h2 className="text-2xl font-black text-gray-900 font-maru tracking-tight">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="bg-gray-50 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full border border-gray-100">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* The Promise Section */}
        <div className="mt-24 bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-black text-[#000f9f] font-maru tracking-tight italic">パナランドフクシマの3つの約束</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl font-black text-blue-200">01</div>
                <h4 className="font-bold text-gray-900">迅速な対応</h4>
                <p className="text-sm text-gray-500">お困りごとは待ってくれません。地域密着だからこそのスピード感でお伺いします。</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-black text-blue-200">02</div>
                <h4 className="font-bold text-gray-900">明朗会計</h4>
                <p className="text-sm text-gray-500">作業前に必ずお見積もりを。ご納得いただいてから作業を開始いたします。</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-black text-blue-200">03</div>
                <h4 className="font-bold text-gray-900">一生涯のお付き合い</h4>
                <p className="text-sm text-gray-500">一度の販売で終わりではありません。その後の点検や買い替えまで責任を持ちます。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 font-bold mb-8 italic">「こんなこと、でんきやさんに聞いてもいいのかな？」</p>
          <button 
            onClick={() => onOpenConsultant("サービス詳細を見て、相談したかとですが...")}
            className="bg-[#000f9f] text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            はい、もちろんです！店主に相談する
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
