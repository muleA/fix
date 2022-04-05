
import React from 'react';
import Container from '../../shared/components/container/container';
import { getSession, useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode'
import {Image} from '@mantine/core'
import Empty from '../../shared/components/empty-state/empty';

function Index(props) {
  return (
    <Container>
        <Empty/>
    </Container>
  );
}

export default Index;
