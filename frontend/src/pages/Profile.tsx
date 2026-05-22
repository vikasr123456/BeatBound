import { Link } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

export default function Profile() {
  const isSignedIn = false; // Mocking unauthenticated state

  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-on-surface">Profile</h2>
      
      {!isSignedIn ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-white/5 bg-surface-container rounded-[2rem] shadow-sm max-w-2xl mx-auto w-full mt-8">
          <div className="w-24 h-24 rounded-full bg-surface-variant flex items-center justify-center mb-6 shadow-inner">
            <UserCircle2 className="w-12 h-12 text-on-surface-variant" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-2">You're not signed in</h3>
          <p className="text-on-surface-variant mb-8 max-w-md">
            Sign in or create an account to save your favorite tracks, create playlists, and personalize your BeatBound experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/login"
              className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(189,194,255,0.2)]"
            >
              Sign In
            </Link>
            <Link 
              to="/login"
              className="px-8 py-3.5 rounded-full bg-surface-variant text-on-surface font-bold hover:bg-surface-variant/80 transition-colors border border-white/5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-on-surface-variant">Manage your listener profile here.</p>
      )}
    </div>
  );
}
