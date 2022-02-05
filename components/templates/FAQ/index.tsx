import { H1, H5, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Card } from '../../atoms/Card';
import { Accordion, Props as AccordionProps } from '../../molecules/Accordion';

type Props = {
  title: string;
  description: string;
  qas: AccordionProps[];
};

export const FAQ: React.FC<Props> = ({ title, description, qas }) => {
  return (
    <Container>
      <div className="relative mx-auto w-full py-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <H1>{title}</H1>
            <H5 className="my-2">{description}</H5>
          </div>
          <div className="md:w-2/3">
            {qas.map((qa, idx) => {
              return (
                <Accordion
                  key={idx}
                  className="mb-2"
                  question={qa.question}
                  answer={qa.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};
