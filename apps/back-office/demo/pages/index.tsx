import tw, { styled } from 'twin.macro';
import { useRouter } from 'next/router';

const Container = styled.div(() => [
  tw`flex flex-col items-center justify-center h-full`,
]);
const Button = styled.button(() => [
  tw`bg-green-500 text-white font-bold py-2 px-4 rounded border-none`,
]);

export function Index() {
  const router = useRouter();

  const onNavigate = () => {
    router.push(`/user/1`);
  };
  return (
    <Container>
      <Button onClick={onNavigate}>GO TO USER FORM</Button>
    </Container>
  );
}

export default Index;
