import { Play } from 'lucide-react';
import { mockTracks } from '../data';

export default function Home() {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      {/* Hero / Featured */}
      <section className="relative overflow-hidden rounded-[2rem] bg-surface-container-high border border-white/5 shadow-2xl group cursor-pointer">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c090b332da8?auto=format&fit=crop&w=1200&q=80" 
            alt="Featured" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
          <span className="bg-surface-variant/80 backdrop-blur-md text-on-surface text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-4 border border-white/10">
            Featured Release
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tighter mb-2">Neon Horizon</h2>
          <p className="text-lg md:text-xl text-on-surface-variant font-medium flex items-center gap-2 mb-8">
            Echoes & Artifacts
            <svg className="w-5 h-5 text-tertiary" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-on-primary font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(189,194,255,0.4)]">
              <Play className="w-5 h-5 fill-current" />
              Listen Now
            </button>
          </div>
        </div>
      </section>

      {/* Recently Played */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-tight">Recently Played</h3>
          <button className="text-sm font-semibold text-primary hover:text-primary-fixed transition-colors">See All</button>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 hide-scrollbar flex-nowrap">
          {mockTracks.map(track => (
            <div key={track.id} className="min-w-[140px] md:min-w-[180px] group cursor-pointer flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-on-surface truncate group-hover:text-primary transition-colors">{track.title}</h4>
                <p className="text-sm text-on-surface-variant truncate">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Made For You */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-tight">Made For You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "Daily Mix 1", subtitle: "Electronic, Synthwave & More", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
            { title: "Discover Weekly", subtitle: "New releases tailored for you", img: "https://images.unsplash.com/photo-1493225457124-a1a2a401bdae?auto=format&fit=crop&w=600&q=80" },
            { title: "Release Radar", subtitle: "Catch up on the latest", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" }
          ].map((mix, i) => (
            <div key={i} className="relative h-48 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg p-6 flex flex-col justify-end">
              <img src={mix.img} alt={mix.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-surface-container-highest/20 to-transparent mix-blend-multiply"></div>
              <div className="relative z-10">
                 <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{mix.title}</p>
                 <h4 className="text-xl font-bold text-on-surface mb-2">{mix.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
