import Image, { StaticImageData } from 'next/image';
import { H2, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

type Props = {
  title: string;
  description: string;
  leadingIcon?: React.ReactNode;
  image?: StaticImageData | string;
  buttonText?: string;
  onClickStart?: () => void;
  isImageRight?: boolean;
};

export const CTA: React.FC<Props> = ({
  title,
  description,
  image,
  buttonText,
  onClickStart,
  isImageRight = false,
  leadingIcon,
}) => {
  return (
    <Container>
      {!isImageRight && image && (
        <div className="my-12 mx-auto flex w-full flex-col-reverse sm:flex-row">
          <div className="flex items-center justify-center sm:w-6/12">
            <Image src={image} alt="" className="rounded-lg" />
          </div>
          <div className="m-auto flex w-full flex-col items-start px-6 py-3 text-left sm:w-6/12">
            {leadingIcon && leadingIcon}
            <H2
              className="mb-4"
              id={title.toLocaleLowerCase().split(' ').join('')}
            >
              {title}
            </H2>
            <Paragraph className="mb-2">{description}</Paragraph>
            {onClickStart && buttonText && (
              <Button className="mt-4" onClick={onClickStart}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      )}

      {isImageRight && image && (
        <div className="my-6 mx-auto flex w-full flex-col sm:flex-row">
          <div className="m-auto flex w-full flex-col items-start px-6 py-3 text-left sm:w-6/12">
            {leadingIcon && leadingIcon}
            <H2
              className="mb-4"
              id={title.toLocaleLowerCase().split(' ').join('')}
            >
              {title}
            </H2>
            <Paragraph className="mb-2">{description}</Paragraph>
            {onClickStart && buttonText && (
              <Button className="mt-4" onClick={onClickStart}>
                {buttonText}
              </Button>
            )}
          </div>
          <div className="flex items-center justify-center sm:w-6/12">
            <Image src={image} alt="" className="rounded-lg" />
          </div>
        </div>
      )}
    </Container>
  );
};
