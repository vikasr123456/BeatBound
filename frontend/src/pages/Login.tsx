import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AudioLines } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className="w-full max-w-[400px] mx-auto px-4">
      <div className="bg-surface/60 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl p-8 flex flex-col gap-8 fade-up">
        {/* Header Identity */}
        <div className="text-center flex flex-col items-center gap-2 fade-up delay-100">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center shadow-[0_0_30px_rgba(129,140,248,0.2)]">
            <AudioLines className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tighter">BeatBound</h1>
          <p className="text-sm text-on-surface-variant font-medium">Enter your sonic space.</p>
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3 fade-up delay-200">
          <button className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-[2rem] bg-surface-variant/40 hover:bg-surface-variant/80 transition-colors border border-white/5 font-semibold text-on-surface group">
            <svg className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface transition-colors" viewBox="0 0 24 24">
               <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-[2rem] bg-surface-variant/40 hover:bg-surface-variant/80 transition-colors border border-white/5 font-semibold text-on-surface group">
            <svg className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface transition-colors" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05 1.8-3.08 1.8-1.09 0-1.44-.65-3.23-.65-1.78 0-2.19.62-3.18.66-1.05.04-2.22-.89-3.24-2.02C2.19 17.65 1.05 13.9 1.39 10.3c.16-1.93 1.04-3.69 2.5-4.71 1.41-1 3.12-1.08 4.67-1.12 1.34-.04 2.61.85 3.32.85.73 0 2.23-1.05 3.96-1.02 1.34.02 2.6.5 3.44 1.4.37.4 1.48 1.63 1.49 4.31-2.92.51-3.68 3.55-1.63 5.3-.61.9-1.34 2.15-2.09 3.06L17.05 20.28zM12.03 7.25C11.85 5.21 13.14 3.42 15 2.8c.36 2.01-1.08 3.99-2.97 4.45z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 fade-up delay-200">
          <div className="flex-1 h-px bg-white/5"></div>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">or email</span>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>

        {/* Email Form */}
        <form className="flex flex-col gap-4 fade-up delay-300" onSubmit={handleLogin}>
          <div className="flex flex-col gap-3">
            <div className="relative group">
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input type="email" placeholder="Email address" className="w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl pl-12 pr-4 py-3.5 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 focus:bg-surface-container-highest focus:ring-1 focus:ring-primary/50 transition-all" />
            </div>
            <div className="relative group">
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input type="password" placeholder="Password" className="w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl pl-12 pr-10 py-3.5 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 focus:bg-surface-container-highest focus:ring-1 focus:ring-primary/50 transition-all" />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded bg-surface-container border-white/10 text-primary focus:ring-primary focus:ring-offset-background" />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary hover:text-primary-fixed transition-colors">Forgot password?</a>
          </div>

          <button type="submit" className="w-full py-3.5 px-4 rounded-[2rem] bg-gradient-to-r from-secondary-container to-primary-container text-on-background font-semibold hover:opacity-90 active:scale-[0.98] transition-all mt-2 shadow-[0_0_20px_rgba(189,194,255,0.15)] flex justify-center items-center gap-2">
            Start Listening
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        {/* Footer CTA */}
        <div className="text-center mt-2 fade-up delay-300">
          <p className="text-sm text-on-surface-variant">
            New to BeatBound? <a href="#" className="font-semibold text-primary hover:text-primary-fixed hover:underline transition-colors ml-1">Join the community</a>
          </p>
        </div>
      </div>
      <div className="text-center mt-6 opacity-60">
        <p className="text-[11px] font-medium text-on-surface-variant">By continuing, you agree to BeatBound's Terms of Service and Privacy Policy.</p>
      </div>
    </main>
  );
}
