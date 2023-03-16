import React from 'react';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { CTA } from '../../organisms/CTA';
import { FAQ } from '../../organisms/FAQ';
import {
  MdCloudDownload,
  MdSupportAgent,
  MdOutlineChat,
  MdOutlineTask,
  MdOutlineMonetizationOn,
  MdAppRegistration,
  MdOutlineCreateNewFolder,
  MdPeopleOutline,
  MdOutlineIntegrationInstructions,
  MdOutlineComment,
} from 'react-icons/md';
import { Span } from '../../atoms/Typography';
import { NextSeo } from 'next-seo';
import MobileChat from '../../../public/images/MobileChat.png';
import Dashboard from '../../../public/images/Dashboard.png';
import Integrate from '../../../public/images/Integrate.jpg';
import Communicate from '../../../public/images/Communicate.png';
import AppUser from '../../../public/images/AppUser.png';
import HappyTeam from '../../../public/images/HappyTeam.jpg';

import Image from 'next/image';
import { Button } from '../../atoms/Button';
import { BaseCTA } from '../../organisms/BaseCTA';
import { CatcherTexts } from '../../organisms/CatcherTexts';
import { Card } from '../../atoms/Card';
import { useRouter } from 'next/router';

export const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo description="Meet ExamApp. Designed for team management on the go. Explore the app and join" />
      <main className="font-montserrat">
        <Header />
        <BaseCTA
          className="mb-24"
          leftParts={
            <div className="flex flex-col text-left">
              <h1 className="font-nunito mb-8 text-5xl font-light text-primary-900">
                App for On-The-Road Teams
              </h1>
              <div className="mb-8 flex flex-col">
                <Span className="mb-2 text-base">
                  Meet ExamApp. Designed for team management on the go.
                </Span>
                <Span className="mb-2 text-base">
                  Explore the app and join.
                </Span>
              </div>
              <Button
                className="mt-4 mb-8 w-52"
                onClick={() =>
                  window.open(
                    'https://github.com/CyberBonfire/next-tailwind-landing-page'
                  )
                }
              >
                Start Using
              </Button>
            </div>
          }
          rightParts={
            <Image
              className="rounded-2xl"
              src={MobileChat}
              alt=""
              priority
              loading="eager"
            />
          }
        />

        <CatcherTexts
          heading="The only app you'll need to manage your teams."
          contents={
            <div className="grid w-full grid-cols-2 gap-4 py-6 sm:grid-cols-3">
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#download')}
              >
                <MdCloudDownload className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">Mobile app</Span>
              </Card>
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#managetasks')}
              >
                <MdOutlineTask className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">Manage Tasks</Span>
              </Card>
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#chat')}
              >
                <MdOutlineChat className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">Chat</Span>
              </Card>
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#managefinancials')}
              >
                <MdOutlineMonetizationOn className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">Manage Financials</Span>
              </Card>
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#quickaccess')}
              >
                <MdAppRegistration className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">Quick Access</Span>
              </Card>
              <Card
                className="cursor-pointer"
                onClick={() => router.push('/features#24hoursupport')}
              >
                <MdSupportAgent className="m-auto h-24 w-24 fill-primary-300" />
                <Span className="mb-2">24 Hour Support</Span>
              </Card>
            </div>
          }
        />

        <CatcherTexts
          heading="What is ExamApp?"
          description="This is a modern software suite designed to simplify the process for service businesses. Welcome to the future of on-site job management."
        />

        <CTA
          leadingIcon={
            <MdOutlineCreateNewFolder className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Create"
          description="Create new projects, tasks. Give your staff the tools to work more effectively."
          image={Dashboard}
          isImageRight
        />

        <CTA
          leadingIcon={
            <MdPeopleOutline className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Collaborate"
          description="Increase your productivity by installing the app on their smartphones. You can start tasks, record their time, make notes, take progress."
          image={AppUser}
        />

        <CTA
          leadingIcon={
            <MdOutlineIntegrationInstructions className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Integrate"
          description="Easily integrate with the other app accounting software to sync customer information."
          image={Integrate}
          isImageRight
        />

        <CTA
          leadingIcon={
            <MdOutlineComment className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Communicate"
          description="Use our chat function to effortlessly communicate with others on the project. Share and access documents, photos and receipts. Seamless communication between your in-office and on-site team has never been easier."
          image={Communicate}
        />

        {/* <Pricing
          priceProps={[
            {
              title: 'Basic',
              description:
                'This is the basic plan for getting started and growing your business.',
              price: '$10',
              features: [
                '20 desktop users',
                '25 Gb storage',
                'Unlimited users',
              ],
              onClickButton: () => null,
            },
            {
              title: 'Basic',
              description:
                'This is the basic plan for getting started and growing your business.',
              price: '$10',
              features: [
                '20 desktop users',
                '25 Gb storage',
                'Unlimited users',
              ],
              onClickButton: () => null,
            },
          ]}
        /> */}

        <FAQ
          title="Have any questions?"
          description=""
          qas={[
            {
              question: 'Who can use ExamApp?',
              answer:
                'Originally built for sign and structure installations, ExamApp is for small to medium on-the-road teams in the services industries. It is designed to fit neatly into your workflow.',
            },
            {
              question: 'How Does ExamApp Work?',
              answer:
                'Managers access the dashboard in office, where they can manage and supervise entire projects from a single place. Assign tasks to projects, and employees to tasks. ',
            },
            {
              question: 'In which countries is ExamApp available?',
              answer: 'ExamApp is currently available in Australia.',
            },
          ]}
        />

        <CatcherTexts
          heading="Start using ExamApp today!"
          contents={
            <div className="mb-24 flex flex-col items-center justify-center">
              <div className="pb-8">
                <Image
                  className="rounded-2xl"
                  src={HappyTeam}
                  alt=""
                  priority
                  loading="eager"
                  unoptimized
                />
              </div>
              <Button
                className="px-16 text-lg"
                onClick={() =>
                  window.open(
                    'https://github.com/CyberBonfire/next-tailwind-landing-page'
                  )
                }
              >
                Start Using
              </Button>
            </div>
          }
        />
        <Footer />
      </main>
    </>
  );
};
