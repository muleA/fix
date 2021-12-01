import tw, { styled } from 'twin.macro';

const Container = styled.div(() => [
  tw`flex flex-col items-center justify-center h-full`,
]);
const Button = styled.button(() => [
  tw`bg-green-500 text-white font-bold py-2 px-4 rounded`,
]);

export function Index() {
  return (
    <Container>
      <Button>Hello Web</Button>
    </Container>
  );
}

export default Index;
