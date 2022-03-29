import Application from '../../../features/my-application/pages/application'
import React from 'react'
import Container from '../../../shared/components/container/container'




function ApplicationPage() {
        return (
        <Container>
            <Application/>
        </Container>
    )
}

export default ApplicationPage
ApplicationPage.auth = true