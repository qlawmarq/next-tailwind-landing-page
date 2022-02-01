import React, { useCallback, useState } from 'react';
import { Carousel } from './Carousel';

type Props = {
  items: React.ReactNode[];
  interval?: number;
  showButtons?: boolean;
  showCounter?: boolean;
};

export const CarouselContainer: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(0);

  const measuredRef = useCallback((node) => {
    function updateSize() {
      const itemWidth = node?.getBoundingClientRect().width;
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const width = itemWidth === 'full' ? windowWidth : Math.ceil(itemWidth);
      setWidth(width);
    }
    updateSize();
    window.addEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div ref={measuredRef} className="relative h-56 overflow-hidden">
        {width !== 0 ? <Carousel {...props} width={width} /> : null}
      </div>
    </>
  );
};
