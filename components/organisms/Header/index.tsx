import React, { useState, HTMLAttributes } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Container } from '../../atoms/Container';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navStyle = useSpring({
    opacity: isOpen ? 0.9 : 0,
    right: isOpen ? 0 : -200,
  });
  const hamburgerStyle2 = useSpring({
    opacity: isOpen ? 0 : 1,
  });
  const hamburgerStyle1 = useSpring({
    y: isOpen ? 8 : 0,
    rotate: isOpen ? 225 : 0,
  });
  const hamburgerStyle3 = useSpring({
    y: isOpen ? -8 : 0,
    rotate: isOpen ? -225 : 0,
  });
  return (
    <>
      <header className="fixed z-20 flex h-24 w-full items-center  overflow-hidden">
        <Container>
          <div className="flex items-start text-2xl font-black text-blue-900">
            Company
            <span className="ml-2 h-3 w-3 rounded-full bg-purple-600"></span>
          </div>

          <div className="z-20 flex items-end">
            <button
              className="ml-4 flex flex-col"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <animated.span
                style={hamburgerStyle1}
                className="mb-1 h-1 w-6 rounded-full bg-purple-800"
              />
              <animated.span
                style={hamburgerStyle2}
                className="mb-1 h-1 w-6 rounded-full bg-purple-800"
              />
              <animated.span
                style={hamburgerStyle3}
                className="mb-1 h-1 w-6 rounded-full bg-purple-800"
              />
            </button>
          </div>
          <animated.nav
            style={navStyle}
            className="fixed top-0 z-10 flex h-full flex-col bg-white p-6 text-lg text-purple-900"
          >
            <ul className="mt-24 flex flex-col">
              <li>
                <a href="#" className="flex py-2 px-8 hover:text-purple-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="flex py-2 px-8 hover:text-purple-700">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="flex py-2 px-8 hover:text-purple-700">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="flex py-2 px-8 hover:text-purple-700">
                  Contact us
                </a>
              </li>
            </ul>
          </animated.nav>
        </Container>
      </header>
      <div className="relative h-24 w-full" />
    </>
  );
};
