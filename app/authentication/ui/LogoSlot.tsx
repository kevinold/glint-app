'use client';

//https://codesandbox.io/s/match-your-brand-vdwk0?file=/src/Header.js:0-300

import { Image, useTheme } from '@aws-amplify/ui-react';

export function LogoSlot() {
  const { tokens } = useTheme();

  return (
    <div className=" p-4 flex justify-center">
      <Image
        alt="logo"
        height="75%"
        width="75%"
        src="http://drive.google.com/uc?export=view&id=1zp7bDvHerxgHsjjU6rL9265u48yhKxmC"
        padding={tokens.space.medium}
      />
      {/* <p>Make your data shine.</p> */}
    </div>
  );
}
