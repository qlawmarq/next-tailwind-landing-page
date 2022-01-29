import { Container } from '../../atoms/Container';
import { PriceCard } from '../../molecules/PriceCard';

export const Prices = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6 sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <PriceCard
            title="Free"
            description="Perfect for using in a personal website or a client project."
            price="Free"
            features={['One User', 'One Project']}
          />
          <PriceCard
            title="Basic"
            description="Perfect for using in a business website or a client project."
            price="$6"
            features={['Twelve User', 'Twelve Project', 'Online Support']}
          />
          <PriceCard
            title="Pro"
            description="Perfect for using in a professional website or a large-scale project."
            price="$24"
            features={[
              'Unlimited User',
              'Unlimited Project',
              'Unlimited Access',
              'Online & Offline Support',
            ]}
          />
        </div>
      </div>
    </Container>
  );
};
