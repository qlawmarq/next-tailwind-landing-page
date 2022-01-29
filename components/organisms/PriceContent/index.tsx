import { Container } from '../../atoms/Container';
import { PriceCard } from '../../molecules/PriceCard';

export const PriceContent = () => {
  return (
    <Container>
        <div className="relative w-full mx-auto flex flex-col py-6 sm:flex-row">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
          <PriceCard />
          <PriceCard />
          <PriceCard />
      </div>
      </div>
    </Container>
  );
};
