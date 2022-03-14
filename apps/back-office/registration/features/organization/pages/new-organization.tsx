import OrganizationsSideTable from "../components/organizations-side-table";
import OrganizationOptionHeader from "../components/organization-option-header";
import NewOrganizationForm from "../components/new-organization-form";
import ActivityAudit from "../components/activity-audit";
import Note from "../components/note";
import Help from "../components/help";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../store/slice/organization.slice';


const NewOrganizationPage = () => {

    const dispatch = useAppDispatch();
    const screenSize = useAppSelector(selectIsFullScreen);
    const sideView = useAppSelector(selectSideView);

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                {!screenSize &&
                    <OrganizationsSideTable />
                }
                <div className={`${screenSize ? "tw-w-full" : "tw-w-9/12"} tw-pl-4`}>
                    <OrganizationOptionHeader />

                    <div className="tw-flex tw-items-start tw-mt-4">
                        <NewOrganizationForm isSideView={sideView == '' ? false : true} />
                        {sideView == 'activity-audit' &&
                            <ActivityAudit />
                        }
                        {sideView == 'note' &&
                            <Note />
                        }
                        {sideView == 'help' &&
                            <Help />
                        }
                    </div>

                </div>
            </div>


        </div>

    );

}

export default NewOrganizationPage;