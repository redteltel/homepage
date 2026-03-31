
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'manual'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
  const targetEmail = "fukushima@10e.jp";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    if (name === 'contact') {
      value = value.replace(/[^\d]/g, '').slice(0, 11);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      ...formData,
      _subject: "【パナランドフクシマ】WEBサイト問い合わせ",
      _template: "table",
      _captcha: "false"
    };
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const copyToClipboard = () => {
    const text = `【パナランドフクシマ (旧パナランドヨシダ) お問い合わせ】\nお名前：${formData.name}\n返信先メール：${formData.email}\nご連絡先電話：${formData.contact}\n内容：\n${formData.message}`;
    navigator.clipboard.writeText(text);
    alert("内容をコピーしました！");
  };

  const mailSubject = encodeURIComponent("【問い合わせ】パナランドフクシマ (旧パナランドヨシダ)");
  const mailBody = encodeURIComponent(`お名前：${formData.name}\n返信先メール：${formData.email}\nご連絡先電話：${formData.contact}\n内容：\n${formData.message}`);

  return (
    <section id="お問い合わせ" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/5 space-y-8">
            <div>
              <h2 className="text-[#000f9f] font-black tracking-widest text-sm uppercase mb-2">Quick Contact</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-maru italic">お急ぎの方・<br/>かんたんに相談したい方</h3>
            </div>

            <div className="space-y-4">
              <a href="tel:0969240218" className="flex items-center p-8 bg-white rounded-3xl shadow-xl hover:scale-[1.02] transition-all border-4 border-blue-600">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">お電話が一番確実です</p>
                    <p className="text-3xl font-black text-gray-900 tracking-tighter italic">0969-24-0218</p>
                  </div>
                </div>
              </a>

              <div className="flex flex-col p-8 bg-white text-gray-900 rounded-3xl shadow-xl border border-blue-50 space-y-4">
                <p className="text-[10px] font-black text-[#06c755] uppercase tracking-widest">LINEで写真を送って相談</p>
                <a href="https://lin.ee/aOw9739" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
                </a>
              </div>
            </div>

            <div className="bg-[#000f9f] p-10 rounded-[2rem] text-white shadow-2xl">
              <h4 className="font-black text-lg mb-4 italic">店舗情報</h4>
              <p className="text-[11px] font-bold leading-relaxed opacity-80">
                〒863-2172 熊本県天草市旭町43<br/>
                営業時間: 9:00 - 17:00 (土日祝定休)
              </p>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 relative min-h-[600px] flex flex-col justify-center overflow-hidden">
              {status === 'success' ? (
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-8 font-maru">お問い合わせを受け付けました</h3>
                  
                  <a href="tel:0969240218" className="block bg-blue-600 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl mb-8 transform -rotate-1 hover:scale-[1.02] transition-transform group">
                    <p className="text-lg md:text-xl font-black mb-6 leading-tight italic">
                      万が一、2日以上たっても当店から折り返し連絡がない場合は、お手数ですがこちらを押してすぐにお電話をください！
                    </p>
                    <div className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl text-3xl font-black tracking-tighter italic shadow-inner group-hover:bg-blue-50">
                      ☎ 0969-24-0218
                    </div>
                  </a>

                  <p className="text-xs text-gray-400 font-bold mb-8">
                    ※ご入力のメールアドレス宛にシステムから届く、確認用メールを必ずご確認ください。
                  </p>

                  <button onClick={() => setStatus('idle')} className="text-[#000f9f] font-black text-sm hover:underline">
                    ← フォームに戻る
                  </button>
                </div>
              ) : status === 'manual' || status === 'error' ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-8 font-maru tracking-tight italic">お電話が一番早くて確実です</h3>
                  
                  <a href="tel:0969240218" className="flex items-center justify-center space-x-4 p-8 bg-blue-600 text-white rounded-3xl shadow-2xl hover:scale-[1.02] transition-all mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-3xl font-black italic tracking-tighter">0969-24-0218</span>
                  </a>

                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 mb-6 space-y-6">
                    <p className="text-xs font-bold text-gray-500 leading-relaxed">
                      Web経由での送信に失敗しました。内容をコピーして、ご自身のメールアプリから送ることも可能です。
                    </p>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full bg-white border-2 border-gray-200 text-gray-700 font-black py-5 rounded-xl flex items-center justify-center space-x-2 shadow-sm hover:bg-gray-100"
                    >
                      <span>内容をコピーする</span>
                    </button>
                    <div className="grid grid-cols-3 gap-3">
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-red-50 text-red-600 py-3 rounded-xl text-[10px] font-black text-center border border-red-100 hover:bg-red-100">Gmail</a>
                      <a href={`https://compose.mail.yahoo.co.jp/?to=${targetEmail}&subj=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-purple-50 text-purple-600 py-3 rounded-xl text-[10px] font-black text-center border border-purple-100 hover:bg-purple-100">Yahoo!</a>
                      <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${targetEmail}&subject=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 py-3 rounded-xl text-[10px] font-black text-center border border-blue-100 hover:bg-blue-100">Outlook</a>
                    </div>
                  </div>
                  <button onClick={() => setStatus('idle')} className="w-full text-gray-400 font-bold text-xs py-2">フォームに戻る</button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-maru">メールでお問い合わせ</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email Form</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">お名前</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#000f9f] outline-none font-medium" placeholder="天草 太郎" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">返信用メールアドレス</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#000f9f] outline-none font-medium" placeholder="example@mail.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">ご連絡先電話番号（半角）</label>
                        <input 
                          type="tel" 
                          name="contact" 
                          value={formData.contact} 
                          onChange={handleChange} 
                          required 
                          maxLength={11}
                          pattern="\d*"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#000f9f] outline-none font-medium" 
                          placeholder="09000000000" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">ご相談内容</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#000f9f] outline-none font-medium" placeholder="製品の修理、リフォームの見積もりなど"></textarea>
                    </div>
                    
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#000f9f] text-white font-black px-8 py-5 rounded-2xl transition-all shadow-xl disabled:bg-gray-400">
                      {status === 'submitting' ? '送信中...' : 'この内容で送信する'}
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => setStatus('manual')}
                      className="w-full py-4 text-xs font-black text-gray-400 hover:text-red-600 transition-colors"
                    >
                      ※うまく送れない・お急ぎの方はこちら
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
