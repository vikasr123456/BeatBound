import { Search as SearchIcon, Mic } from 'lucide-react';
import { mockTracks } from '../data';

export default function Search() {
  const categories = ['All', 'Electronic', 'Hip-Hop', 'Pop', 'Rock', 'Jazz', 'Chill'];
  
  const trendingArtists = [
    { name: 'Echo Valley', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80' },
    { name: 'Neon Flux', img: 'https://images.unsplash.com/photo-1516280440502-6c2e8c25781a?auto=format&fit=crop&w=300&q=80' },
    { name: 'The Alchemist', img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=300&q=80' },
    { name: 'Subtle Shift', img: 'https://images.unsplash.com/photo-1605367173273-04b391d84e5c?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      {/* Search Header */}
      <div className="flex flex-col items-center max-w-2xl mx-auto w-full mb-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-center text-on-surface">Explore</h2>
        
        <div className="relative w-full group mb-6">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Artists, songs, or podcasts" 
            className="w-full bg-surface-container-highest/80 backdrop-blur-md border border-white/5 rounded-full pl-16 pr-14 py-4 text-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-xl"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-primary">
            <Mic className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, i) => (
            <button key={cat} className={`px-6 py-2.5 rounded-full font-semibold transition-colors border max-w-full ${i === 0 ? 'bg-primary text-on-primary border-primary' : 'bg-surface-variant/40 text-on-surface border-white/5 hover:bg-surface-variant'}` }>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Artists */}
      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-6">Trending Artists</h3>
        <div className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
          {trendingArtists.map((artist, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer min-w-[120px]">
              <img src={artist.img} alt={artist.name} className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-transparent group-hover:border-primary" />
              <span className="font-semibold text-center group-hover:text-primary transition-colors">{artist.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Browse Genres (Bento style) */}
      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-6">Browse Genres</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 relative h-48 md:h-auto rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
            <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80" alt="Live Concerts" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6">
              <h4 className="text-3xl font-bold text-white mb-1">Live Concerts</h4>
              <p className="text-sm font-medium text-white/80">Feel the energy</p>
            </div>
          </div>
          
          {['Pop', 'Electronic', 'Indie', 'Hip Hop'].map((genre, i) => {
            const colors = [
              'from-rose-400 to-orange-400',
              'from-cyan-400 to-blue-500',
              'from-emerald-400 to-teal-500',
              'from-violet-400 to-fuchsia-500'
            ];
            return (
              <div key={genre} className={`relative h-28 md:h-40 rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg bg-gradient-to-br ${colors[i]} group`}>
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent"></div>
                <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white tracking-tight">{genre}</h4>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
