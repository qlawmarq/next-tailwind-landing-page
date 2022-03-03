import React from 'react';
import { H1 } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Input } from '../../atoms/Form';
import { Textarea } from '../../atoms/Form';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ApiService, EmailJSSendParams } from '../../../lib/api';
import { useLocale } from '../../../hooks/useLocale';

interface IFormInputs {
  email: string;
  name: string;
  message: string;
}

export const ContactForm = () => {
  const { t } = useLocale();
  const schema = z.object({
    email: z
      .string()
      .nonempty(t.ContactPage.validation_noempty)
      .email(t.ContactPage.validation_email),
    name: z.string().nonempty(t.ContactPage.validation_noempty),
    message: z.string().nonempty(t.ContactPage.validation_noempty),
  });
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (param: EmailJSSendParams) => {
    ApiService.emailjsSend(param);
  };
  return (
    <Container>
      <div className="relative mx-auto flex w-full flex-col ">
        <H1 className="mb-6">{t.ContactPage.title}</H1>
        <form onSubmit={handleSubmit((d) => onSubmit(d))}>
          <Input
            register={register('email')}
            error={formState.errors.email?.message}
            label={t.ContactPage.email}
            inputMode="email"
            className="mb-3"
          />
          <Input
            register={register('name')}
            error={formState.errors.name?.message}
            label={t.ContactPage.name}
            inputMode="text"
            className="mb-3"
          />
          <Textarea
            register={register('message')}
            error={formState.errors.message?.message}
            label={t.ContactPage.message}
            inputMode="text"
            className="mb-3"
          />
          <Button itemType="submit">{t.ContactPage.submit}</Button>
        </form>
      </div>
    </Container>
  );
};
