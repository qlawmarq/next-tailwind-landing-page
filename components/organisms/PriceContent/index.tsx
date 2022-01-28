import { Container } from '../../atoms/Container';
import { PriceCard } from '../../molecules/PriceCard';

export const PriceContent = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
          <PriceCard />
          <PriceCard />
          <PriceCard />
      </div>
    </Container>
  );
};
