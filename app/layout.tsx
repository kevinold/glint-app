import './globals.css';
import { Roboto, Ubuntu } from 'next/font/google';
import Auth from './authentication/Auth';
import AuthProvider from './authentication/AuthProvider';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Glint',
  description: 'Insights come in glints.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Auth>
            <main className="p-2">{children}</main>
          </Auth>
        </AuthProvider>
      </body>
    </html>
  );
}
