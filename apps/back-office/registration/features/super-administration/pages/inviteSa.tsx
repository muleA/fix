import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import InviteSaList from '../../inviteSa/components/inviteSa-list';


const SuperAdministrationInviteSaPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className="tw-ml-4 tw-grow">
                    <InviteSaList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationInviteSaPage;