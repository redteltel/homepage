
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIConsultantProps {
  onClose: () => void;
  currentCharImage: string;
  initialMessage?: string | null;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose, currentCharImage, initialMessage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'いらっしゃいませ！パナランドフクシマ (旧パナランドヨシダ) 店主（AI）です。天草の暮らしに合わせて、家電の修理からお家のリフォームまで何でもお答えしますばい！' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasTriggeredInitial = useRef(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialMessage && !hasTriggeredInitial.current) {
      hasTriggeredInitial.current = true;
      handleSend(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = async (manualInput?: string) => {
    const textToSend = manualInput || input.trim();
    if (!textToSend || isLoading) return;

    if (!manualInput) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const history = messages
        .filter((m, index) => !(index === 0 && m.role === 'model'))
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      const response = await getAIResponse(textToSend, history);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("Chat interaction error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "申し訳なか。電波の調子が悪いごたるです。お急ぎの際はお電話（0969-24-0218）くださいばい！" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-8 md:w-[450px] md:h-[75vh] bg-white z-[60] shadow-[0_40px_100px_rgba(0,15,159,0.25)] flex flex-col rounded-t-[2.5rem] md:rounded-[2.5rem] border border-blue-50 overflow-hidden animate-in slide-in-from-bottom-12 duration-700">
      {/* Header */}
      <div className="bg-[#000f9f] text-white p-8 flex justify-between items-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-transparent"></div>
        <div className="flex items-center space-x-5 relative z-10">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden transform -rotate-3 border-2 border-white ring-4 ring-blue-500/20">
            <img 
              src={currentCharImage} 
              alt="看板キャラクター" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-[10px] font-black text-blue-600">SHOP</span>';
              }}
            />
          </div>
          <div>
            <h3 className="font-black text-xl tracking-tight font-maru">店主に相談（AI）</h3>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">AI Specialist Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-all text-sm font-bold relative z-10 px-3">
          閉じる
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-gradient-to-b from-blue-50/30 to-white">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] p-5 rounded-[1.5rem] text-[15px] leading-relaxed shadow-md transition-all ${
              m.role === 'user' 
                ? 'bg-[#000f9f] text-white rounded-br-none shadow-blue-200 font-medium' 
                : 'bg-white text-gray-800 rounded-bl-none border border-blue-50 shadow-gray-100 font-medium'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-blue-100 p-4 rounded-[1.5rem] rounded-bl-none shadow-sm flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
              <span className="text-[10px] font-black text-blue-600 tracking-widest italic">考え中ばい...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-8 border-t bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="お悩みや製品名を送ってください..."
            className="flex-grow bg-gray-50 border border-gray-100 rounded-2xl px-7 py-5 text-[15px] focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-400 transition-all outline-none font-medium placeholder-gray-400"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="bg-[#000f9f] hover:bg-blue-800 disabled:bg-gray-200 text-white px-6 py-5 rounded-2xl transition-all shadow-[0_15px_30px_-10px_rgba(0,15,159,0.3)] hover:-translate-y-1 active:translate-y-0 disabled:transform-none font-black text-sm"
          >
            送信
          </button>
        </div>
        <p className="mt-4 text-[10px] text-center text-gray-400 font-bold tracking-widest uppercase">
          Powered by Gemini Technology
        </p>
      </div>
    </div>
  );
};

export default AIConsultant;
