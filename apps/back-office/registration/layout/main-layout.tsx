import MainNavbar from "./components/main-header";

const MainLayout = ({ children }) => {

    return (
        <>
            <MainNavbar/>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>


    );
}

export default MainLayout;