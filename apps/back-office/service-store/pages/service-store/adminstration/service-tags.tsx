import React from 'react';
import dynamic from 'next/dynamic';
const ServiceTagsList = dynamic(
  () => import('../../../features/adminstration/pages/tags')
);
export default function Home() {
  return <ServiceTagsList />;
}
