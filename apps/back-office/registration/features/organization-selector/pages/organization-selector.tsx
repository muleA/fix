import Image from 'next/image';
import {IconBuilding,IconChevronRight} from '@tabler/icons';

const OrganizationSelectorPage = () => {

    const organizations = ["Organization 123", "Zemen bank", "My guest organization 1", "Perago information system"];

    return (
        <div className='tw-bg-gray-200 tw-w-1/3 tw-rounded-sm tw-shadow-lg'>
            <div className='tw-flex tw-w-full tw-py-4 tw-px-4 tw-justify-between'>
                <span>Select organization</span>
                <button className='btn btn-pill btn-sm'>Logout</button>
            </div>
            <div>
                {
                    organizations.map((name: string) => (
                        <div className='tw-mx-px tw-py-4 tw-px-3 tw-flex tw-justify-between tw-bg-white tw-mb-px hover:tw-bg-gray-200  hover:tw-cursor-pointer'>
                            <div className='tw-flex'>
                                <span className='tw-bg-gray-200 tw-rounded-full'><IconBuilding /></span>
                                <span className='tw-pl-2'>{name}</span>
                            </div>

                            <span><IconChevronRight/></span>
                        </div>
                    ))
                }
            </div>
            <div className='tw-mt-3'>
                <div className="tw-text-xs tw-flex tw-items-center tw-justify-center tw-mb-5">
                    <span>
                        Powered By: &nbsp;
                    </span>
                    <Image src="/images/Perago logo.png" alt="Perago" width={70} height={19} />
                </div>
            </div>


        </div>

    );

}

export default OrganizationSelectorPage;