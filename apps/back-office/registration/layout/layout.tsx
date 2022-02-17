

const Layout = ({children}) => {

    return (
        <div className="h-screen bg-red-400">
            <p className="text-3xl">Welcome bro</p>
            <main>
                {children}
            </main>
        </div>

    );
}

export default Layout;