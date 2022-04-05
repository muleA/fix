import { IconList } from '@tabler/icons';
import DashboardStatCard from './dashboard-stat-card';
<<<<<<< HEAD
const PublicServices = () => {
=======
const Publicervices = () => {
>>>>>>>
  
  const data = [
    'Education and Learning',
    'Health and Wellness related',
    'Electric city and water related',
    'Money and Tax related',
    'citzenship,passport or visa related',
    'Birth ,death and marriage related',
    'pension and benefit related',
    'transport and infrastructure related',
    'youth,culture or sport related',
    'agricultural,rurla and environment related',
  ];

  return (
    <>
      <DashboardStatCard
        data={data}
        Icon={IconList}
        count={10}
        countHeading={'Services'}
        headingLink={'/service-store/service/public-service'}
<<<<<<< HEAD
        subHeading={'Public Services'}
        tableHeading={'Name Of Public Services'}
=======
        subHeading={'Private Services'}
        tableHeading={'Name Of Private Services'}
>>>>>>> main
        tableLink={`/service-store/service/detail/${data[1]}`}
      />
    </>
  );
};

<<<<<<< HEAD
export default PublicServices;
=======
export default Publicervices;
>>>>>>> main
