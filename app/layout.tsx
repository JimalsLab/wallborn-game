import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const socialImage = `${basePath}/og.png`;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Wallborn — Break the Path. Build Your Own.',
  description: 'A rule-breaking strategy roguelike inspired by Quoridor. Build impossible fortresses, bend the board and defeat increasingly wild opponents.',
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: { title: 'Wallborn — Break the Path. Build Your Own.', description: 'A divine-twisted strategy roguelike of walls, relics and impossible paths.', type: 'website', images: [{ url: socialImage, width: 1536, height: 805, alt: 'Wallborn — Break the path. Build your own.' }] },
  twitter: { card: 'summary_large_image', title: 'Wallborn', description: 'Outrun the rules. Build the impossible.', images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
