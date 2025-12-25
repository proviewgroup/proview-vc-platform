
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { consultWithAI } from '../services/geminiService.ts';

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    const newUserMsg: ChatMessage = { role: 'user', parts: [{ text: userText }] };
    setHistory(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const recentHistory = history.slice(-6);
      const responseText = await consultWithAI(userText, recentHistory);
      
      const modelMsg: ChatMessage = { role: 'model', parts: [{ text: responseText || '' }] };
      setHistory(prev => [...prev, modelMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { 
        role: 'model', 
        parts: [{ text: 'Hệ thống AI đang được bảo trì. Vui lòng liên hệ trực tiếp với chúng tôi tại proviewvc.com.' }] 
      };
      setHistory(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[550px] w-[380px] flex-col overflow-hidden rounded-[32px] border border-emerald-500/20 bg-slate-950 shadow-2xl"
          >
            <div className="bg-emerald-500 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 p-2">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold">PROVIEW AI</h3>
                  <p className="text-[9px] uppercase tracking-widest opacity-80">Venture Builder Assistant</p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-950/50">
              {history.length === 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed bg-slate-900 text-slate-300 border border-white/5">
                    Chào bạn, tôi là trợ lý AI của PROVIEW VC. Bạn cần tư vấn về Chiến lược hay Gọi vốn?
                  </div>
                </div>
              )}
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-slate-300 border border-white/5'
                  }`}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start px-2">
                  <div className="flex gap-1">
                    <div className="h-1 w-1 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="h-1 w-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="h-1 w-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi về SWOT, gọi vốn..."
                  className="w-full bg-slate-900 border border-white/5 rounded-full py-2.5 px-5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                <button onClick={handleSend} disabled={isLoading} className="absolute right-1.5 h-7 w-7 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl emerald-glow"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </motion.button>
    </div>
  );
};
