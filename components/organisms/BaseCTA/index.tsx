import { Container } from '../../atoms/Container';

type Props = {
  leftParts: React.ReactNode;
  rightParts: React.ReactNode;
  className?: string;
};

export const BaseCTA: React.FC<Props> = ({
  leftParts,
  rightParts,
  className,
}) => {
  return (
    <Container className={className}>
      <div className="mx-auto my-12 flex max-h-screen w-full flex-col sm:my-6 sm:flex-row">
        <div className="m-auto flex w-full items-start justify-center px-6 py-3 sm:w-6/12">
          {leftParts}
        </div>
        <div className="m-auto flex w-full items-start justify-center px-6 py-3 sm:w-6/12">
          {rightParts}
        </div>
      </div>
    </Container>
  );
};
