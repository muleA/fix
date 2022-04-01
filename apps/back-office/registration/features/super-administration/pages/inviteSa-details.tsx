import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import InviteSaDetails from '../../inviteSa/components/inviteSa-details';


const SuperAdministrationInviteSaDetailsPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <div></div>
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <InviteSaDetails/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationInviteSaDetailsPage;