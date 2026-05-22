import { NavLink } from 'react-router-dom';
import { Home, Search, Library, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BottomNav() {
  const items = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/library', icon: Library, label: 'Library' },
    { to: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl border-t border-white/5 z-50 flex items-center justify-around px-2">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors",
              isActive ? "text-primary" : "text-on-surface-variant"
            )
          }
        >
          {({ isActive }) => (
            <>
              <div className={cn("p-1 rounded-full", isActive && "bg-primary-container/20")}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold tracking-wide">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
