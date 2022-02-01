import { Container } from '../../atoms/Container';
import { CarouselContainer } from '../../molecules/Carousel';
import { H1, H2, H3, Paragraph } from '../../atoms/Typography';

export const Features = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6">
        <CarouselContainer
          items={[
            <H1>All in one app</H1>,
            <H1>Safety and Secure</H1>,
            <H1>Help your Business</H1>,
          ]}
        />
      </div>
    </Container>
  );
};
