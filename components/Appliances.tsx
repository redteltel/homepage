
import React from 'react';

const products = [
  {
    id: 'tv',
    category: 'TV / 映像',
    name: '4K有機ELテレビ VIERA Z95Bシリーズ',
    feature: '2025年最新フラッグシップ：次世代マイクロレンズアレイ搭載',
    comment: 'ついに登場した最新のZ95B。進化した「AI高画質プロセッサー」が, 映像の奥行きを本物のように再現します。天草の美しい景色をこの画面で見てほしかですな！',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1200',
    tags: ['2025最新モデル', 'Master OLED Ultimate', 'Fire TV 搭載']
  },
  {
    id: 'ref',
    category: '冷蔵庫',
    name: '「はやうま冷凍」搭載モデル',
    feature: '1週間経っても, お肉がパラパラ',
    comment: '共働きのご家庭に特におすすめです。忙しい朝のお弁当作りが格段に楽になります。設置場所の相談も乗ります！',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    tags: ['ナノイーX', '微凍結パーシャル', '省エネNo.1']
  },
  {
    id: 'wash',
    category: '洗濯機',
    name: 'ななめドラム洗濯乾燥機 LXシリーズ',
    feature: '洗剤の自動投入で、家事をもっと自由に',
    comment: '洗剤を計る手間がなくなるだけで、こんなに楽になるのかと驚かれます。天草の湿った季節の乾燥もお任せ！',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1200',
    tags: ['洗剤自動投入', '温水泡洗浄', 'スマホ連携']
  },
  {
    id: 'air',
    category: 'エアコン',
    name: 'エオリア プレミアムXSシリーズ',
    feature: '最高峰モデル：ナノイーX搭載、空気まで美しく',
    comment: 'これがパナソニック最高峰のXSシリーズです。カビに強く、「ナノイーX」で部屋の脱臭まで。AIが勝手に快適にしてくれるけん、電気代も安心。天草の蒸し暑い夏にはこれが一番ですばい！',
    img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI快適おまかせ', 'フィルター自動掃除', 'ナノイーX']
  }
];

const Appliances: React.FC<{ onConsult: (product: string) => void }> = ({ onConsult }) => {
  return (
    <section id="最新家電" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-[#000f9f] text-sm font-black tracking-widest border border-blue-100 uppercase">
            Product Line Up
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 italic tracking-tighter leading-tight font-maru">
            店主が選ぶ、<br className="md:hidden"/>今月のイチオシ家電.
          </h3>
          <p className="text-gray-600 font-medium leading-relaxed text-lg max-w-2xl mx-auto">
            パナランドフクシマでは、最新家電を売るだけでなく「お客様の暮らしに合うか」を大切にしています。
            天草の風土を知っているからこそできる、最適なご提案を。
          </p>
        </div>

        <div className="space-y-40">
          {products.map((p, idx) => (
            <div key={p.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              {/* Image with Decorative Element */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -inset-6 bg-blue-50/50 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-gray-200 aspect-[16/10]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute top-8 left-8 bg-[#000f9f] text-white px-5 py-2 rounded-xl text-xs font-black tracking-widest shadow-2xl backdrop-blur-sm bg-opacity-90">
                    {p.category}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-10">
                <div className="reveal stagger-1">
                  <h4 className="text-blue-600 font-black text-xl mb-3 tracking-tight font-maru">― {p.feature}</h4>
                  <h5 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 font-maru tracking-tighter">{p.name}</h5>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="bg-white text-[#000f9f] text-[11px] font-bold px-4 py-1.5 rounded-full border border-blue-100 shadow-sm uppercase tracking-tighter">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-[2.5rem] border-l-8 border-[#000f9f] relative shadow-lg shadow-blue-100/50 reveal stagger-2">
                  <p className="text-gray-800 font-bold leading-relaxed text-lg italic">
                    「{p.comment}」
                  </p>
                  <p className="text-[11px] font-black text-[#000f9f] mt-6 uppercase tracking-[0.3em] opacity-50">— Shop Owner Recommendation</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 reveal stagger-3">
                  <a 
                    href="#お問い合わせ"
                    className="flex-grow bg-[#000f9f] hover:bg-blue-800 text-white font-black px-10 py-6 rounded-[1.5rem] transition-all shadow-[0_20px_40px_-10px_rgba(0,15,159,0.3)] hover:-translate-y-1 active:translate-y-0 text-center text-lg"
                  >
                    カタログ請求・お問い合わせ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appliances;
