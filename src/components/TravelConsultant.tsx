import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `你是一位专业的贵阳旅游咨询顾问。
你的任务是回答用户关于贵阳旅游的所有问题，包括景点推荐、美食攻略、交通建议、住宿选择等。
你的语气应该是热情、友好且专业的。
如果用户问到非贵阳旅游相关的问题，请礼貌地引导他们回到贵阳旅游的话题。
你可以推荐甲秀楼、黔灵山、青岩古镇、花溪夜郎谷等景点，以及酸汤鱼、丝娃娃、肠旺面等美食。
请尽量提供具体的建议，例如：'如果您喜欢历史，我强烈建议您去青岩古镇走走'。`;

export const TravelConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: '您好！我是您的贵阳旅游小助手。有什么我可以帮您的吗？比如想了解哪里的美食，或者怎么坐地铁？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const botMessage = response.text || '抱歉，我暂时无法回答这个问题。';
      setMessages(prev => [...prev, { role: 'bot', content: botMessage }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: '哎呀，网络出了点小状况，请稍后再试。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-3xl border border-black/5 shadow-xl overflow-hidden">
      <div className="p-6 bg-brand-primary text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold serif">AI 旅游顾问</h3>
            <p className="text-[10px] opacity-70 uppercase tracking-widest">Powered by Gemini</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-bg/30">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'user' ? 'bg-brand-accent text-white' : 'bg-white border border-black/5 text-brand-primary'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand-accent text-white rounded-tr-none' 
                  : 'bg-white border border-black/5 text-gray-800 rounded-tl-none shadow-sm'
              }`}>
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-brand-primary">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-4 bg-white border border-black/5 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-black/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="问问我关于贵阳的任何事..."
            className="w-full pl-6 pr-14 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-white rounded-xl hover:bg-brand-accent disabled:opacity-50 disabled:hover:bg-brand-primary transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
