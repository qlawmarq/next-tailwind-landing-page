import MagicGirl from '../../../public/images/magic_girl.png';
import Image from 'next/image';
import { H1, H3, H2, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { Button } from '../../atoms/Button';

export const TermsConditions = () => {
  return (
    <Container>
      <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center py-6">
        <div className="mb-3">
          <H1 className="mb-6">Terms and Conditions</H1>
          <Paragraph className="mb-2">
            By accessing this website or using any of the services we provide,
            we will assume that you agree to these terms and conditions.
          </Paragraph>
          <Paragraph className="mb-2">
            If you do not agree to all of the terms and conditions stated on
            this page, please do not continue to use our services.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Service Changes and Limitations</H2>
          <Paragraph className="mb-2">
            The Services we provide change frequently, and their form and
            functionality may change without prior notice to you. We retains the
            right to create limits on and related to use of Our Services in its
            sole discretion at any time with or without notice. We may also
            impose limits on certain Services or aspects of those Services or
            restrict your access to parts or all of the Services without notice
            or liability. We may change, suspend, or discontinue any or all of
            Our Services at any time, including the availability of any product,
            feature, database, or any content.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">License</H2>
          <Paragraph className="mb-2">
            Unless otherwise stated, We and/or its licensors own the
            intellectual property rights for all material on Our services. All
            intellectual property rights are reserved. You may access this from
            Our services for your own personal use subjected to restrictions set
            in these terms and conditions.
          </Paragraph>
          <Paragraph className="mb-2">
            Except as expressly provided in this Agreement, you are prohibited
            from copying, reproducing, modifying, distributing, displaying,
            performing, or transmitting the Content of the Service for any
            purpose, and nothing contained in or implied by the Service grants
            you any license or right to do so.
          </Paragraph>

          <Paragraph className="mb-2">
            Parts of Our services offer an opportunity for users to post and
            exchange opinions and information. Our services does not filter,
            edit, publish or review Comments prior to their presence on any
            place. Comments do not reflect the views and opinions of Ours, its
            agents and/or affiliates. Comments reflect the views and opinions of
            the person who post their views and opinions. To the extent
            permitted by applicable laws, Our services shall not be liable for
            the Comments or for any liability, damages or expenses caused and/or
            suffered as a result of any use of and/or posting of and/or
            appearance of the Comments.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Warranty Disclaimer</H2>
          <Paragraph className="mb-2">
            Your access to and use of our Services or any Content is at your own
            risk.
          </Paragraph>
          <Paragraph className="mb-2">
            YOU UNDERSTAND AND AGREE THAT THE SERVICES ARE PROVIDED TO YOU ON AN
            "AS IS" AND "AS AVAILABLE" BASIS. WITHOUT LIMITING THE FOREGOING, TO
            THE FULL EXTENT PERMITTED BY LAW, Our services DISCLAIMS ALL
            WARRANTIES, EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </Paragraph>
          <Paragraph className="mb-2">
            Our services makes no representations or warranties of any kind with
            respect to the Services, including any representation or warranty
            that the use of the Services will (a) be timely, uninterrupted or
            error-free or operate in combination with any other hardware,
            software, system, or data, (b) meet your requirements or
            expectations, (c) be free from errors or that defects will be
            corrected, (d) be free of viruses or other harmful components; or
            (e) be entirely secure or that the information you share with us
            will be secure.
          </Paragraph>
          <Paragraph className="mb-2">
            Our services also makes no representations or warranties of any kind
            with respect to Content; User Content, in particular, is provided by
            and is solely the responsibility of, the Users providing that
            Content. No advice or information, whether oral or written, obtained
            from Our services or through the Services, will create any warranty
            not expressly made herein.
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">Privacy</H2>
          <Paragraph className="mb-2">
            For information about how Our Services collects, uses, and shares
            your information, please review our Privacy Policy. By using the
            Services you agree you have read the Privacy Policy, which describes
            our collection, use, and sharing (as set forth in the Privacy
            Policy) of such information.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};
