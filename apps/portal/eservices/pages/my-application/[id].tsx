import React from 'react'
import ApplicationDetail from '../../features/my-application/pages/application-detail'
import Container from '../../shared/components/container/container';


function detail() {

    return (
        <Container>
            <ApplicationDetail/>
        </Container>
    )
}

export default detail;
detail.auth=true;