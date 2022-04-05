import { Card, Input, Menu, Table, Checkbox } from '@mantine/core';
import { IconSearch, IconInbox, IconDotsVertical, IconMail, IconStar, IconMailOpened, IconTrash } from '@tabler/icons';
import Header from "../components/header";
const NotificationPage = () => {

    const notifications = []; /* [
        {id:1,from:"MINT"},
        {id:2,from:"MOE"},
        {id:3,from:"MOLSA"},
        {id:4,from:"MOFA"},
        {id:5,from:"MOH"},
    ]; */
    return (
        <div className="tw-w-full tw-min-h-screen">
            <Header />
            <Card className='tw-m-4' padding="xl">
                <Card.Section className='tw-border-b tw-px-4'>
                    <h3 className='tw-text-lg  tw-font-medium tw-mt-2 tw-mb-4'>
                        Notification
                    </h3>
                </Card.Section>


                <Card.Section className='tw-flex tw-p-4 tw-justify-end'>
                    <Input className="tw-w-1/3 tw-mr-2" size='xs' icon={<IconSearch />} placeholder="input search text" />
                    <Menu control={<div className='tw-border tw-h-full tw-p-1'><IconDotsVertical /></div>}>
                        <Menu.Item
                            icon={<IconInbox />}
                            onClick={() => console.log('Hello')}
                        >
                            All
                        </Menu.Item>
                        <Menu.Item
                            icon={<IconMail />}
                            onClick={() => console.log('Hello')}
                        >
                            Unread
                        </Menu.Item>
                        <Menu.Item
                            icon={<IconMailOpened />}
                            onClick={() => console.log('Hello')}
                        >
                            Read
                        </Menu.Item>
                        <Menu.Item
                            icon={<IconTrash />}
                            onClick={() => console.log('Hello')}
                        >
                            Trash
                        </Menu.Item>
                        <Menu.Item
                            icon={<IconStar />}
                            onClick={() => console.log('Hello')}
                        >
                            Favourites
                        </Menu.Item>
                    </Menu>
                </Card.Section>

                <Card.Section className='tw-px-4'>

                    <Table className='tw-mb-4'>
                        <thead>
                            <tr className='tw-bg-gray-200'>
                                <th><Checkbox color="indigo" /></th>
                                <th>From</th>
                            </tr>
                        </thead>
                        <tbody>

                            {notifications.length == 0 &&
                                <tr className='tw-h-[200px] tw-border-b hover:tw-bg-transparent'>
                                    <td className='tw-text-center' colSpan={2}>
                                        <span>
                                            <IconInbox className='tw-inline-block' color='rgb(156 163 175)' size={32} />
                                            <p>
                                                No data
                                            </p>
                                        </span>
                                    </td>
                                </tr>
                            }

                            {notifications.length > 0 &&
                                notifications.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.from}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Section>
            </Card>
        </div>

    );

}

export default NotificationPage;