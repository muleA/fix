import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import ArchiveList from '../../archive/components/archive-list';


const SuperAdministrationArchivePage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className="tw-ml-4 tw-grow">
                    <ArchiveList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationArchivePage;