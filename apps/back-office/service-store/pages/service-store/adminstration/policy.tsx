import React from 'react';
import dynamic from 'next/dynamic';
const PolicyList = dynamic(
  () => import('../../../features/adminstration/pages/policy')
);
export default function Home() {
  return <PolicyList />;
}
