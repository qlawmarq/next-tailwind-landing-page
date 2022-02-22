import React, { useEffect, useRef, useState, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { Card } from '../../atoms/Card';

type ModalProps = {
  isOpen: boolean;
  onClose: ()=>void;
};

export const Modal: React.FC<HTMLAttributes<HTMLElement> & ModalProps> = (props) => {
  const ref = useRef<HTMLElement>();
  const [mounted, setMounted] = useState(false);
  const overlayClassName = `absolute top-0 w-screen h-screen bg-black opacity-50`;
  const cardClassName = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;

  useEffect(() => {
    ref.current = document.getElementById('__next') || document.getElementsByTagName('main')[0]
    setMounted(true)
  }, [])

  const modalEl = (
    <>
      <section className={overlayClassName} onClick={props.onClose} />
      <section className={cardClassName} onClick={props.onClose}>
        <Card className='relative flex flex-col items-center'>
          {props.children}
        </Card>
      </section>
    </>

  );

  return (mounted && props.isOpen && ref.current) ? createPortal(modalEl, ref.current) : null;
};
