
import React, { useState } from 'react';

interface ContactDetailProps {
  onBack: () => void;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ onBack }) => {
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
      _subject: "【パナランドフクシマ】詳細ページ問い合わせ",
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    alert("コピーしました！");
  };

  const mailSubject = encodeURIComponent("【問い合わせ】パナランドフクシマ (旧パナランドヨシダ)");
  const mailBody = encodeURIComponent(`お名前：${formData.name}\n返信先メール：${formData.email}\nご連絡先電話：${formData.contact}\n内容：\n${formData.message}`);

  if (status === 'success') {
    return (
      <div className="pt-24 pb-32 min-h-[80vh] flex items-center animate-in fade-in zoom-in duration-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-blue-50 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-10 font-maru">お問い合わせを受け付けました</h2>
            
            <a href="tel:0969240218" className="block bg-[#000f9f] text-white p-10 md:p-14 rounded-[3rem] mb-10 shadow-2xl transform rotate-1 hover:scale-[1.02] transition-transform group">
               <p className="text-xl md:text-2xl font-black mb-8 leading-tight italic">
                 万が一、2日以上たっても当店から連絡がない場合は、お手数ですがこちらを押してすぐにお電話をください！
               </p>
               <div className="inline-block bg-white text-[#000f9f] px-10 py-5 rounded-2xl text-4xl font-black tracking-tighter italic shadow-xl group-hover:bg-blue-50">
                 ☎ 0969-24-0218
               </div>
            </a>

            <p className="text-sm text-gray-400 font-bold leading-relaxed mb-10">
              ※システムから自動で確認メールが届きますので、内容をご確認ください。
            </p>

            <div className="space-y-6">
              <button onClick={onBack} className="text-gray-400 font-black text-sm hover:underline">
                ← トップページへ戻る
              </button>
              <div className="pt-6 border-t border-gray-100">
                 <button 
                  onClick={() => setStatus('manual')} 
                  className="text-gray-300 text-[10px] font-black hover:text-blue-600 transition-colors uppercase tracking-widest"
                 >
                   ※うまく送れない・手動でメールを送る
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 animate-in fade-in duration-700">
      <section className="bg-[#000f9f] text-white py-24 mb-20 text-center">
        <div className="container mx-auto px-6">
          <button onClick={onBack} className="mb-8 text-blue-200 font-bold uppercase text-sm">← 戻る</button>
          <h1 className="text-4xl md:text-6xl font-black font-maru italic">Contact</h1>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-blue-50">
            {status === 'manual' || status === 'error' ? (
              <div className="animate-in slide-in-from-top duration-500 text-center">
                <h3 className="text-2xl font-black text-red-600 mb-8 font-maru italic">お電話が一番早くて確実です</h3>
                
                <a href="tel:0969240218" className="flex items-center justify-center space-x-4 p-8 bg-blue-600 text-white rounded-3xl shadow-2xl hover:scale-[1.02] transition-all mb-12">
                  <span className="text-3xl font-black italic tracking-tighter">0969-24-0218</span>
                </a>

                <div className="space-y-6">
                  <p className="text-sm font-bold text-gray-500 leading-relaxed">
                    手動でメールを送る場合は、内容をコピーしてWebメールサービスをご利用ください。
                  </p>
                  <button 
                    onClick={copyToClipboard}
                    className="w-full bg-[#000f9f] text-white font-black py-6 rounded-2xl shadow-xl text-lg hover:bg-blue-800 transition-colors"
                  >
                    入力内容をコピーする
                  </button>

                  <div className="pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-4">
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-red-50 text-red-600 px-8 py-3 rounded-xl text-xs font-black border border-red-100 hover:bg-red-100">Gmail</a>
                    <a href={`https://compose.mail.yahoo.co.jp/?to=${targetEmail}&subj=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-purple-50 text-purple-600 px-8 py-3 rounded-xl text-xs font-black border border-purple-100 hover:bg-purple-100">Yahoo!</a>
                    <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${targetEmail}&subject=${mailSubject}&body=${mailBody}`} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 px-8 py-3 rounded-xl text-xs font-black border border-blue-100 hover:bg-blue-100">Outlook</a>
                  </div>
                  <button type="button" onClick={() => setStatus('idle')} className="w-full text-gray-400 font-bold text-xs py-2 mt-8">戻る</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">お名前</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-7 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#000f9f] font-bold" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">返信用メールアドレス</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-7 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#000f9f] font-bold" placeholder="example@mail.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">ご連絡先電話番号（半角）</label>
                  <input 
                    type="tel" 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
                    maxLength={11}
                    pattern="\d*"
                    className="w-full px-7 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#000f9f] font-bold" 
                    placeholder="09000000000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-1">ご相談内容</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={6} required className="w-full px-7 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-[#000f9f] font-bold"></textarea>
                </div>

                <div className="space-y-4 text-center">
                  <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#000f9f] text-white font-black py-6 rounded-2xl shadow-xl mb-4">
                    {status === 'submitting' ? '送信中...' : 'メールを送信する'}
                  </button>
                  <p className="text-xs text-gray-400 font-bold italic">
                    送信に失敗する場合や、お急ぎの際はお電話（0969-24-0218）にて承ります。
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
