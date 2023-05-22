'use client';
import {
  Authenticator,
  Theme,
  ThemeProvider,
  useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../amplify_styles.css';

//https://codesandbox.io/s/match-your-brand-vdwk0?file=/src/App.js
import { HeaderUI } from './HeaderUI';

export default function Auth({ children }: { children: React.ReactNode }) {
  const { tokens } = useTheme();
  console.log(tokens);

  const theme: Theme = {
    name: 'Auth Example Theme',

    tokens: {
      components: {
        flex: {
          // gap: tokens.space.small,
        },
        authenticator: {
          form: {
            // padding: tokens.space.xxl,
          },
          router: {
            borderWidth: '0px',
            boxShadow: tokens.shadows.medium,

            // boxShadow: tokens.shadows.med,
          },
        },
        button: {
          // fontWeight: tokens.fontWeights.medium,
          fontSize: tokens.fontSizes.small,
        },
        tabs: {
          item: {
            fontWeight: tokens.fontWeights.normal,
            borderWidth: tokens.borderWidths.small,
            fontSize: tokens.fontSizes.small,
          },
        },
        fieldcontrol: {
          // lineHeight: tokens.lineHeights.small,
          // fontSize: tokens.fontSizes.small,
        },
        field: {
          fontSize: tokens.fontSizes.small,
        },
      },
      fonts: {
        default: {
          variable: { value: 'Roboto, sans-serif' },
          static: { value: 'Roboto, sans-serif' },
        },
      },
      colors: {
        background: {
          // primary: {
          //   value: tokens.colors.neutral['90'].value,
          // },
          // secondary: {
          //   value: tokens.colors.neutral['100'].value,
          // },
        },
        // font: {
        //   interactive: {
        //     value: tokens.colors.white.value,
        //   },
        // },
        brand: {
          primary: {
            '10': tokens.colors.red['10'],
            '20': tokens.colors.red['20'],
            '40': tokens.colors.red['40'],
            '60': tokens.colors.red['60'],
            '80': tokens.colors.red['60'],
            '90': tokens.colors.red['80'],
            '100': tokens.colors.red['100'],
          },
        },
      },
      // components: {
      //   tabs: {
      //     item: {
      //       _focus: {
      //         color: {
      //           value: tokens.colors.white.value,
      //         },
      //       },
      //       // _hover: {
      //       //   color: {
      //       //     value: tokens.colors.yellow['80'].value,
      //       //   },
      //       // },
      //       _active: {
      //         color: {
      //           value: tokens.colors.white.value,
      //         },
      //       },
      //     },
      //   },
      // },
    },
  };

  const { authStatus, user, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);
  console.log(user);

  return (
    <>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? (
        <ThemeProvider theme={theme}>
          <Authenticator components={{ Header: HeaderUI }} />
        </ThemeProvider>
      ) : (
        children
      )}
    </>
  );
}
