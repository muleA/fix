import dynamic from 'next/dynamic';
const PolicyList = dynamic(
  () => import('../../../features/adminstration/pages/home')
);
export default function Home() {
  return <PolicyList/>;
}
