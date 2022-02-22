import Image from 'next/image';
import MainNavbar from "./components/main-header";
import IconBank from '../shared/components/icons/IconBank';
import IconApartment from '../shared/components/icons/IconApartment';
import IconSearch from '../shared/components/icons/IconSearch';

const MainLayout = ({ children }) => {

    return (
        <>
            <MainNavbar />
            <main>
                <div>
                    {children}
                </div>
            </main>
            <footer className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-w-full tw-p-2 tw-fixed tw-bottom-0 tw-border-b tw-border-b-gray-200 tw-bg-white">
                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconBank /></i>
                    <span>Perago Information System</span>
                </div>

                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconApartment /></i>
                    <span>Perago Information System</span>
                </div>

                <div className='tw-flex tw-items-center tw-justify-center'>
                    <i className="tw-mr-1"><IconSearch /></i>
                    <span>Organization Adminstrator</span>
                </div>

                <div className="tw-text-xs tw-flex tw-items-center tw-justify-center">
                    <span>
                        © Copyright 2022 FPPA Powered By: &nbsp;
                    </span>
                    <Image src="/images/Perago logo.png" alt="Perago" width={70} height={19} />
                </div>

            </footer>
        </>


    );
}

export default MainLayout;