import { Container } from '../../atoms/Container';
import { Carousel } from '../../molecules/Carousel';

export const Features = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6">
        <Carousel />
      </div>
    </Container>
  );
};
