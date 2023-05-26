import './globals.css';
import { Roboto } from 'next/font/google';
import AuthProvider from './authentication/AuthProvider';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header/>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
