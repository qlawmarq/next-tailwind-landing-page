import analyzeData from '../../../public/images/analyze_data.png';
import Image from 'next/image';
import { H1, H5 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

export const CTA = () => {
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col py-6 sm:flex-row">
        <div className="relative sm:w-6/12">
          <Image className="" src={analyzeData} alt="Analyze Data" />
        </div>
        <div className="relative ml-auto mt-8 mb-16 flex flex-col items-start sm:mt-0 sm:mb-0 sm:w-5/12 sm:items-end sm:text-right xl:w-4/12 xl:pt-20">
          <H1 className="mb-4">Business Landing Page</H1>
          <H5 className="mb-4 sm:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing adipiselit.
            Pellentesque suscipit tellus vitae purus dignissim, nec tincidunt
            neque condimentum. Nam nec ligula pretium mi interdum hendrerit in
            sit.
          </H5>
          <Button>Start</Button>
        </div>
      </div>
    </Container>
  );
};
