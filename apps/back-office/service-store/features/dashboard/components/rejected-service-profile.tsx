import {  IconBan } from '@tabler/icons';
import DashboardStatCard from './dashboard-stat-card';

const RejectedServiceProfile = () => {
    const data = ['Education and Learning', 'Health and Wellness related', 'Electric city and water related', 
    'Money and Tax related', 'citzenship,passport or visa related', 'Birth ,death and marriage related',
    'pension and benefit related','transport and infrastructure related','youth,culture or sport related','agricultural,rurla and environment related'];
  
    return (
      <>
       <DashboardStatCard data={data} Icon={IconBan} count={14} 
       countHeading={'Services'} 
       headingLink={'/service-store/service/public-service'} 
       subHeading={'Rejected Service Profile'} tableHeading={'Name Of Rejected Service Profile'} 
       tableLink={`/service-store/service/detail/${data[1]}`} />
      </>
    )
}

export default RejectedServiceProfile;