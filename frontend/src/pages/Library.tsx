export default function Library() {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-on-surface">Your Library</h2>
      <p className="text-on-surface-variant">Your saved playlists, albums, and tracks will appear here.</p>
    </div>
  );
}
