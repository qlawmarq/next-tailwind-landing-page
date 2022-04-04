# tailwind-landing-page-next


## Contact Form

In this project, EmailJS is used for forwarding message to your email.

https://dashboard.emailjs.com/sign-up

### Create an Email Template

In order to activate the concact form feature, you need to register with EmailJS first.

Then you need to create an email template like this one.

```
Hello,

You got a new message from {{name}} {{email}}:

{{message}}

Best wishes,
EmailJS team
```

At least, the template should have the `name`, `email`, and `message` parameters.

Or you can customize parameters.

https://www.emailjs.com/docs/user-guide/creating-email-templates/

After finishing creation, please copy your Template ID.


### Create an Email Services

Create an Email Service in EmailJS.

After finishing creation, please copy your Services ID.

### Get your User ID

you need to get your User ID from here:
https://dashboard.emailjs.com/admin/integration


### Update the config

All setup has been finished, then update `config/index.ts`.


## Icons

```ts
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';
import { CheckCircleIcon } from '@heroicons/react/solid';
const MyComponent = () => {
  return (
    <>
      <AlertIcon color="#fff" />
      <CheckCircleIcon className="h-6 w-6 text-green-300" />
    </>
  );
};
```

https://heroicons.com/
https://pictogrammers.github.io/@mdi/font/6.5.95/
