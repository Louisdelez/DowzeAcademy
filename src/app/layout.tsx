import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Dowze Academy',
    template: '%s | Dowze Academy',
  },
  description: 'Hub éducatif modulaire pour un apprentissage structuré et progressif',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Anti-flash script: applies theme before first paint to prevent FOUC
const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem('dowze-academy-theme');
    if (theme && ['latte', 'frappe', 'macchiato', 'mocha'].includes(theme)) {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme !== 'latte') {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
