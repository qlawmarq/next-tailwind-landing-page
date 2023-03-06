import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Container } from '../../atoms/Container';
import Link from 'next/link';
import { Paragraph } from '../../atoms/Typography';
import Image from 'next/image';
import { Button } from '../../atoms/Button';

export const Header: React.FC = () => {
  const [IsSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const navStyle = useSpring({
    opacity: IsSideMenuOpen ? 1 : 0,
    right: IsSideMenuOpen ? 0 : -270,
  });
  const hamburgerStyle2 = useSpring({
    opacity: IsSideMenuOpen ? 0 : 1,
  });
  const hamburgerStyle1 = useSpring({
    y: IsSideMenuOpen ? 8 : 0,
    rotate: IsSideMenuOpen ? 225 : 0,
  });
  const hamburgerStyle3 = useSpring({
    y: IsSideMenuOpen ? -8 : 0,
    rotate: IsSideMenuOpen ? -225 : 0,
  });
  return (
    <>
      <header className="fixed z-20 flex h-24 w-full items-center overflow-hidden bg-primary-50/30 backdrop-blur">
        <Container>
          <div className="flex items-center text-2xl font-black text-primary-900">
            <div
              style={{
                position: 'relative',
                width: '42px',
                height: '42px',
                marginRight: '8px',
              }}
            >
              <Image
                src="/images/icon.png"
                layout="fill"
                objectFit="contain"
                alt="logo"
                priority
                loading="eager"
              />
            </div>
            <Link href="/">ExamApp</Link>
          </div>

          {/* Burger for Sidemenu, only for mobile */}
          <div className="z-20 flex items-end sm:hidden">
            <button
              className="ml-4 flex flex-col"
              onClick={() => {
                setIsSideMenuOpen(!IsSideMenuOpen);
              }}
            >
              <animated.span
                style={hamburgerStyle1}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle2}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
              <animated.span
                style={hamburgerStyle3}
                className="mb-1 h-1 w-6 rounded-full bg-primary-800"
              />
            </button>
          </div>

          {/* Only for PC */}
          <div className="hidden items-end sm:flex">
            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-primary-500">
              <Link href="/">Home</Link>
            </Paragraph>
            <Paragraph className="flex cursor-pointer py-3 px-6 hover:text-primary-500">
              <Link href="/contact">Contact</Link>
            </Paragraph>
            <Button
              className="px-6"
              onClick={() =>
                window.open(
                  'https://github.com/CyberBonfire/next-tailwind-landing-page'
                )
              }
            >
              Get ExamApp
            </Button>
          </div>
        </Container>
      </header>

      {/* Sidemenu */}
      <animated.nav
        style={navStyle}
        className="fixed top-0 z-10 flex h-full flex-col bg-primary-50/30 p-6 text-lg text-primary-900 backdrop-blur"
      >
        <ul className="mt-24 flex flex-col">
          <li>
            <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="/">Home</Link>
            </Paragraph>
          </li>
          <li>
            <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="/contact">Contact</Link>
            </Paragraph>
          </li>
          <li>
            <Paragraph className="flex cursor-pointer py-2 px-8 hover:text-primary-500">
              <Link href="/privacy-policy">Privacy</Link>
            </Paragraph>
          </li>
        </ul>
      </animated.nav>

      {/* Margin */}
      <div className="relative h-24 w-full" />
    </>
  );
};
