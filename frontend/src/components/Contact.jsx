import React, { useState } from 'react';
import { BRAND } from '../mock';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in name, email and message.');
      return;
    }
    setSending(true);
    // Persist to localStorage as mock until backend is wired
    const inbox = JSON.parse(localStorage.getItem('mf_inbox') || '[]');
    inbox.unshift({ ...form, ts: new Date().toISOString() });
    localStorage.setItem('mf_inbox', JSON.stringify(inbox));
    setTimeout(() => {
      setSending(false);
      toast.success('Message logged. I’ll get back to you fast.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <div className="font-mono-mf text-[10px] tracking-[0.32em] uppercase text-[#8a8a87] mb-3">
            — Direct Line
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f4] leading-[0.95]">
            Let&rsquo;s build<br />something <span className="outline-text">unfair.</span>
          </h2>
          <p className="mt-6 text-[#cfcfcc] text-base leading-relaxed max-w-md">
            Collaborations, capital introductions, real-estate deals in central Riga, or just a sharp idea — the inbox is open.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center justify-between border-y border-[#1a1a1a] py-5 group hover:border-[#3a3a37] transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-[#8a8a87]" />
                <div>
                  <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87]">Email</div>
                  <div className="text-[#f5f5f4] text-base">{BRAND.email}</div>
                </div>
              </div>
              <ArrowUpRight className="text-[#f5f5f4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-between border-b border-[#1a1a1a] py-5 group hover:border-[#3a3a37] transition-colors"
            >
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#8a8a87]" />
                <div>
                  <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87]">Phone</div>
                  <div className="text-[#f5f5f4] text-base">{BRAND.phone}</div>
                </div>
              </div>
              <ArrowUpRight className="text-[#f5f5f4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
            <div className="flex items-start gap-4 pt-1">
              <MapPin size={18} className="text-[#8a8a87] mt-1" />
              <div>
                <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87] mb-1">Based</div>
                {BRAND.locations.map((l) => (
                  <div key={l} className="text-[#f5f5f4] text-base">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="md:col-span-7 bg-[#0d0d0d] border border-[#1a1a1a] p-6 md:p-10 reveal"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" value={form.name} onChange={update('name')} placeholder="Your name" />
            <Field label="Email" type="email" value={form.email} onChange={update('email')} placeholder="you@domain.com" />
          </div>
          <Field label="Subject" value={form.subject} onChange={update('subject')} placeholder="What’s on your mind?" className="mt-5" />
          <div className="mt-5">
            <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87] mb-2">Message</div>
            <textarea
              rows={6}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me everything."
              className="w-full bg-transparent border border-[#1f1f1f] focus:border-[#f5f5f4] outline-none text-[#f5f5f4] p-4 resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-7 inline-flex items-center gap-3 bg-[#f5f5f4] text-[#0a0a0a] hover:bg-white px-7 py-4 font-mono-mf text-[11px] tracking-[0.28em] uppercase transition-colors disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send Message'}
            <Send size={14} />
          </button>
          <p className="mt-5 font-mono-mf text-[10px] tracking-[0.22em] uppercase text-[#6a6a67]">
            * Currently saved locally. Backend will be wired next.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', className = '' }) {
  return (
    <div className={className}>
      <div className="font-mono-mf text-[10px] tracking-[0.3em] uppercase text-[#8a8a87] mb-2">{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[#1f1f1f] focus:border-[#f5f5f4] outline-none text-[#f5f5f4] px-4 py-3 transition-colors"
      />
    </div>
  );
}
