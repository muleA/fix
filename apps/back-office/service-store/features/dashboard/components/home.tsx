import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {

    const router = useRouter();
    const currentDate:Date = new Date();
    const formattedDate = `${currentDate.toLocaleString('en-us', { month: 'short' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    return (
        <div className="tw-flex tw-flex-wrap tw-items-center tw-text-gray-500 tw-justify-between tw-bg-white tw-pr-2">
            <ul className="tw-flex">
                <li><Link href="/service-store/home"><a className=
                {`tw-transition-[border] tw-duration-100 tw-block tw-p-4 tw-text-gray-500 
                hover:tw-text-gray-500 hover:tw-no-underline hover:tw-border-b-2 hover:tw-border-b-blue-900
                 ${router.pathname=="/service-store/home"?"tw-border-b-2 tw-border-b-blue-900":""}`}>Dashboard</a></Link></li>
               
            </ul>
            <span >
                Today is {formattedDate}
            </span>
        </div>
    );
}

export default Header;