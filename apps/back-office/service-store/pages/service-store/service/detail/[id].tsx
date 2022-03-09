import { useRouter } from 'next/router';
import NewServicePage from '../../../../features/service/pages/new-service'
const ServiceDetails = () => {
  //library variables
  const router = useRouter();
  const { id } = router.query;
return (<>

<NewServicePage/>
  
</>)
 
}

export default ServiceDetails;
