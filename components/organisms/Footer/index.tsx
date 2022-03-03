import React, { useState } from 'react';
import { Container } from '../../atoms/Container';
import { Paragraph } from '../../atoms/Typography';
import { Apple, Google } from '../../molecules/AppStoreButton';
import TwitterIcon from 'mdi-react/TwitterIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import Link from 'next/link';
import { useLocale } from '../../../hooks/useLocale';

export const Footer = () => {
  const { t } = useLocale();
  const [thisYear] = useState(new Date().getFullYear());
  return (
    <footer className="pt-12 pb-6">
      <Container>
        <div className="relative m-auto flex w-full flex-col">
          <div className="flex flex-row justify-between">
            <div>
              <Paragraph className="pb-3 text-xs font-medium uppercase text-gray-500">
                Services
              </Paragraph>
              <ul>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/">{t.LandingPage.title}</Link>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/contact">{t.ContactPage.title}</Link>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/privacy-policy">
                      {t.PrivacyPolicyPage.title}
                    </Link>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/terms-conditions">
                      {t.TermsConditionsPage.title}
                    </Link>
                  </Paragraph>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <Apple />
              <Google />
            </div>
          </div>

          <div className="mt-6 flex flex-row justify-between">
            <div>
              <Paragraph>
                © Copyright {thisYear}. All Rights Reserved.
              </Paragraph>
            </div>
            <div className="flex">
              <TwitterIcon color="#1e3a8a" />
              <YoutubeIcon color="#1e3a8a" />
              <InstagramIcon color="#1e3a8a" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
