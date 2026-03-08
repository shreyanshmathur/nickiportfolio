export type MediaType = 'image' | 'youtube' | 'video' | 'instagram';

export interface Project {
  id: string;
  type: MediaType;
  category: string;
  client: string;
  src: string;
  span: string; // Tailwind grid span classes
  role: string;
  description: string;
}

export const projects: Project[] = [
  // Showreel / Highlight Reel
  { id: '7', type: 'youtube', category: 'Showreel', client: 'Nikitha Rao – Cinematic Showreel 2024', src: 'nMvLHi00y9A', span: 'col-span-1 md:col-span-3 row-span-2', role: 'DOP & Editor', description: 'A compiled best-of-work video highlighting cinematic production moments, raw emotion, and high-end aesthetics across luxury and event sectors.' },

  // Video Content
  { id: '1', type: 'youtube', category: 'Event Cinematography', client: 'Tata Mumbai Marathon – Event Film', src: 'nMvLHi00y9A', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Lead DOP', description: 'Captured the energy of the 2024 Tata Mumbai Marathon across 3 camera setups. Delivered high-impact reels and full event highlights.' },
  { id: '2', type: 'instagram', category: 'Social Media Management', client: 'Bvlgari – Instagram Reels Campaign', src: 'C8uMC1DquHY', span: 'col-span-1 row-span-2', role: 'Social Media Manager', description: 'Formulated and executed a high-engagement social strategy for Bvlgari, maintaining luxury brand consistency across all short-form content.' },
  { id: '4', type: 'video', category: 'Event Cinematography', client: 'Navratri Utsav – Live Coverage', src: '/media/videos/Video-591.mp4', span: 'col-span-1 md:col-span-1 row-span-2', role: 'Cinematographer', description: 'Produced daily high-pressure reels for the Navratri Utsav with Falguni Pathak (2022–2024).' },
  { id: '5', type: 'youtube', category: 'Creative Project', client: 'Charles & Keith – Product Launch Film', src: 'pi3DQQHvlno', span: 'col-span-1 md:col-span-2 row-span-1', role: 'Creative Project Manager', description: 'Oversaw brand deliverables and team coordination for the winter collection launch in Delhi.' },
  { id: '6', type: 'video', category: 'Shorts Content', client: 'Armani – Social Reel Series', src: '/media/videos/Video-283.mp4', span: 'col-span-1 row-span-2', role: 'Brand Manager', description: 'Supervised creative direction and final edits for Armani perfume launch social assets.' },
  { id: '9', type: 'video', category: 'Shorts Content', client: 'Maison Margiela – BTS Coverage', src: '/media/videos/Video-457.mp4', span: 'col-span-1 row-span-2', role: 'Project Manager', description: 'Managed behind-the-scenes production and fast-paced content delivery for Maison Margiela launch.' },
  { id: '11', type: 'video', category: 'Social Media Management', client: 'Raw & Ruckus – Creative Reel', src: '/media/videos/Video-369.mp4', span: 'col-span-1 row-span-2', role: 'Content Creator', description: 'End-to-end production of engaging, fast-paced reels targeting Gen-Z luxury consumers.' },
  { id: '12', type: 'video', category: 'Shorts Content', client: 'Luxury Event – Pre-Event Promo', src: '/media/videos/Video-99.mp4', span: 'col-span-1 md:col-span-2 row-span-2', role: 'DOP', description: 'Generated pre-event hype using dynamic visual pacing and immersive sound design.' },
  { id: '13', type: 'youtube', category: 'Shorts Content', client: 'Brand Story – Product Feature', src: 'wlq6lMINDZY', span: 'col-span-1 row-span-2', role: 'Brand Manager', description: 'Dedicated short-form feature highlighting brand identity and seamless product integration.' },

  // Instagram Content
  { id: '200', type: 'instagram', category: 'Event Cinematography', client: 'Big City Spiral – After Movie', src: 'DHlRFLqtXXj', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Solo Project', description: 'Conceptualized, shot and edited the event film for Instagram. Shot on Canon | Edited on Premiere Pro' },
  { id: '206', type: 'instagram', category: 'Creative Project', client: 'Charles & Keith – Winter Launch', src: 'DCWdfF9qslr', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Creative Direction', description: 'Creative direction for the winter collection launch event in Delhi.' },
  { id: '207', type: 'instagram', category: 'Creative Project', client: 'Armani – Perfume Launch', src: 'C_VuJ-vPGl1', span: 'col-span-1 md:col-span-1 row-span-1', role: 'Creative Direction', description: 'Visual strategy for the Armani perfume launch event in Mumbai.' },
  { id: '208', type: 'instagram', category: 'Creative Project', client: 'Bvlgari – Delhi Event', src: 'C8uMC1DquHY', span: 'col-span-1 row-span-2', role: 'Creative Direction', description: 'Content strategy and creative oversight for Bvlgari perfume launch in Delhi.' },

  // Photography / Flatlays
  { id: '20', type: 'image', category: 'Flatlays', client: 'Bvlgari – Luxury Campaign', src: '/media/images/IMG_7248-2.jpg', span: 'col-span-1 row-span-1', role: 'Creative Director', description: 'Curated and shot premium flatlays to highlight product features for luxury campaigns.' },
  { id: '21', type: 'image', category: 'Flatlays', client: 'Armani – Product Study', src: '/media/images/IMG_7272.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Photographer', description: 'Detailed product photography showcasing texture and light for high-end accessories.' },
  { id: '26', type: 'image', category: 'Creative Product', client: 'Maison Margiela – Dramatic Lighting', src: '/media/images/IMG_7231-2.jpg', span: 'col-span-1 md:col-span-2 row-span-1', role: 'DOP', description: 'Utilized dramatic shadows and highlights to evoke brand identity.' },

  // Top 10 BTS Shots
  { id: '100', type: 'image', category: 'Behind The Scenes', client: 'Bvlgari BTS – Lighting Setup', src: '/media/images/unedited/IMG_7213.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Capturing the precise lighting setup required for luxury product flatlays.' },
  { id: '104', type: 'image', category: 'Behind The Scenes', client: 'Armani BTS – Texture Detail', src: '/media/images/unedited/IMG_7218.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Capturing natural light and authentic texture for Armani product study.' },
  { id: '105', type: 'image', category: 'Behind The Scenes', client: 'Tata Marathon BTS – Race Day', src: '/media/images/unedited/IMG_7221.jpg', span: 'col-span-1 md:col-span-2 row-span-1', role: 'Art Director', description: 'Capturing race-day energy and multi-camera coordination.' },
  { id: '108', type: 'image', category: 'Behind The Scenes', client: 'Margiela BTS – Studio Setup', src: '/media/images/unedited/IMG_7224.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Behind the scenes of the Maison Margiela studio launch.' },
  { id: '112', type: 'image', category: 'Behind The Scenes', client: 'Charles & Keith BTS – Prep', src: '/media/images/unedited/IMG_7228.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Venue preparation and content capture strategy for winter collection launch.' },
  { id: '116', type: 'image', category: 'Behind The Scenes', client: 'Falguni Pathak BTS – Live Sync', src: '/media/images/unedited/IMG_7232.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Managing live-to-reel content synchronization during the festive season.' },
  { id: '120', type: 'image', category: 'Behind The Scenes', client: 'Bvlgari BTS – Composition Study', src: '/media/images/unedited/IMG_7236.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Analyzing visual balance and brand positioning in real-time.' },
  { id: '124', type: 'image', category: 'Behind The Scenes', client: 'Armani BTS – Reflections', src: '/media/images/unedited/IMG_7240.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Studio BTS focusing on managing glass reflections.' },
  { id: '128', type: 'image', category: 'Behind The Scenes', client: 'Creative Campaign BTS', src: '/media/images/unedited/IMG_7244.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Collaborative workflow on a high-end creative brand campaign.' },
  { id: '132', type: 'image', category: 'Behind The Scenes', client: 'Final Cut BTS – Editorial', src: '/media/images/unedited/IMG_7248.jpg', span: 'col-span-1 md:col-span-2 row-span-2', role: 'Art Director', description: 'Final staging for the editorial luxury spread.' },
];
