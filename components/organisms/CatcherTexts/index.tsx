import { H1, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';

type Props = {
  heading: React.ReactNode;
  description?: React.ReactNode;
  contents?: React.ReactNode;
  className?: string;
};

export const CatcherTexts: React.FC<Props> = ({
  heading,
  description,
  contents,
  className,
}) => {
  return (
    <Container className={className}>
      <div className="m-auto flex items-center justify-center text-center">
        <div className="my-12 max-w-xl">
          <H1 className="mb-8">{heading}</H1>
          {description && (
            <Paragraph className="leading-8">{description}</Paragraph>
          )}
          {contents && contents}
        </div>
      </div>
    </Container>
  );
};
