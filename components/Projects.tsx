
import React from 'react';

const projects = [
  { 
    title: 'エコキュート導入でオール電化へ', 
    category: 'Panasonic オール電化', 
    img: 'https://lh3.googleusercontent.com/d/1Z3IbrT_CEuOFAjrJrntNRUmnV84V9i-y' 
  },
  { 
    title: '天草市 E様邸 バスリフォーム', 
    category: 'Panasonic オフローラ', 
    img: 'https://lh3.googleusercontent.com/d/16c4k5vzq0Lpo6lnY6j2-lXkou23wKXhl' 
  },
  { 
    title: '天草市 N様邸 キッチンリフォーム', 
    category: 'Panasonic Lクラス キッチン', 
    img: 'https://lh3.googleusercontent.com/d/1Ry0wF894-q0eMfYQHhumgr2McySY7wI7' 
  },
  { 
    title: '天草市 E様邸 トイレリフォーム', 
    category: 'Panasonic アラウーノ', 
    img: 'https://lh3.googleusercontent.com/d/1I6GUt_YF5EFNr6wOSeUoWWfE8QDeg0k-' 
  },
];

interface ProjectsProps {
  onViewAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  return (
    <section id="施工・納入事例" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#000f9f] font-black tracking-widest text-sm uppercase mb-2">Delivery Examples</h2>
            <h3 className="text-3xl md:text-4xl font-bold">納入・施工事例</h3>
          </div>
          <button 
            onClick={onViewAll}
            className="text-[#000f9f] font-bold text-sm flex items-center hover:underline"
          >
            事例をもっと見る
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white rounded-md overflow-hidden shadow-md group border border-gray-100">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-blue-600 block mb-1 uppercase tracking-widest">{p.category}</span>
                <h4 className="text-sm font-bold text-gray-800">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
