import Header from "../components/header";
import ActivePersonnels from "../components/activepersonels";
import InActivePersonnels from "../components/inactivepersonels";
import Units from "../components/units";
import Groups from "../components/groups";
const HomePage = () => {

    return (
        <div className="tw-w-full tw-min-h-screen">
            <Header />
            <div className="md:tw-flex">
                <ActivePersonnels />
                <InActivePersonnels />
                <Units/>                
            </div>
            <Groups/>

        </div>

    );

}

export default HomePage;