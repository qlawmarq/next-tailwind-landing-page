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
          <div className="relative ml-auto mt-8 mb-16 flex flex-col items-start sm:mt-0 sm:mb-0 sm:w-5/12 sm:items-end sm:text-right xl:w-4/12 xl:pt-20">
            <H1 className="mb-4">{title}</H1>
            <H5 className="mb-4 sm:mb-12">{description}</H5>
            <Button onClick={onClickStart}>Start</Button>
          </div>
        </div>
      )}

      {isImageRight && (
        <div className="relative mx-auto flex w-full flex-col-reverse  sm:flex-row">
          <div className="relative mr-auto mt-8 mb-16 flex flex-col items-start sm:mt-0 sm:mb-0 sm:w-5/12 sm:items-start sm:text-left xl:w-4/12 xl:pt-20">
            <H1 className="mb-4">{title}</H1>
            <H5 className="mb-4 sm:mb-12">{description}</H5>
            <Button onClick={onClickStart}>Start</Button>
          </div>
          <div className="relative sm:w-6/12">
            <Image className="" src={image} alt="" />
          </div>
        </div>
      )}
    </Container>
  );
};
