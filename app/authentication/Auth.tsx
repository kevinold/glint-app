'use client';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// Reference project: https://codesandbox.io/s/match-your-brand-vdwk0?file=/src/App.js
import AuthScreen from './AuthScreen';

export default function Auth({ children }: { children: React.ReactNode }) {
  const { authStatus, user } = useAuthenticator((context) => [
    context.authStatus,
  ]);
  //console.log(user, authStatus);
  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' || !user ? <AuthScreen /> : children}
    </>
  );
}
