
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userMessage: string, history: { role: string; parts: { text: string }[] }[]) => {
  const apiKey = process.env.API_KEY;

  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    return "ただいま準備中で手が離せんとです。お急ぎの際はお電話（0969-24-0218）くださいばい！";
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey });

    // 制限の緩い軽量モデルを使用
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `あなたは熊本県天草市旭町43にあるパナソニックショップ「パナランドフクシマ (旧パナランドヨシダ)」の店主です。

【店舗情報】
所在地：〒863-2172 熊本県天草市旭町43
電話番号：0969-24-0218

【回答ルール】
1. 回答は常に簡潔に、最大140文字程度で。
2. 天草弁（〜ばい、〜だる、〜な、〜ごたる等）を交えた温かい口調。
3. 最後に「パナランドフクシマ（0969-24-0218）へお気軽に！」と必ず添える。`,
        temperature: 0.7,
      },
    });

    return response.text || "申し訳なか、聞き取れんかったです。";
  } catch (error: any) {
    console.error("【Gemini API Error】", error);
    
    const errorMsg = error.message || "";

    // スクリーンショットの「使用不可」状態が原因の際のエラーハンドリング
    if (errorMsg.includes("429") || errorMsg.includes("RESOURCE_EXHAUSTED") || errorMsg.includes("tier")) {
      return "申し訳なか！今、Googleさんの制限でAIが動かんごたっです。店主がGoogle AI Studioで『新しいプロジェクトでキーを作り直す』か、個人のGmailアカウントで作り直す必要があるかもしれんです。お急ぎならお電話（0969-24-0218）くださいばい！";
    }

    if (errorMsg.includes("403")) {
      return "申し訳なか、APIキーが正しく設定されとらんごたっです。一度設定を見直しますばい！お急ぎはお電話ください。";
    }
    
    return "申し訳なか、ちょっと機械の調子が良くなかごたるです。お電話（0969-24-0218）いただければすぐ対応しますばい！";
  }
};
