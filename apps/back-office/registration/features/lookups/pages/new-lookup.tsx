import { useEffect, useState } from 'react';
import LookupsSideMenu from '../components/lookups-side-menu';
import NewLookup from '../components/new-lookup';

const NewLookupPage = () => {

    const [selectedLookupKey, setSelectedLookupKey] = useState("");

    useEffect(()=>{
        setSelectedLookupKey("Organization Type"); 
    },[]);

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <LookupsSideMenu lookupKey={selectedLookupKey} selectLookupKey={(key: string) => setSelectedLookupKey(key)} />
                <div className='tw-ml-4 tw-grow'>
                    <NewLookup />
                </div>

            </div>
        </div>

    );
}

export default NewLookupPage;