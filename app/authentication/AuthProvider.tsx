'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';

// Amplify Initialization
import { Amplify } from 'aws-amplify';
import awsConfig from '../aws-exports';
// Amplify.configure({ ...awsConfig, ssr: true });

//Wrapper component for Auththenticator Provider. This is done so it can be included inteleaved with server component
//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  //This is a hack to get around the fact that window is not defined in the server. Moving this code up to the top of the file throws a silent error.
  useEffect(() => {
    // Reference Configure Auth Category https://docs.amplify.aws/lib/auth/social/q/platform/js/#configure-auth-category
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    // Assuming you have two redirect URIs, and the first is for localhost and second is for production
    const [localRedirectSignIn, productionRedirectSignIn] =
      awsConfig.oauth.redirectSignIn.split(',');

    const [localRedirectSignOut, productionRedirectSignOut] =
      awsConfig.oauth.redirectSignOut.split(',');

    const updatedAwsConfig = {
      ...awsConfig,
      oauth: {
        ...awsConfig.oauth,
        redirectSignIn: isLocalhost
          ? localRedirectSignIn
          : productionRedirectSignIn,
        redirectSignOut: isLocalhost
          ? localRedirectSignOut
          : productionRedirectSignOut,
      },
    };
    Amplify.configure({ ...updatedAwsConfig, ssr: true });
    // Amplify.configure({ ...updatedAwsConfig });
  }, []);

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};

export default AuthProvider;
