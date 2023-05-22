'use client';
import { Authenticator } from '@aws-amplify/ui-react';

// Amplify Initialization
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

//Wrapper component for Auththenticator Provider. This is done so it can be included inteleaved with server component
//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

export default AuthProvider;
