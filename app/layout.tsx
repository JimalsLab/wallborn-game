import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wallborn — Break the Path. Build Your Own.',
  description: 'A rule-breaking strategy roguelike inspired by Quoridor. Build impossible fortresses, bend the board and defeat increasingly wild opponents.',
  openGraph: { title: 'Wallborn — Break the Path. Build Your Own.', description: 'A divine-twisted strategy roguelike of walls, relics and impossible paths.', type: 'website', images: [{ url: '/og.png', width: 1536, height: 805, alt: 'Wallborn — Break the path. Build your own.' }] },
  twitter: { card: 'summary_large_image', title: 'Wallborn', description: 'Outrun the rules. Build the impossible.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
