import {IconList } from '@tabler/icons';
import  DashboardStatCard from './dashboard-stat-card'
const PublicServices = () => {
  const data = ['Education and Learning', 'Health and Wellness related', 'Electric city and water related', 
  'Money and Tax related', 'citzenship,passport or visa related', 'Birth ,death and marriage related',
  'pension and benefit related','transport and infrastructure related','youth,culture or sport related','agricultural,rurla and environment related'];

  return (
    <>
     <DashboardStatCard data={data} Icon={IconList} count={29} countHeading={'Services'} 
     headingLink={'/service-store/service/public-service'} 
     subHeading={'Public Services'} tableHeading={'Name Of Public Services'} 
     tableLink={`/service-store/service/detail/${data[1]}`} />
    </>

  );
};

export default PublicServices;
