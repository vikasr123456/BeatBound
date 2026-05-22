import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Shuffle, Repeat, Heart, Baseline, ChevronDown, MonitorSpeaker, Share2, ListMusic, MoreHorizontal } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';
import { currentTrack } from '../../data';
import { cn } from '../../lib/utils';

export default function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([30]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "fixed left-0 right-0 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-all duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden",
        isExpanded 
          ? "bottom-0 h-[100dvh] bg-background border-t-0" 
          : "bottom-[64px] md:bottom-0 h-20 md:h-[90px] bg-surface-container-highest/90 backdrop-blur-2xl border-t border-white/5"
      )}
    >
      {/* === EXPANDED UI === */}
      <div 
        className={cn(
          "absolute inset-0 flex flex-col transition-all duration-300",
          isExpanded ? "opacity-100 visible delay-300 pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Background blur from cover URL */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={currentTrack.coverUrl} 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-[100px] scale-110" 
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 flex flex-col h-full overflow-hidden pt-4 md:pt-8 px-4 md:px-8 pb-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 md:mb-8 max-w-[1400px] w-full mx-auto shrink-0 pt-2">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2" onClick={() => setIsExpanded(false)}>
              <ChevronDown className="w-8 h-8" />
            </button>
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-1">Playing from album</p>
              <p className="font-semibold text-on-surface">{currentTrack.album}</p>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2">
              <MoreHorizontal className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 xl:gap-20 relative overflow-y-auto lg:overflow-hidden hide-scrollbar pb-10 lg:pb-0 px-4 sm:px-6">
            
            {/* Left Column: Player */}
            <div className="flex flex-col w-full h-full min-h-0 lg:max-w-[500px] mx-auto py-2">
              <div className="w-full aspect-square rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-surface-container shrink-0">
                <img src={currentTrack.coverUrl} alt={currentTrack.title} className="w-full h-full object-cover" />
              </div>

              <div className="mt-8 flex justify-between items-end w-full px-1">
                <div className="flex flex-col pr-4 min-w-0">
                  <h2 className="text-[32px] sm:text-[40px] leading-[1.1] font-extrabold text-on-surface mb-2 truncate">{currentTrack.title}</h2>
                  <p className="text-lg md:text-[19px] text-on-surface-variant font-medium truncate">{currentTrack.artist}</p>
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-on-surface-variant hover:text-on-surface transition-colors shrink-0 mb-1">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-2 px-1">
                <Slider.Root 
                  className="relative flex items-center select-none touch-none w-full h-4 group cursor-pointer" 
                  value={progress} 
                  onValueChange={setProgress} 
                  max={100}
                  step={1}
                >
                  <Slider.Track className="bg-white/10 relative grow rounded-full h-[6px] overflow-hidden">
                    <Slider.Range className="absolute bg-[#bdc2ff] rounded-full h-full" />
                  </Slider.Track>
                </Slider.Root>
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant tracking-wider mt-1">
                  <span>1:42</span>
                  <span>-2:36</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between px-1">
                <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2 md:p-0"><Shuffle className="w-5 h-5"/></button>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2 md:p-0"><SkipBack className="w-6 h-6 fill-current"/></button>
                <button 
                  className="w-20 h-20 rounded-full flex items-center justify-center bg-[#bdc2ff] text-[#131e8c] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(189,194,255,0.2)]"
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                >
                  {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-2" />}
                </button>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2 md:p-0"><SkipForward className="w-6 h-6 fill-current"/></button>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors p-2 md:p-0 relative flex justify-center">
                  <Repeat className="w-5 h-5 relative z-10" />
                  <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-[#bdc2ff]" />
                </button>
              </div>

              <div className="mt-auto pt-8 flex justify-between items-center text-on-surface-variant px-1 pb-4 lg:pb-0">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] hover:text-on-surface transition-colors cursor-pointer">
                  <MonitorSpeaker className="w-4 h-4" />
                  <span>STUDIO MONITORS</span>
                </div>
                <div className="flex items-center gap-3 w-28 md:w-32">
                  <Volume2 className="w-4 h-4 shrink-0" />
                  <Slider.Root className="relative flex items-center select-none touch-none w-full h-4 group cursor-pointer" defaultValue={[70]} max={100} step={1}>
                    <Slider.Track className="bg-white/10 relative grow rounded-full h-[3px] overflow-hidden">
                      <Slider.Range className="absolute bg-[#c6c5d5] rounded-full h-full group-hover:bg-[#bdc2ff]" />
                    </Slider.Track>
                  </Slider.Root>
                </div>
              </div>
            </div>

            {/* Right Column: Lyrics */}
            <div className="hidden lg:flex flex-col w-full h-full max-h-[85vh] border border-white/10 rounded-[3rem] relative overflow-hidden bg-transparent mb-4 shrink-0 mt-2">
              <div className="flex justify-between items-center px-10 pt-10 pb-6 shrink-0 relative z-10">
                <h3 className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase">Lyrics</h3>
                <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-on-surface bg-white/5 transition-colors">
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto hide-scrollbar px-10 pb-28 relative z-10 flex flex-col gap-8">
                <p className="text-[28px] xl:text-[32px] font-bold text-white/20 hover:text-white/40 transition-colors cursor-pointer leading-[1.3]">Through the haze of the midnight rain</p>
                <p className="text-[28px] xl:text-[32px] font-bold text-white/20 hover:text-white/40 transition-colors cursor-pointer leading-[1.3]">Signals cross in the digital vein</p>
                <p className="text-[44px] xl:text-[52px] font-extrabold text-on-surface drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] leading-[1.1] my-2 cursor-pointer">Neon pulse, an electric heartbeat</p>
                <p className="text-[28px] xl:text-[32px] font-bold text-white/20 hover:text-white/40 transition-colors cursor-pointer leading-[1.3]">Riding frequencies down the street</p>
                <p className="text-[28px] xl:text-[32px] font-bold text-white/20 hover:text-white/40 transition-colors cursor-pointer leading-[1.3] mt-2">Time dissolves in the synthesizer hum</p>
                <p className="text-[28px] xl:text-[32px] font-bold text-white/20 hover:text-white/40 transition-colors cursor-pointer leading-[1.3]">Waiting for the analog dawn to come</p>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-[#0b1326]/90 backdrop-blur-md shadow-2xl">
                <svg className="w-3.5 h-3.5 text-[#c6c5d5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                <span className="text-[11px] font-bold tracking-wide text-[#c6c5d5]">Synced &amp; verified by Vibe</span>
              </div>

              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b1326]/60 to-transparent pointer-events-none z-0" />
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/95 to-transparent pointer-events-none z-0" />
            </div>
          </div>
        </div>
      </div>

      {/* === COLLAPSED UI (Mini Player) === */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-between px-4 md:px-6 transition-all duration-300",
          isExpanded ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible delay-300 pointer-events-auto"
        )}
      >
        {/* Track Info */}
        <div className="flex items-center gap-3 w-1/3 min-w-[200px]" onClick={() => setIsExpanded(true)}>
          <img 
            src={currentTrack.coverUrl} 
            alt={currentTrack.title} 
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover shadow-lg"
          />
          <div className="flex flex-col truncate">
            <span className="font-semibold text-sm md:text-base truncate text-on-surface hover:underline cursor-pointer">
              {currentTrack.title}
            </span>
            <span className="text-xs md:text-sm text-on-surface-variant truncate hover:underline cursor-pointer">
              {currentTrack.artist}
            </span>
          </div>
          <button className="ml-2 text-on-surface-variant hover:text-primary transition-colors hidden sm:block">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex-1 flex flex-col items-center max-w-2xl px-4 hidden md:flex">
          <div className="flex items-center gap-6 mb-2">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <SkipBack className="w-5 h-5 fill-current" />
            </button>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary hover:scale-105 transition-transform shadow-[0_0_15px_rgba(189,194,255,0.2)]"
              onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <SkipForward className="w-5 h-5 fill-current" />
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 text-xs font-medium text-on-surface-variant">
            <span>1:42</span>
            <Slider.Root 
              className="relative flex items-center select-none touch-none w-full h-5 group" 
              value={progress} 
              onValueChange={setProgress} 
              max={100}
              step={1}
            >
              <Slider.Track className="bg-surface-variant relative grow rounded-full h-1">
                <Slider.Range className="absolute bg-primary rounded-full h-full group-hover:bg-primary-fixed transition-colors" />
              </Slider.Track>
              <Slider.Thumb className="block w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none" />
            </Slider.Root>
            <span>-2:36</span>
          </div>
        </div>

        {/* Mobile Play Button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-on-surface hover:text-primary transition-colors" onClick={(e) => { e.stopPropagation(); }}>
            <Heart className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}>
            {isPlaying ? <Pause className="w-8 h-8 fill-on-surface" /> : <Play className="w-8 h-8 fill-on-surface" />}
          </button>
        </div>

        {/* Auxiliary Controls */}
        <div className="hidden md:flex items-center justify-end gap-4 w-1/3 min-w-[200px]">
           <button className="text-on-surface-variant hover:text-on-surface transition-colors">
             <Baseline className="w-5 h-5" />
           </button>
           <div className="flex items-center gap-2 w-24">
             <Volume2 className="w-5 h-5 text-on-surface-variant" />
             <Slider.Root className="relative flex items-center select-none touch-none w-full h-5 group" defaultValue={[70]} max={100} step={1}>
               <Slider.Track className="bg-surface-variant relative grow rounded-full h-1">
                 <Slider.Range className="absolute bg-on-surface rounded-full h-full group-hover:bg-primary transition-colors" />
               </Slider.Track>
               <Slider.Thumb className="block w-3 h-3 bg-white shadow-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none" />
             </Slider.Root>
           </div>
           <button 
             className="text-on-surface-variant hover:text-on-surface transition-colors ml-2"
             onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
           >
             <Maximize2 className="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>
  );
}
