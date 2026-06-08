import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Jeganathan Sangeerthanan - Embedded Systems & IoT Engineer',
  description:
    'Premium portfolio showcasing embedded systems engineering, IoT development, firmware engineering, and FPGA design expertise.',
  keywords: [
    'Embedded Systems',
    'IoT Engineer',
    'Firmware Development',
    'FPGA Design',
    'Electronics Engineer',
    'ESP32',
    'STM32',
    'PCB Design',
    'IoT Solutions',
    'Sri Lanka',
  ],
  authors: [{ name: 'Jeganathan Sangeerthanan' }],
  creator: 'Jeganathan Sangeerthanan',
  publisher: 'Jeganathan Sangeerthanan',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeganathan.dev',
    siteName: 'Jeganathan Sangeerthanan - Portfolio',
    title: 'Jeganathan Sangeerthanan - Embedded Systems & IoT Engineer',
    description:
      'Premium portfolio showcasing embedded systems engineering, IoT development, firmware engineering, and FPGA design expertise.',
    images: [
      {
        url: 'https://jeganathan.dev/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeganathan Sangeerthanan - Embedded Systems & IoT Engineer',
    description:
      'Premium portfolio showcasing embedded systems engineering, IoT development, firmware engineering, and FPGA design expertise.',
    images: ['https://jeganathan.dev/twitter-image.jpg'],
    creator: '@Sangeerthanan',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#050816" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
