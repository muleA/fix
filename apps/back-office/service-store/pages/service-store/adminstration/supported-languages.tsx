import React from 'react';
import dynamic from 'next/dynamic';
const SupportedLanguageLists = dynamic(
  () => import('../../../features/adminstration/pages/supported-languages')
);
export default function Home() {
  return <SupportedLanguageLists />;
}
