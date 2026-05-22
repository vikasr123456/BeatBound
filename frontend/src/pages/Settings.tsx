import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { User, CreditCard, Lock, LogOut, ChevronRight, Moon, Sun, Monitor, Shield, Volume2 } from 'lucide-react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [normalizeVolume, setNormalizeVolume] = useState(true);

  return (
    <div className="p-4 md:p-8 flex flex-col max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">Settings</h2>
        <p className="text-on-surface-variant font-medium">Manage your BeatBound preferences and account details.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Account Section */}
        <section>
          <h3 className="text-xl font-bold tracking-tight text-primary p-2 mb-2">Account</h3>
          <div className="bg-surface-container border border-white/5 rounded-[2rem] overflow-hidden shadow-sm flex flex-col">
            <div className="flex items-center justify-between p-5 hover:bg-surface-container-highest/50 cursor-pointer transition-colors border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl shadow-inner">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-on-surface">Alex Mercer</h4>
                  <p className="text-sm text-on-surface-variant">alex.mercer@example.com</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="flex items-center justify-between p-5 hover:bg-surface-container-highest/50 cursor-pointer transition-colors border-b border-white/5">
              <div>
                <h4 className="font-semibold text-on-surface">Subscription</h4>
                <p className="text-sm text-tertiary">BeatBound Premium - Renews Oct 15</p>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant" />
            </div>
            <div className="flex items-center gap-3 p-5 hover:bg-surface-container-highest/50 cursor-pointer transition-colors text-error">
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Sign Out</span>
            </div>
          </div>
        </section>

        {/* Appearance Section */}
        <section>
          <h3 className="text-xl font-bold tracking-tight text-primary p-2 mb-2">Appearance</h3>
          <div className="bg-surface-container border border-white/5 rounded-[2rem] overflow-hidden shadow-sm flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <div>
                <h4 className="font-semibold text-on-surface">Theme</h4>
                <p className="text-sm text-on-surface-variant">Choose your visual aesthetic</p>
              </div>
              <div className="flex items-center bg-surface-container-highest rounded-full p-1 border border-white/5">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:text-on-surface text-on-surface-variant">
                  <Sun className="w-4 h-4" /> Light
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-surface-variant border border-white/10 text-primary shadow-sm">
                  <Moon className="w-4 h-4" /> Dark
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:text-on-surface text-on-surface-variant">
                  <Monitor className="w-4 h-4" /> Auto
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h4 className="font-semibold text-on-surface">Reduce Motion</h4>
                <p className="text-sm text-on-surface-variant">Minimize UI animations</p>
              </div>
              <Switch.Root className="w-11 h-6 bg-surface-variant rounded-full relative data-[state=checked]:bg-primary outline-none cursor-default shadow-inner">
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
              </Switch.Root>
            </div>
          </div>
        </section>

        {/* Audio Quality */}
        <section>
          <h3 className="text-xl font-bold tracking-tight text-primary p-2 mb-2">Audio Quality</h3>
          <div className="bg-surface-container border border-white/5 rounded-[2rem] overflow-hidden shadow-sm flex flex-col">
            <div className="flex flex-col gap-4 p-5 border-b border-white/5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-on-surface">Streaming Quality</h4>
                <span className="text-sm font-medium text-primary">Very High</span>
              </div>
              {/* Fake visual slider for quality */}
              <div className="relative w-full h-2 bg-surface-variant rounded-full mt-2">
                <div className="absolute top-0 left-0 h-full w-[100%] bg-primary rounded-full"></div>
                <div className="absolute top-1/2 right-0 w-4 h-4 bg-white rounded-full -translate-y-1/2 shadow-md"></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-on-surface-variant font-medium">
                <span>Low</span>
                <span>Normal</span>
                <span>High</span>
                <span>Max</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h4 className="font-semibold text-on-surface">Normalize Volume</h4>
                <p className="text-sm text-on-surface-variant">Set the same volume level for all tracks</p>
              </div>
              <Switch.Root 
                checked={normalizeVolume}
                onCheckedChange={setNormalizeVolume}
                className="w-11 h-6 bg-surface-variant rounded-full relative data-[state=checked]:bg-primary outline-none cursor-default shadow-inner"
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
              </Switch.Root>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
