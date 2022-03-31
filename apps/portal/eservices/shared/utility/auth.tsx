import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap';
import LoginPage from '../../features/login/pages/login';

function Auth({children}) {
    const [lgShow, setLgShow] = useState(true);
    const router = useRouter();
if(typeof window !== 'undefined'){
    if(localStorage.user_name){
        return children
    }
    else
   { router.push('/login') 
    return <></>}
}
else return <></>
    
}

export default Auth
