
import React from 'react';
import Container from '../../shared/components/container/container';
import { getSession, useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode'
import {Image} from '@mantine/core'
import Empty from '../../shared/components/empty-state/empty';

function Index(props) {
async function toke() {
  const dat:any = await getSession();
const token:any = jwt_decode(dat?.accessToken);
if(token?.role[0].key === 'registration')
 console.log('key',token?.role[0].key)
}
toke();
  return (
    <Container>
        <Empty/>
    </Container>
  );
}

export default Index;
