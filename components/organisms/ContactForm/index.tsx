import React, { useState } from 'react';
import { H1 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Input } from '../../atoms/Form';
import { Textarea } from '../../atoms/Form';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { ApiService, EmailJSSendParams } from '../../../lib/api';
import EmailSend from '../../../public/images/EmailSend.png';

interface IFormInputs {
  email: string;
  name: string;
  message: string;
}

export const ContactForm = () => {
  const [isSentEmail, setIsSentEmail] = useState<boolean>(false);
  const schema = z.object({
    email: z.string().min(1).email(),
    name: z.string().min(1),
    message: z.string().min(1),
  });
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (param: EmailJSSendParams) => {
    ApiService.emailjsSend(param);
    setIsSentEmail(true);
  };
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col ">
        {!isSentEmail && (
          <>
            <H1 className="mb-6">Contact Us</H1>
            <form onSubmit={handleSubmit((d) => onSubmit(d))}>
              <Input
                register={register('email')}
                error={formState.errors.email?.message}
                label="Email"
                inputMode="email"
                className="mb-3"
              />
              <Input
                register={register('name')}
                error={formState.errors.name?.message}
                label="Name"
                inputMode="text"
                className="mb-3"
              />
              <Textarea
                register={register('message')}
                error={formState.errors.message?.message}
                label="Message"
                inputMode="text"
                className="mb-3"
              />
              <Button itemType="submit">Submit</Button>
            </form>
          </>
        )}
        {isSentEmail && (
          <>
            <H1 className="mb-6">Thanks!</H1>
            <div className="flex h-full items-center justify-center">
              <div className="w-56">
                <Image src={EmailSend} alt="Thanks!" />
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};
