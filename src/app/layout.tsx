import '@/css/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Killian Grant',
  description:
    'Killian Grant is a husband, father, and engineering leader living in Denver, Colorado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'flex items-center justify-center'}>{children}</body>
    </html>
  );
}
