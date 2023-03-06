import { Container } from '../../atoms/Container';
import { PriceCard, Props as PriceCardProps } from '../../molecules/PriceCard';

type Props = {
  priceProps: PriceCardProps[];
};

export const Pricing: React.FC<Props> = ({ priceProps }) => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col  sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {priceProps.map((priceProp, idx) => {
            return (
              <PriceCard
                key={idx}
                title={priceProp.title}
                description={priceProp.description}
                price={priceProp.price}
                features={priceProp.features}
                onClickButton={priceProp.onClickButton}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
