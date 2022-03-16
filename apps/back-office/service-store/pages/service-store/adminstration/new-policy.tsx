import React from 'react';
import dynamic from 'next/dynamic';
const NewServicePolicy = dynamic(
  () => import('../../../features/adminstration/pages/new-policy')
);
export default function Home() {
  return <NewServicePolicy />;
}
