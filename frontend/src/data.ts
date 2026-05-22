import { Track } from './types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    artist: 'Echoes & Artifacts',
    album: 'Horizons',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80',
    duration: 225
  },
  {
    id: '2',
    title: 'Midnight Drive',
    artist: 'Synthwave Collective',
    album: 'Neon Pulse EP',
    coverUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=400&q=80',
    duration: 184
  },
  {
    id: '3',
    title: 'Lo-Fi Study Beats',
    artist: 'Chillhop Music',
    album: 'Focus Sessions',
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80',
    duration: 210
  },
  {
    id: '4',
    title: 'Warehouse Vibes',
    artist: 'Techno Bunker',
    album: 'Deep Cuts',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
    duration: 340
  },
  {
    id: '5',
    title: 'Deep Sleep Ambient',
    artist: 'Ethereal Sounds',
    album: 'Void',
    coverUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=400&q=80',
    duration: 400
  }
];

export const currentTrack = {
  id: 'ref-1',
  title: 'Neon Pulse',
  artist: 'The Midnight Synthesizers',
  album: 'Sonic Horizons',
  coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80', // Using a cool abstract synth 3d shape
  duration: 258 // 4:18 (1:42 + 2:36 = 258 seconds)
}; 
