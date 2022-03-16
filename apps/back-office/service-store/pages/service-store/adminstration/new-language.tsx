import React from 'react';
import dynamic from 'next/dynamic';
const NewServiceSupportedLanguage = dynamic(
  () => import('../../../features/adminstration/pages/new-language')
);
export default function Home() {
  return <NewServiceSupportedLanguage />;
}
