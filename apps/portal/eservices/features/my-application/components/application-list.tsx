import { IconCircleCheck, IconClock, IconInfoCircle } from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
interface Props{
    status:string ;
}
function ApplicationList({status= 'Active' || 'Complete' || 'Action'}:Props) {
    const router = useRouter();
  return (
    <div>
      <div className="tw-flex mb-3 tw-border tw-h-14">
        <div className='tw-w-10 tw-h-10 tw-m-1'>
            {status==='Active' && <div className='tw-bg-[#337AB7] tw-text-white tw-w-10 tw-h-10  tw-flex tw-justify-center tw-items-center'>
                <div><IconClock  /></div></div>}
            {status==='Complete' && <div className='tw-bg-[#22C55E] tw-text-white tw-w-10 tw-h-10  tw-flex tw-justify-center tw-items-center'>
                <div><IconInfoCircle /></div></div>}
            {status==='Action' && <div className='tw-bg-[#FACC15] tw-text-white tw-w-10 tw-h-10  tw-flex tw-justify-center tw-items-center'>
                <div><IconCircleCheck/></div></div>}
        </div>
        <div className="tw-self-center tw-lining-nums">
            <div className='tw-font-serif'><strong>3 {status}</strong> {status === 'Action' && <strong>needed application</strong>}</div>
            <div className='tw-font-light tw-text-slate-700 dark:tw-text-slate-700'>10 Total Application</div>
        </div>

      </div>
      <div>
      <ListGroup className='tw-border-1'>
        <ListGroup.Item className='tw-h-10 tw-cursor-pointer hover:tw-bg-slate-100' onClick={()=>router.push('/my-application/1')}>Cras justo odio</ListGroup.Item>
        <ListGroup.Item className='tw-h-10 tw-cursor-pointer hover:tw-bg-slate-100'>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className='tw-h-10 tw-cursor-pointer hover:tw-bg-slate-100'>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className='tw-h-10 tw-cursor-pointer hover:tw-bg-slate-100'>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item className='tw-h-10 tw-cursor-pointer hover:tw-bg-slate-100'>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
    </div>
  );
}

export default ApplicationList;
