import React from 'react';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { CTA } from '../../organisms/CTA';
import { H1 } from '../../atoms/Typography';
import { NextSeo } from 'next-seo';
import ManageTask from '../../../public/images/ManageTask.png';
import ManageFinancials from '../../../public/images/ManageFinancials.png';
import HappyTeam from '../../../public/images/HappyTeam.jpg';
import Communicate from '../../../public/images/Communicate.png';
import MobileChat from '../../../public/images/MobileChat.png';
import AppUser from '../../../public/images/AppUser.png';

import { Apple, Google } from '../../molecules/AppStoreButton';

import Image from 'next/image';
import { BaseCTA } from '../../organisms/BaseCTA';
import { CatcherTexts } from '../../organisms/CatcherTexts';
import { Button } from '../../atoms/Button';
import {
  MdAppRegistration,
  MdCloudDownload,
  MdOutlineChat,
  MdOutlineMonetizationOn,
  MdOutlineTask,
  MdSupportAgent,
} from 'react-icons/md';

export const FeatruesPage = () => {
  return (
    <>
      <NextSeo description="Meet ExamApp. Designed for team management on the go. Explore the app and join" />
      <main className="font-montserrat">
        <Header />
        <BaseCTA
          leftParts={
            <div className="flex flex-col text-left">
              <H1 className="mb-3">
                The only application you&apos;ll need to power your teams.
              </H1>
              <H1 className="mb-3">Learn how.</H1>
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

        <CTA
          leadingIcon={
            <MdCloudDownload className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Download"
          description="Download the ExamApp app to both your desktop and your teams' smartphones. You'll immediately be able to create and modify projects, assign tasks and monitor the progress of projects while in the field, your team will be able to see exactly what tasks they need to complete."
          image={MobileChat}
        />

        <CTA
          leadingIcon={
            <MdOutlineTask className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Manage Tasks"
          description="Our task feature allows you to create new tasks and integrate them with your calendar. Tasks can be viewed in List or Card view. You can see how your resources are being deployed on the Resources Grid view, and your staff movements on the Staff Calendar. If addresses are included, your team can click on the address and get directions via Google Maps."
          image={ManageTask}
          isImageRight
        />

        <CTA
          leadingIcon={
            <MdOutlineChat className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Chat"
          description="Our integrated Chat feature allows you to communicate with your team in real time, exchanging notes, photos and documentation which can also be filed directly from the chat. Give your team instructions on how to fix issues on the spot. All types of contacts can be assigned to a Chat, so you can also communicate directly with your supplier or client. Seamless communication at your fingertips."
          image={Communicate}
        />

        <CTA
          leadingIcon={
            <MdOutlineMonetizationOn className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Manage Financials"
          description="Quoting on and winning jobs is so much easier with ExamApp. Build your quote directly in the system and email it to your potential client with a clear link for them to accept it. When they do, the quote is automatically turned into a project. lways know which quotes are awaiting response, which purchase orders are still outstanding, and your bills and invoices against a particular project."
          image={ManageFinancials}
          isImageRight
        />

        <CTA
          leadingIcon={
            <MdAppRegistration className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="Quick Access"
          description="With our interactive dashboards, users can easily manage and access all the data of the organisation. Desktop versions have a full side menu, while smartphone versions have a dropdown of the menu items available to field users."
          image={AppUser}
        />

        <CTA
          leadingIcon={
            <MdSupportAgent className="mb-6 h-12 w-12 fill-primary-400" />
          }
          title="24 Hour Support"
          description="Problems with the software can easily be managed by our Support Request system. Simply complete the form and it will be assigned to one of our team to assist you."
          image={HappyTeam}
          isImageRight
        />

        <CatcherTexts
          heading="A native app for every platform"
          description="ExamApp is a cloud-based mobile and desktop job app with a focus on speed and security. It is available on PC, Mac, iOS and Android."
          contents={
            <div className="mt-6 flex flex-col items-center justify-center sm:flex-row">
              <Button
                className="m-2 h-14 w-36 py-1 text-sm"
                onClick={() =>
                  window.open(
                    'https://github.com/CyberBonfire/next-tailwind-landing-page'
                  )
                }
              >
                Start with PC
              </Button>
              <Apple
                onClick={() =>
                  window.open(
                    'https://github.com/CyberBonfire/next-tailwind-landing-page'
                  )
                }
              />
              <Google
                onClick={() =>
                  window.open(
                    'https://github.com/CyberBonfire/next-tailwind-landing-page'
                  )
                }
              />
            </div>
          }
        />

        <Footer />
      </main>
    </>
  );
};
