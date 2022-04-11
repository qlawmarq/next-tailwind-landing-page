import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useSprings, a } from '@react-spring/web';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { CarouselItem } from './CarouselItem';

type CarouselProps = {
  items: React.ReactNode[];
  width: number;
  interval?: number;
  showButtons?: boolean;
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  width,
  interval,
  showButtons = true,
}) => {
  const [visible] = useState(items.length - 2);

  const idx = useCallback(
    (x, l = items.length) => (x < 0 ? x + l : x) % l,
    [items]
  );
  const getPos = useCallback(
    (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
    [idx]
  );
  // Important only if specifyng width, centers the element in the slider
  const offset = 0;
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width + offset,
  }));
  const prev = useRef([0, 1]);
  const index = useRef(0);
  const [active, setActive] = useState(1);
  const runSprings = useCallback(
    (y, vy, down, xDir, cancel, xMove) => {
      // This decides if we move over to the next slide or back to the initial
      if (!down) {
        index.current +=
          ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1);
        // cancel()
      }
      if (index.current + 1 > items.length) {
        setActive((index.current % items.length) + 1);
      } else if (index.current < 0) {
        setActive(items.length + ((index.current + 1) % items.length));
      } else {
        setActive(index.current + 1);
      }
      // The actual scrolling value
      const finalY = index.current * width;
      // Defines currently visible slides
      const firstVis = idx(Math.floor(finalY / width) % items.length);
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;
      set((i) => {
        const position = getPos(i, firstVis, firstVisIdx);
        const prevPosition = getPos(i, prev.current[0], prev.current[1]);
        let rank =
          firstVis -
          (finalY < 0 ? items.length : 0) +
          position -
          firstVisIdx +
          (finalY < 0 && firstVis === 0 ? items.length : 0);
        return {
          // x is the position of each of our slides
          x:
            (-finalY % (width * items.length)) +
            width * rank +
            (down ? xMove : 0) +
            offset,
          // this defines if the movement is immediate
          // So when an item is moved from one end to the other we don't
          // see it moving
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
        };
      });
      prev.current = [firstVis, firstVisIdx];
    },
    [idx, getPos, width, visible, set, items.length]
  );

  const onClickButtons = (next: number) => {
    index.current += next;
    runSprings(0, next, true, -0, () => {}, -0);
  };

  useEffect(() => {
    if (interval) {
      setInterval(() => onClickButtons(1), interval);
    }
  }, [interval]);

  return (
    <>
      {springs.map(({ x }, i) => (
        <a.div
          key={i}
          style={{
            width,
            x,
            position: 'absolute',
            height: '100%',
            willChange: 'transform',
          }}
        >
          <CarouselItem>{items[i]}</CarouselItem>
        </a.div>
      ))}
      {showButtons ? (
        <>
          <button
            onClick={() => onClickButtons(-1)}
            className="focus:shadow-outline absolute top-0 left-0 mt-24 h-8 w-8 rounded-full bg-white text-2xl text-primary-600 shadow-md hover:text-primary-400 focus:text-primary-400 focus:outline-none"
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={() => onClickButtons(1)}
            className="focus:shadow-outline absolute top-0 right-0 mt-24 h-8 w-8 rounded-full bg-white text-2xl text-primary-600 shadow-md hover:text-primary-400 focus:text-primary-400 focus:outline-none"
          >
            <ArrowRightIcon />
          </button>
        </>
      ) : null}
    </>
  );
};