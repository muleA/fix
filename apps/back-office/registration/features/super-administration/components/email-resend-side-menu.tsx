import { Card } from '@mantine/core';



type LookupsSideMenuProps={
    emailType: "Email confirmation" | "Password reset" | "Others" | "";
    selectEmailType: (key:string)=>void;
};

const EmailResendSideMenu = (props:LookupsSideMenuProps) => {

    const emailTypes = ["Email confirmation","Password reset","Others"];

    return (
        <Card className='tw-w-3/12 tw-min-h-[400px]' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-4'>
                <h2 className='tw-text-lg'>
                    Menu
                </h2>
            </Card.Section>

            <Card.Section>
                <ul className='tw-border-r'>
                    {emailTypes.length > 0 &&
                        emailTypes.map((item) => (
                            <li key={item} onClick={()=>props.selectEmailType(item)} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.emailType==item?"tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]":""}`}>
                                <span className='tw-text-base'>
                                    {item}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </Card.Section>
        </Card >

    );

}

export default EmailResendSideMenu;