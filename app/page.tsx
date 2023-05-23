import React from 'react';
import Header from './components/Header';
import Redirect from './Redirect';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return data;
}

//https://adhithiravi.medium.com/what-are-server-components-and-client-components-in-react-18-and-next-js-13-6f869c0c66b0

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Header />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
