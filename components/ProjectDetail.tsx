
import React, { useState } from 'react';

interface ProjectDetailProps {
  onOpenConsultant: (message?: string) => void;
  onBack: () => void;
}

const allProjects = [
  { 
    id: 1,
    title: 'エコキュート導入でオール電化へ', 
    category: 'オール電化', 
    subCategory: 'Panasonic エコキュート',
    location: '天草市',
    description: 'ガス給湯器からエコキュートへ切り替え。光熱費の大幅な削減と、災害時の断水対策も兼ねた安心の設備導入です。深夜電力を活用し、家計に優しい暮らしを実現しました。',
    img: 'https://lh3.googleusercontent.com/d/1Z3IbrT_CEuOFAjrJrntNRUmnV84V9i-y' 
  },
  { 
    id: 2,
    title: '天草市 E様邸 バスリフォーム', 
    category: 'バスルーム', 
    subCategory: 'Panasonic オフローラ',
    location: '天草市',
    description: '「冬場の浴室が寒い」というお悩みを解決。高い断熱性と、お掃除のしやすさが特徴のオフローラを導入。スゴピカ素材で水垢もつきにくく、毎日の入浴が楽しみになったとお喜びいただいています。',
    img: 'https://lh3.googleusercontent.com/d/16c4k5vzq0Lpo6lnY6j2-lXkou23wKXhl' 
  },
  { 
    id: 3,
    title: '天草市 N様邸 キッチンリフォーム', 
    category: 'キッチン', 
    subCategory: 'Panasonic Lクラス',
    location: '天草市',
    description: '機能性と美しさを兼ね備えたLクラスキッチン。収納力の大幅アップと、お手入れが簡単なワイドコンロを採用。広々としたカウンターで、お料理の時間がよりスムーズで豊かなものになりました。',
    img: 'https://lh3.googleusercontent.com/d/1Ry0wF894-q0eMfYQHhumgr2McySY7wI7' 
  },
  { 
    id: 4,
    title: '天草市 E様邸 トイレリフォーム', 
    category: 'トイレ', 
    subCategory: 'Panasonic アラウーノ',
    location: '天草市',
    description: '劇落ちバブルで自動洗浄するアラウーノ。手洗いカウンターも新設し、高級感のある空間へ。節水性能も高く、以前のトイレに比べて水道代の削減も期待できます。',
    img: 'https://lh3.googleusercontent.com/d/1I6GUt_YF5EFNr6wOSeUoWWfE8QDeg0k-' 
  },
];

const categories = ['すべて', 'バスルーム', 'キッチン', 'トイレ', 'オール電化'];

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onOpenConsultant, onBack }) => {
  const [activeCategory, setActiveCategory] = useState('すべて');

  const filteredProjects = activeCategory === 'すべて' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-32 animate-in fade-in duration-700">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button 
              onClick={onBack}
              className="mb-8 inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>トップページへ戻る</span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-maru tracking-tighter leading-tight">
              天草の暮らしを、<br />
              <span className="text-blue-500">もっと快適に。</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
              パナランドフクシマが手掛けた、地元の施工事例をご紹介します。<br />
              リフォームから家電導入まで、お客様の「困った」を解決した記録です。
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <div className="sticky top-[72px] bg-white/90 backdrop-blur-md z-30 border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-black transition-all ${
                  activeCategory === cat
                    ? 'bg-[#000f9f] text-white shadow-lg shadow-blue-900/20 scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-[#000f9f] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {project.category}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow space-y-4">
                <h2 className="text-2xl font-black text-gray-900 font-maru tracking-tight">{project.title}</h2>
                <p className="text-sm font-bold text-blue-600 mb-2">{project.subCategory}</p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow italic">
                  「{project.description}」
                </p>
                <div className="pt-8 mt-auto border-t border-gray-50 flex justify-between items-center">
                  <button 
                    onClick={() => onOpenConsultant(`${project.title}のような工事の相談ばしたかとですが...`)}
                    className="text-[#000f9f] font-black text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>この事例について相談する</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-400 font-bold italic">現在、このカテゴリーの事例を準備中です。店主まで直接お問い合わせください。</p>
          </div>
        )}

        {/* Closing Quote Section */}
        <div className="mt-32 bg-blue-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-br-full opacity-50"></div>
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h3 className="text-3xl font-black text-[#000f9f] font-maru leading-tight">
              お家のリフォーム、<br />
              どこに頼めばいいか迷っていませんか？
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              天草の気候、地元の家の作りを熟知しているからこそできる、最適なご提案があります。<br />
              大手量販店や全国チェーンにはできない「顔の見える」施工をお約束します。
            </p>
            <div className="pt-6">
              <button 
                onClick={() => onOpenConsultant("リフォームの相談ばしたかとですが...")}
                className="bg-[#000f9f] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                無料でお見積もり・相談する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
