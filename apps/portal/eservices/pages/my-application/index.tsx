import React from 'react'
import ApplicationHome from '../../features/my-application/pages/application-home';
import Container from '../../shared/components/container/container';

export default function Index(props) {
    return (
        <Container>
            <ApplicationHome/>
        </Container>
    )
}

Index.auth  = true;
// Index.auth = {
//     role: 'admin',
//     loading: <Spinner animation='grow'/>,
//     unauthorized : '/login'
// }
