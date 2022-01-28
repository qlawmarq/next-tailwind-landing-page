import { H1, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Card } from '../../atoms/Card';

export const FAQContent = () => {
  return (
    <Container>
      <div className="bg-gray-100 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded bg-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <H1>Frequently asked Questions</H1>
                <Paragraph className="my-2">
                  Wondering how our service works ?
                </Paragraph>
              </div>
              <div className="md:w-2/3">
                <Card className="mb-2">
                  <div className="mt-2 flex cursor-pointer flex-row-reverse ">
                    <div className="flex-auto">
                      How to install it with windows server ?
                    </div>
                    <div className="px-2">
                      <div>
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="mb-2">
                  <div className="mt-2 flex cursor-pointer flex-row-reverse ">
                    <div className="flex-auto">
                      How to use it with other integrations ?
                    </div>
                    <div className="px-2">
                      <div>
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="mb-2">
                  <div className="mt-2 flex cursor-pointer flex-row-reverse">
                    <div className="flex-auto">How to build an app ?</div>
                    <div className="px-2">
                      <div>
                        <ChevronUpIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 bg-white p-2 text-left text-justify text-gray-800">
                    Lorem, ipsum dolor sit amet consectetur{' '}
                    <span className="font-bold">adipisicing elit</span>.
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </div>
                </Card>
                <Card className="mb-2">
                  <div className="mt-2 flex cursor-pointer flex-row-reverse">
                    <div className="flex-auto">How to download it ?</div>
                    <div className="px-2">
                      <div>
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="mb-2">
                  <div className="mt-2 flex cursor-pointer flex-row-reverse">
                    <div className="flex-auto">How to use extensions ?</div>
                    <div className="px-2">
                      <div>
                        <ChevronDownIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
