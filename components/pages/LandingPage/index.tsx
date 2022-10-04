import React, { useState } from 'react';
import { Modal } from '../../molecules/Modal';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { CTA } from '../../templates/CTA';
import { FAQ } from '../../templates/FAQ';
import { Prices } from '../../templates/Prices';
import { Carousel } from '../../templates/Carousel';
import { H1 } from '../../atoms/Typography';
import { useLocale } from '../../../hooks/useLocale';
import { NextSeo } from 'next-seo';

export const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();
  return (
    <>
      <NextSeo
        title={t.LandingPage.title}
        description={t.LandingPage.description}
      />
      <main className="font-montserrat">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          TESTETSTETSTE
        </Modal>
        <Header />
        <CTA
          title={t.LandingPage.first_title}
          description={t.LandingPage.first_description}
          onClickStart={() => setIsOpen(!isOpen)}
        />
        <CTA
          title={t.LandingPage.second_title}
          description={t.LandingPage.second_description}
          isImageRight
          onClickStart={() => console.log('click')}
        />
        <Carousel
          items={[
            <H1 key={1} className="text-center">
              {t.LandingPage.carousel_1}
            </H1>,
            <H1 key={2} className="text-center">
              {t.LandingPage.carousel_2}
            </H1>,
            <H1 key={3} className="text-center">
              {t.LandingPage.carousel_3}
            </H1>,
          ]}
        />
        <FAQ
          title={t.LandingPage.faq_title}
          description={t.LandingPage.faq_description}
          qas={[
            {
              question: t.LandingPage.question_1,
              answer: t.LandingPage.answer_1,
            },
            {
              question: t.LandingPage.question_2,
              answer: t.LandingPage.answer_2,
            },
          ]}
        />
        <Prices
          priceProps={[
            {
              title: t.LandingPage.price_title_1,
              description: t.LandingPage.price_description_1,
              price: t.LandingPage.price_amount_1,
              features: [t.LandingPage.price_features_1_1],
              onClickButton: () => console.log('click'),
            },
            {
              title: t.LandingPage.price_title_2,
              description: t.LandingPage.price_description_2,
              price: t.LandingPage.price_amount_2,
              features: [
                t.LandingPage.price_features_2_1,
                t.LandingPage.price_features_2_2,
              ],
              onClickButton: () => console.log('click'),
            },
          ]}
        />
        <Footer />
      </main>
    </>
  );
};
