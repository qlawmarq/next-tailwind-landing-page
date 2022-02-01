import { H1, H5, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Card } from '../../atoms/Card';
import { Accordion, Props as AccordionProps } from '../../molecules/Accordion';

type Props = {
  qas: AccordionProps[];
};

export const FAQ: React.FC<Props> = ({ qas }) => {
  return (
    <Container>
      <div className="relative mx-auto w-full py-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <H1>Frequently asked Questions</H1>
            <H5 className="my-2">Wondering how our service works ?</H5>
          </div>
          <div className="md:w-2/3">
            {qas.map((qa) => {
              return (
                <Accordion
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
