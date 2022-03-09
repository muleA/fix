import Image from 'next/image';
import peragologo from '../public/logo/perago2.png'
import MainNavbar from "./main-header";
import {IconBuildingBank,IconSearch,IconBuilding,} from '@tabler/icons';

const MainLayout = ({ children }) => {

    return (
        <div className='tw-bg-gray-100'>
            <MainNavbar/>
            <main className='tw-pb-14'>
                <div>
                    {children}
                </div>
            </main>
            <footer className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-w-full tw-p-2 tw-fixed tw-bottom-0 tw-border-b tw-border-b-gray-200 tw-bg-white">
                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconBuildingBank /></i>
                    <span>Perago Information System</span>
                </div>

                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconBuilding /></i>
                    <span>Perago Information System</span>
                </div>

                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconSearch /></i>
                    <span>Service store Adminstrator</span>
                </div>

                <div className="tw-text-xs tw-flex tw-items-center tw-justify-center">
                    <span>
                        © Copyright 2022 FPPA Powered By: &nbsp;
                    </span>
                    <Image src={peragologo} alt="perago logo" width={70} height={19} />
                </div>

            </footer>
        </div>


    );
}

export default MainLayout;