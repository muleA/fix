import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import NewInviteSa from '../../inviteSa/components/new-inviteSa';


const SuperAdministrationNewInviteSaPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <div></div>
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <NewInviteSa/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationNewInviteSaPage;