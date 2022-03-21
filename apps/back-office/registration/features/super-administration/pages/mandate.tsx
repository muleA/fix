import { Accordion, Card } from '@mantine/core';
import { IconInbox } from '@tabler/icons';
import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import MandatesList from '../../mandate/components/mandates-list';


const SuperAdministrationMandatePage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <MandatesList className="tw-w-10/12 tw-ml-4" />
            </div>


        </div>

    );

}

export default SuperAdministrationMandatePage;