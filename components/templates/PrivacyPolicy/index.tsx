import MagicGirl from '../../../public/images/magic_girl.png';
import Image from 'next/image';
import { H1, H3, H2, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

export const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center py-6">
        <div className="mb-3">
          <H1 className="mb-6">Privacy Policy</H1>

          <Paragraph className="mb-2">
            This page is used to inform website visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service.
          </Paragraph>
          <Paragraph className="mb-2">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </Paragraph>

          <Paragraph className="mb-2">
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, unless otherwise defined in this Privacy
            Policy. Please also refer to our Terms of Conditions.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Information Collection and Use</H2>

          <Paragraph className="mb-2">
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information as
            defined in Log Data.
          </Paragraph>
          <Paragraph className="mb-2">
            The information we collect may be used to identify you personally,
            to the extent that such use is restricted by law.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Log Data</H2>

          <Paragraph className="mb-2">
            We want to inform you that whenever you visit our Service, we
            collect information that your device sends to us that is called Log
            Data. This Log Data may include information such as your device’s
            Internet Protocol ("IP") address, device version, the time and date
            of your visit, and other statistics.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Security</H2>

          <Paragraph className="mb-2">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </Paragraph>
          <Paragraph className="mb-2">
            You need to prevent unauthorized access to your information by
            creating a unique, secure, and protected password and limiting
            access to your device and browser by signing off after you have
            finished accessing the Services.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Changes to This Privacy Policy</H2>

          <Paragraph className="mb-2">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Contact Us</H2>

          <Paragraph className="mb-2">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};
