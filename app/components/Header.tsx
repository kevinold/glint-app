'use client';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const { authStatus, user, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);

  return (
    <nav className=" bg-slate-300 flex justify-between p-3 items-center">
      <Link href="/">Glint</Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/demo">Demo</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>{user && <button onClick={signOut}>Sign out</button>}</li>
      </ul>
    </nav>
  );
}