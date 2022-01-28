import { Container } from '../../atoms/Container';
import { Card } from '../../atoms/Card';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Button } from '../../atoms/Button';
import { H2, H3 } from '../../atoms/Typography';

export const PriceCard = () => {
  return (

        <Card className="flex w-full flex-col space-y-6 ">
          <div className="flex flex-col space-y-2 border-b pb-6">
            <H2 className="text-2xl">
              Pro
            </H2>
            <p className="text-sm text-gray-400" x-text="plan.discretion">
              For businesses and other professionals.
            </p>
          </div>
          <div className="flex flex-row items-center">
            <H3 className="font-medium tracking-tight">12$</H3>
            <span className="ml-2 text-gray-400">/month</span>
          </div>
          <ul className="flex-1 space-y-4">
            <li className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-300" />
              <span className="ml-3 text-base font-medium" x-text="feature">
                Unlimited access
              </span>
            </li>
          </ul>
          <div className="flex flex-col pt-4">
            <Button className="w-full">Start</Button>
          </div>
        </Card>
  );
};
