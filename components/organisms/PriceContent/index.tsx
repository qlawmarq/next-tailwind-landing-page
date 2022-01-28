import { Container } from '../../atoms/Container';
import { Card } from '../../atoms/Card';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Button } from '../../atoms/Button';

export const PriceContent = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="flex w-full flex-col space-y-6 ">
          <div className="flex-shrink-0">
            <span className="text-4xl font-medium tracking-tight">Free</span>
            <span className="text-gray-400">/month</span>
          </div>
          <div className="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 className="text-2xl font-normal" x-text="plan.name">
              Free
            </h2>
            <p className="text-sm text-gray-400" x-text="plan.discretion">
              Free trial to try out the features.
            </p>
          </div>
          <ul className="flex-1 space-y-4">
            <li className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-300" />
              <span className="ml-3 text-base font-medium" x-text="feature">
                One project
              </span>
            </li>
          </ul>
          <div className="flex-shrink-0 pt-4">
            <Button className="w-full">Start</Button>
          </div>
        </Card>
        <Card className="flex w-full flex-col space-y-6 ">
          <div className="flex-shrink-0">
            <span className="text-4xl font-medium tracking-tight">6$</span>
            <span className="text-gray-400">/month</span>
          </div>
          <div className="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 className="text-2xl font-normal" x-text="plan.name">
              Basic
            </h2>
            <p className="text-sm text-gray-400" x-text="plan.discretion">
              All the basics for businesses that are just getting started.
            </p>
          </div>
          <ul className="flex-1 space-y-4">
            <li className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-300" />
              <span className="ml-3 text-base font-medium" x-text="feature">
                Twelve project
              </span>
            </li>
          </ul>
          <div className="flex-shrink-0 pt-4">
            <Button className="w-full">Start</Button>
          </div>
        </Card>
        <Card className="flex w-full flex-col space-y-6 ">
          <div className="flex-shrink-0">
            <span className="text-4xl font-medium tracking-tight">12$</span>
            <span className="text-gray-400">/month</span>
          </div>
          <div className="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 className="text-2xl font-normal" x-text="plan.name">
              Pro
            </h2>
            <p className="text-sm text-gray-400" x-text="plan.discretion">
              For businesses and other professionals.
            </p>
          </div>
          <ul className="flex-1 space-y-4">
            <li className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-300" />
              <span className="ml-3 text-base font-medium" x-text="feature">
                Unlimited access
              </span>
            </li>
          </ul>
          <div className="flex-shrink-0 pt-4">
            <Button className="w-full">Start</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
};
