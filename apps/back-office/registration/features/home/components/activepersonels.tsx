import Link from "next/link";
import IconOfficer from "../../../shared/components/icons/IconOfficer";
import {IconChevronRight} from '@tabler/icons';
import Pagination from "../../../shared/components/pagination";

const ActivePersonnels = () => {

    const data = [
        "Abcd",
        "Nabil",
        "User",
        "Real nigga",
        "Haha",
        "Homie"
    ]

    return (
        <div className="tw-w-1/4 tw-mt-4 tw-ml-4">
            <div className="tw-bg-white tw-w-full tw-flex tw-p-5">
                <div className="tw-w-10 tw-h-10 tw-mr-2">
                    <IconOfficer />
                </div>
                <div>
                    <h2 className="tw-text-xl">29 Personnels</h2>
                    <Link href="/registration/organization-personnel?isActive=true"><a className="tw-text-xs">Active personnels</a></Link>
                </div>
            </div>
            <div className="tw-bg-white tw-mt-4 tw-p-3 tw-w-full">
                <div className="table-responsive">
                    <table className="table table-vcenter">
                        <thead>
                            <tr>
                                <th>Name of active personnels</th>
                                <th className="w-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((name) => (
                                    <tr>
                                        <td >{name}</td>
                                        <td>
                                            <Link href="/registration/organization-personnel/detail/12345"><a className="tw-block bg-primary tw-text-white hover:tw-text-white hover:opacity-50 tw-p-1 tw-rounded"><IconChevronRight /></a></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                    
                        </tbody>
                    </table>
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
}

export default ActivePersonnels;