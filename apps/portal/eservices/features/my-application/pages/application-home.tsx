import React from 'react'
import ApplicationList from '../components/application-list'


function ApplicationHome() {

    return (
        <div className='tw-h-screen tw-mt-10 tw-mb-3 tw-grid tw-gap-3   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-3'>
           <div><ApplicationList status='Active'/></div>
           <div><ApplicationList status='Action'/> </div>
           <div><ApplicationList status='Complete'/></div>
        </div>
    )
}

export default ApplicationHome
