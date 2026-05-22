import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import PlayerBar from '../player/PlayerBar';

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-background overflow-hidden text-on-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-surface-dim border-r border-white/5 z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative min-w-0">
        <main className="flex-1 overflow-y-auto pb-[150px] md:pb-[90px] relative z-10">
          <Outlet />
        </main>
      </div>

      {/* Persistent Player Bar */}
      <PlayerBar />

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
