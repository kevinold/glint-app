'use client';

import { listProjects } from './graphql/queries';
import Header from './components/Header';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { createUser, updateUser } from './graphql/mutations';
import {
  CreateUserInput,
  CreateUserMutation,
  UpdateUserInput,
  UpdateUserMutation,
} from './API';
import { GraphQLQuery } from '@aws-amplify/api';

export default function Page() {
  const { user } = useAuthenticator((context) => [context.authStatus]);

  const userInfo: CreateUserInput = {
    id: user.attributes?.sub!,
    email: user.attributes?.email!,
    username: user.username!,
  };

  useEffect(() => {
    (async () => {
      try {
        //Creating user
        const createdUser = await API.graphql<GraphQLQuery<CreateUserMutation>>(
          {
            query: createUser,
            variables: { input: userInfo },
          }
        );
        // console.log('🕵️‍♀️', 'createdUser', createdUser);
      } catch (e) {
        //Updating user
        const updatedUser = await API.graphql<GraphQLQuery<UpdateUserMutation>>(
          {
            query: updateUser,
            variables: { input: userInfo },
          }
        );
        // console.log('🕵️‍♀️', 'updatedUser', updatedUser);
      }
    })();
  }, []);
  return (
    <div>
      <Header />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
