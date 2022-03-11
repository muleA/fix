import React from 'react'
import { Container, Spinner } from 'react-bootstrap';
import ApplicationHome from '../../features/my-application/pages/application-home';

export default function Index(props) {
    return (
        <div className='mt-3 container-fluid'>
            <ApplicationHome/>
        </div>
    )
}

Index.auth  = true;
// Index.auth = {
//     role: 'admin',
//     loading: <Spinner animation='grow'/>,
//     unauthorized : '/login'
// }
