
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation } from '../types';
import { submitContactForm } from '../services/contactService';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: '',
    language: '',
    needs: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.needs) return;

    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
        // Tự động đóng sau khi hiển thị lời cảm ơn
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            name: '', company: '', position: '', email: '', phone: '',
            country: '', language: '', needs: '', budget: '', timeline: ''
          });
        }, 5000);
      }
    } catch (err) {
      alert("Kết nối hệ thống gặp sự cố. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[40px] border border-emerald-500/30 bg-[#050810] shadow-[0_0_100px_-20px_rgba(16,185,129,0.2)]"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center p-16 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  className="mb-8 h-24 w-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500"
                >
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white leading-relaxed">
                  {t.form.success}
                </h3>
                <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
                  Proview VC Automated System • Authorized
                </p>
              </div>
            ) : (
              <>
                <div className="bg-emerald-500 px-10 py-8 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-3xl font-black font-heading tracking-tight">{t.form.title}</h3>
                      <p className="text-[10px] opacity-80 mt-1 uppercase tracking-[0.25em] font-bold">Execution & Investment Protocol</p>
                    </div>
                    <button onClick={onClose} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-10 max-h-[70vh] overflow-y-auto space-y-8 custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { id: 'name', label: t.form.name, req: true, type: 'text' },
                      { id: 'company', label: t.form.company, req: false, type: 'text' },
                      { id: 'position', label: t.form.position, req: false, type: 'text' },
                      { id: 'email', label: t.form.email, req: true, type: 'email' },
                      { id: 'phone', label: t.form.phone, req: true, type: 'tel' },
                      { id: 'country', label: t.form.country, req: false, type: 'text' },
                      { id: 'language', label: t.form.language, req: false, type: 'text' },
                      { id: 'budget', label: t.form.budget, req: false, type: 'text' },
                    ].map((field) => (
                      <div key={field.id} className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                          {field.label} {field.req && <span className="text-emerald-500">*</span>}
                        </label>
                        <input 
                          required={field.req}
                          type={field.type}
                          value={(formData as any)[field.id]}
                          onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                          className="w-full bg-slate-950 border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:border-emerald-500 focus:outline-none transition-all placeholder:text-slate-800"
                        />
                      </div>
                    ))}
                    
                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        {t.form.timeline}
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. 1/2026"
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full bg-slate-950 border border-white/5 rounded-xl px-5 py-4 text-sm text-white focus:border-emerald-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        {t.form.needs} <span className="text-emerald-500">*</span>
                      </label>
                      <textarea 
                        required
                        rows={3}
                        value={formData.needs}
                        onChange={(e) => setFormData({...formData, needs: e.target.value})}
                        className="w-full bg-slate-950 border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:border-emerald-500 focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-600 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-2xl shadow-emerald-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? 'PROCESSING...' : t.form.submit.toUpperCase()}
                  </button>
                </form>
              </>
            )}
          </motion.div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #10b98133; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #10b981; }
          `}} />
        </div>
      )}
    </AnimatePresence>
  );
};
