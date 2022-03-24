import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import ArchiveDetails from '../../archive/components/archive-details';


const SuperAdministrationArchiveDetailsPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <ArchiveDetails/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationArchiveDetailsPage;