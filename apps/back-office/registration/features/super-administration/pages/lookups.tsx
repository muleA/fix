import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import LookupsList from '../../lookups/components/lookups-list';


const SuperAdministrationLookupsPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                    <LookupsList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationLookupsPage;