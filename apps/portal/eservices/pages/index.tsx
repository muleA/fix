import styled from 'styled-components';

export function Index() {
  return (
    <Container>
      <Title>Hello world</Title>
    </Container>
  );
}

export default Index;

const Container = styled.div.attrs({
  className: `flex justify-center items-center h-screen container mx-auto`,
})``;

const Title = styled.h1.attrs({
  className: `p-4 text-2xl font-bold bg-green-500 flex `,
})`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;
