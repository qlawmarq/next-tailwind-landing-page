import { Container } from '../../atoms/Container';
import { CarouselContainer } from '../../molecules/Carousel';

type Props = {
  items: React.ReactNode[];
};

export const Carousel: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col">
        <CarouselContainer items={items} />
      </div>
    </Container>
  );
};
