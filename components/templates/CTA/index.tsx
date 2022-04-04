import analyzeData from '../../../public/images/analyze_data.png';
import Image from 'next/image';
import { H1, H5 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

type Props = {
  title: string;
  description: string;
  image?: StaticImageData | string;
  onClickStart: () => void;
  isImageRight?: boolean;
};

export const CTA: React.FC<Props> = ({
  title,
  description,
  image = analyzeData,
  onClickStart,
  isImageRight = false,
}) => {
  return (
    <Container>
      {!isImageRight && (
        <div className="relative mx-auto flex w-full flex-col  sm:flex-row">
          <div className="relative sm:w-6/12">
            <Image className="" src={image} alt="" />
          </div>
          <div className="relative ml-auto mt-8 mb-16 flex flex-col items-start text-left sm:mt-0 sm:mb-0 sm:w-6/12 xl:w-8/12 xl:pt-20">
            <H1 className="mb-4">{title}</H1>
            <H5 className="mb-2">{description}</H5>
            <Button className="mt-4" onClick={onClickStart}>
              Start
            </Button>
          </div>
        </div>
      )}

      {isImageRight && (
        <div className="relative mx-auto flex w-full flex-col-reverse  sm:flex-row">
          <div className="relative mr-auto mt-8 mb-16 flex flex-col items-start text-left sm:mt-0 sm:mb-0 sm:w-6/12 xl:w-8/12 xl:pt-20">
            <H1 className="mb-4">{title}</H1>
            <H5 className="mb-2">{description}</H5>
            <Button className="mt-4" onClick={onClickStart}>
              Start
            </Button>
          </div>
          <div className="relative sm:w-6/12">
            <Image className="" src={image} alt="" />
          </div>
        </div>
      )}
    </Container>
  );
};
