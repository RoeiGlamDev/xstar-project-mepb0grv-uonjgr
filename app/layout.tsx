import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FashionTV',
  description: 'FashionTV - e-commerce store | Premium cosmetics platform with elegant design, smooth animations, high-quality images',
  keywords: 'FashionTV, e-commerce store, cosmetics, elegant design, smooth animations, high-quality images',
  authors: [{ name: 'FashionTV' }],
  openGraph: {
    title: 'FashionTV',
    description: 'FashionTV - e-commerce store | Premium cosmetics platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}