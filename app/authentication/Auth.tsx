'use client';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../amplify_styles.css';

//https://codesandbox.io/s/match-your-brand-vdwk0?file=/src/App.js
import AuthScreen from './AuthScreen';

export default function Auth({ children }: { children: React.ReactNode }) {
  const { authStatus, user, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);
  console.log(user, authStatus);

  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <AuthScreen /> : children}
    </>
  );
}
