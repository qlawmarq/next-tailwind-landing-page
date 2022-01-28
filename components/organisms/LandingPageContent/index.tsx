import analyzeData from '../../../public/images/analyze_data.png';
import Image from 'next/image';
import { H1, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

export const LandingPageContent = () => {
  return (
    <Container>
      <div className="relative mx-auto flex flex-col sm:flex-row py-6">
        <div className="relative z-10 sm:w-6/12">
          <Image className="" src={analyzeData} alt="Analyze Data" />
        </div>
        <div className="relative z-10 ml-auto mt-8 mb-16 flex flex-col items-start sm:mt-0 sm:mb-0 sm:w-5/12 sm:items-end sm:text-right xl:w-4/12 xl:pt-20">
          <H1 className="mb-4">Business Landing Page</H1>
          <Paragraph className="mb-4 text-blue-900 sm:mb-12 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing adipiselit.
            Pellentesque suscipit tellus vitae purus dignissim, nec tincidunt
            neque condimentum. Nam nec ligula pretium mi interdum hendrerit in
            sit.
          </Paragraph>
          <Button>Start</Button>
        </div>
      </div>
    </Container>
  );
};
