

const Layout = ({ children }) => {

    return (
        <>
            <main>
                <div className="tw-flex tw-w-full tw-min-h-screen tw-bg-gray-200 tw-justify-center tw-items-center">
                    {children}
                </div>
            </main>
        </>


    );
}

export default Layout;