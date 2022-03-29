import React from 'react';
import dynamic from 'next/dynamic';
const ServiceCategoyList = dynamic(
  () => import('../../../features/service-category/pages/category-list')
);
export default function Home() {
  return <ServiceCategoyList />;
}
