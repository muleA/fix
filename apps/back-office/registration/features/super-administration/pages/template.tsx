import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import TemplateList from '../../template/components/template-list';


const SuperAdministrationTemplatePage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                    <TemplateList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationTemplatePage;