# next-tailwind-landing-page

## What's this?

Just a sample landing page that originally was made for my app's promotion.

https://tailwind-landing-page-next-template.vercel.app/

### Elements

- Tailwind CSS
- Next.js

### Features

- Multiple Language Support and Localization (i18n)
- Contact form (with [EmailJS](https://dashboard.emailjs.com/sign-up))

## Notes

### Multiple Language Support and Localization (i18n)

This app automatically detect the language setting of user's browser, and display it in a suitable language for each user.   

English and Japanese translation files already exist in the `locales` folder, but no others.

The default language is English, but you can customize it in `next.config.js`:

```js
{
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  }
}
```

For more information, please see below:

https://nextjs.org/docs/advanced-features/i18n-routing


### Contact Form

In this project, EmailJS is used for forwarding message to your email.

**By default, cntact form page does not work. Need to get API keys of EmailJS to activate contact form**

https://dashboard.emailjs.com/sign-up

Please follow the instructions below to activate contact form.


#### 1. Create an Email Template

In order to activate Contact form, **you need to register with EmailJS first**.

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

After finishing creation,  **please copy your Template ID.**


#### 2. Create an Email Services

Create an Email Service in EmailJS.

After finishing creation,  **please copy your Services ID.**


#### 3. Get your User ID

**you need to get your User ID from here:**
https://dashboard.emailjs.com/admin/integration


#### 4. Update the config

All setup has been finished, **finally please update `config/index.ts` based on the information obtained.**


### Icons

The following icon library is already used in this sample:

- [heroicons](https://heroicons.com/)
- [Material Design Icons](https://pictogrammers.github.io/@mdi/font/6.5.95/)

You can search for icons you want to use, and add them as follows:

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

