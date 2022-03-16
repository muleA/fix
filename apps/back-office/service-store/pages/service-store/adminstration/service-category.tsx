import React from 'react';
import dynamic from 'next/dynamic';
const ServiceCategoyList = dynamic(
  () => import('../../../features/adminstration/pages/category')
);
export default function Home() {
  return <ServiceCategoyList />;
}
