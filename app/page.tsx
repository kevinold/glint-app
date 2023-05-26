import { Amplify, withSSRContext } from 'aws-amplify';
import { headers } from 'next/headers';
import { listProjects } from './graphql/queries';
import awsConfig from './aws-exports';
import Header from './components/Header';
import { checkAuthAndRedirect } from './authentication/utils';

Amplify.configure({ ...awsConfig, ssr: true });
console.log('🕵️‍♀️', 'amplify', 'imported');

export default async function Page() {
  return (
    <div>
      <pre className="p-3 hellothere">Unprotected Homepage</pre>
    </div>
  );
}
