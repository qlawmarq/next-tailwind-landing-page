import { Container } from '../../atoms/Container';
import { CarouselContainer } from '../../molecules/Carousel';
import { H1, H2, H3, Paragraph } from '../../atoms/Typography';

type Props = {
  items: React.ReactNode[];
};

export const Carousel: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6">
        <CarouselContainer items={items} />
      </div>
    </Container>
  );
};
