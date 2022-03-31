import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import EmailResendList from '..//components/email-resend-list';


const SuperAdministrationEmailResendPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                    <EmailResendList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationEmailResendPage;