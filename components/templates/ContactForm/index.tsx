import React, { useEffect } from 'react';
import { H1 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Input } from '../../atoms/Form';
import { Textarea } from '../../atoms/Form';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ApiService, EmailJSSendParams } from '../../../lib/api'

interface IFormInputs {
  email: string;
  name: string;
  message: string;
}

const schema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty(),
  message: z.string().nonempty(),
});

export const ContactForm = () => {
  useEffect(() => {}, []);
  const { register, handleSubmit, formState, getValues } = useForm<IFormInputs>(
    {
      resolver: zodResolver(schema),
    }
  );
  const onSubmit = (param: EmailJSSendParams) => {
    ApiService.emailjsSend(param)
  }
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col ">
        <H1 className="mb-6">Contact Us</H1>
        <form onSubmit={handleSubmit((d) => onSubmit(d))}>
          <Input
            register={register('email')}
            error={formState.errors.email?.message}
            label="EMail"
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
      </div>
    </Container>
  );
};
