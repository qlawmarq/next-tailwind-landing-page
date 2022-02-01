import { H1, H5, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Card } from '../../atoms/Card';
import { Accordion } from '../../molecules/Accordion';

export const FAQ = () => {
  return (
    <Container>
      <div className="relative mx-auto w-full py-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <H1>Frequently asked Questions</H1>
            <H5 className="my-2">Wondering how our service works ?</H5>
          </div>
          <div className="md:w-2/3">
            <Accordion
              className="mb-2"
              question="How to install it with windows server ?"
              answer="Contact us"
            />
            <Accordion
              className="mb-2"
              question="How can I contact you ?"
              answer="Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, veritatis officia fugiat cumque quaerat
                earum adipisci?"
            />
            <Accordion
              className="mb-2"
              question="How to use it with other integrations ?"
              answer="Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, veritatis officia fugiat cumque quaerat
                earum adipisci?"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
