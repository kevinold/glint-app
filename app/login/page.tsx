'use client';
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsConfig from '../aws-exports';
Amplify.configure({ ...awsConfig, ssr: true });

export default async function LoginPage() {
    return (
        <div>
          TEST LOGIN
        <Authenticator />
        </div>
    );
  }