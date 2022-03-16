import React from 'react';
import dynamic from 'next/dynamic';
const NewServiceCategory = dynamic(
  () => import('../../../features/adminstration/pages/new-category')
);
export default function Home() {
  return <NewServiceCategory />;
}
