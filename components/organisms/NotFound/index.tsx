import Girl from '../../../public/images/Girl.png';
import Image from 'next/image';
import { H1, H3, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';
import { useRouter } from 'next/router';

export const NotFound = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center ">
        <div className="w-full p-4 text-center md:w-5/12">
          <Image
            className=""
            src={Girl}
            alt="Not Found"
            priority
            loading="eager"
          />
        </div>
        <div className="w-full p-4 text-center md:w-7/12 md:text-left">
          <H1 className="mb-3">404</H1>
          <H3 className="mb-6">Oops. This page has gone missing.</H3>
          <Paragraph className="mb-12">
            You may have mistyped the address or the page may have moved.
          </Paragraph>
          <Button onClick={() => router.push('/')}>Go Home</Button>
        </div>
      </div>
    </Container>
  );
};
