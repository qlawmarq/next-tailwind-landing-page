import { Container } from '../../atoms/Container';
import { PriceCard } from '../../organisms/PriceCard';

export const Prices = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6 sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>
      </div>
    </Container>
  );
};
