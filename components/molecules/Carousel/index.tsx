import React, { useEffect,useRef, useCallback, useState, CSSProperties } from 'react';
import { Carousel } from './Carousel';
import { Container } from '../../atoms/Container';

type Props = {
  items: React.ReactNode[];
  showButtons: boolean;
  showCounter: boolean;
};

export const CarouselContainer: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      const itemWidth = node.getBoundingClientRect().width;
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const width = itemWidth === 'full' ? windowWidth : Math.ceil(itemWidth);
      setWidth(width);
    }
  }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   const windowWidth =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  //   setWidth(windowWidth);
  // })

  return (
    <>
      <div ref={measuredRef} className='relative h-56 overflow-hidden'>
        {width !== 0 ? (
          <Carousel {...props} width={width}>
            {props.children}
          </Carousel>
        ) : (
          'null'
        )}
      </div>
    </>
  );
};
