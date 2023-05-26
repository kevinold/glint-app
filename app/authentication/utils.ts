import { withSSRContext } from 'aws-amplify';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function checkAuthAndRedirect(path: string) {
  const req = {
    headers: {
      cookie: headers().get('cookie'),
    },
  };

  console.log('req', req)
  
  const SSR = withSSRContext({ req })
  
  try {
    await SSR.Auth.currentAuthenticatedUser();
  } catch (e) {
    redirect(path);
  }
}
