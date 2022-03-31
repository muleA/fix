import React from 'react';
import dynamic from 'next/dynamic';
const NewServiceTag = dynamic(
  () => import('../../../features/service-tag/pages/new-tag')
);
export default function Home() {
  return <NewServiceTag />;
}
