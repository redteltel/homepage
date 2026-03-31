import React from 'react';

interface LinksPageProps {
  onBack: () => void;
}

const LinksPage: React.FC<LinksPageProps> = ({ onBack }) => {
  const links = [
    {
      title: 'Webページ',
      url: 'https://fukusima.10e.jp/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      borderColor: 'border-blue-200'
    },
    {
      title: 'メール',
      url: 'mailto:fukushima@10e.jp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-900',
      borderColor: 'border-orange-200'
    },
    {
      title: 'LINEお友達登録',
      url: 'https://lin.ee/pC536Hg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5c-5.5 0-10 3.6-10 8 0 2.5 1.4 4.8 3.7 6.2 0.3 0.1 0.7 0.4 0.5 1.1 -0.2 0.7 -0.8 2.5 -0.8 2.5 0 0 0 0 0 0 0 0.3 0.2 0.6 0.5 0.6 0.1 0 0.2 0 0.4 -0.1 2.5 -0.7 5.3 -2.2 5.3 -2.2 0.4 -0.2 0.8 -0.3 1.2 -0.3 0.4 0 0.8 0 1.2 0 5.5 0 10 -3.6 10 -8S17.5 2.5 12 2.5zM12 16.5c-0.4 0-0.8 0-1.2 0 -0.1 0-0.2 0-0.3 0.1 -1.2 0.6 -2.8 1.4 -3.8 1.8 0.3 -0.9 0.6 -1.8 0.7 -2.1 0.1 -0.3 -0.1 -0.6 -0.3 -0.8 -2.2 -1.3 -3.5 -3.3 -3.5 -5.5 0 -3.3 3.6 -6 8 -6 4.4 0 8 2.7 8 6S16.4 16.5 12 16.5z"/>
        </svg>
      ),
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      borderColor: 'border-green-200'
    },
    {
      title: 'Googleビジネスプロフィール',
      url: 'https://x.gd/IHxF2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.35 11.1h-9.17v2.73h6.51c-0.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72C19 4.72 16.56 2 12.1 2 6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.38 0 9.25-4.04 9.25-9.51 0-0.48-0.07-1.1-0.2-1.38z" />
        </svg>
      ),
      bgColor: 'bg-red-50',
      textColor: 'text-red-900',
      borderColor: 'border-red-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 animate-in fade-in zoom-in duration-500">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
        <div className="bg-[#000f9f] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-blue-200">
              <span className="text-3xl font-black text-[#000f9f] font-maru">パ</span>
            </div>
            <h1 className="text-2xl font-black text-white font-maru tracking-wider mb-1">パナランドフクシマ</h1>
            <p className="text-blue-200 text-xs font-bold tracking-widest uppercase">Panasonic Shop</p>
          </div>
        </div>
        
        <div className="p-8 space-y-4">
          <p className="text-center text-gray-500 text-sm font-bold mb-6">
            お問い合わせ・アクセスはこちらから
          </p>
          
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 rounded-xl border-2 transition-all transform hover:scale-105 hover:shadow-md active:scale-95 ${link.bgColor} ${link.borderColor} group`}
            >
              <div className={`p-3 rounded-full bg-white shadow-sm mr-4 ${link.textColor}`}>
                {link.icon}
              </div>
              <span className={`font-bold text-lg ${link.textColor} group-hover:underline`}>
                {link.title}
              </span>
              <div className="ml-auto opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <button 
            onClick={onBack}
            className="text-gray-400 text-sm font-bold hover:text-[#000f9f] transition-colors flex items-center justify-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400 font-bold">© {new Date().getFullYear()} パナランドフクシマ</p>
      </div>
    </div>
  );
};

export default LinksPage;
