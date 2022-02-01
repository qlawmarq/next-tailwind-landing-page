import { Container } from '../../atoms/Container';
import { CarouselContainer } from '../../molecules/Carousel';

export const Features = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6">
        <CarouselContainer items={['1', '2', 3]} />
      </div>
    </Container>
  );
};
