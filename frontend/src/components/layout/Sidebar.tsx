import { NavLink } from 'react-router-dom';
import { Home, Compass, Library, Heart, Plus, Settings, AudioLines, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Sidebar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/search', icon: Compass, label: 'Browse' },
    { to: '/library', icon: Library, label: 'Library' },
    { to: '/favorites', icon: Heart, label: 'Favorites' }
  ];

  return (
    <div className="flex flex-col h-full pt-6 pb-[110px] px-4 overflow-y-auto hide-scrollbar">
      <div className="flex items-center gap-2 px-2 mb-2 text-primary">
        <AudioLines className="w-8 h-8" />
        <h1 className="text-2xl font-extrabold tracking-tighter">BeatBound</h1>
      </div>
      <p className="px-2 text-xs font-medium text-on-surface-variant mb-8">Your Sonic Space</p>

      <button className="mb-8 w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary-container/90 py-3 px-4 rounded-full font-semibold transition-colors">
        <Plus className="w-5 h-5" />
        Create Playlist
      </button>

      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-4 px-4 py-3 rounded-full transition-colors font-medium text-sm",
                isActive 
                  ? "bg-surface-variant/50 text-primary border border-white/5" 
                  : "text-on-surface hover:text-primary hover:bg-surface-variant/20"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-4 px-4 py-3 rounded-full transition-colors font-medium text-sm",
              isActive 
                  ? "bg-surface-variant/50 text-primary border border-white/5" 
                  : "text-on-surface hover:text-primary hover:bg-surface-variant/20"
            )
          }
        >
          <User className="w-5 h-5" />
          Profile
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-4 px-4 py-3 rounded-full transition-colors font-medium text-sm",
              isActive 
                  ? "bg-surface-variant/50 text-primary border border-white/5" 
                  : "text-on-surface hover:text-primary hover:bg-surface-variant/20"
            )
          }
        >
          <Settings className="w-5 h-5" />
          Settings
        </NavLink>
      </div>
    </div>
  );
}
