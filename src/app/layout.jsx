import './globals.css';
import ClientLayout from '../components/ClientLayout';
import { portfolioData } from '../data/portfolioData';

export const metadata = {
  title: portfolioData.siteMetadata.title,
  description: portfolioData.siteMetadata.description,
  keywords: portfolioData.siteMetadata.siteKeywords,
  authors: [{ name: portfolioData.siteMetadata.name }],
  creator: portfolioData.siteMetadata.name,
  metadataBase: new URL(portfolioData.siteMetadata.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: portfolioData.siteMetadata.title,
    description: portfolioData.siteMetadata.description,
    url: portfolioData.siteMetadata.siteUrl,
    siteName: portfolioData.siteMetadata.title,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: portfolioData.siteMetadata.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.siteMetadata.title,
    description: portfolioData.siteMetadata.description,
    creator: portfolioData.siteMetadata.twitterHandle,
    images: ['/images/og.png'],
  },
  icons: {
    icon: '/images/favicons/favicon-32x32.png',
    shortcut: '/images/favicons/favicon.ico',
    apple: '/images/favicons/apple-icon-180x180.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy text-slate antialiased selection:bg-slate/30 selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
