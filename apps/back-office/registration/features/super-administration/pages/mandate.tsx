import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import MandatesList from '../../mandate/components/mandates-list';


const SuperAdministrationMandatePage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className="tw-ml-4 tw-grow">
                    <MandatesList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationMandatePage;