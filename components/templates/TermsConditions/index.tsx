import { H1, H2, Paragraph } from '../../atoms/Typography';
import { Container } from '../../atoms/Container';
import { useLocale } from '../../../hooks/useLocale';

export const TermsConditions = () => {
  const { t } = useLocale();

  return (
    <Container>
      <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center ">
        <div className="mb-3">
          <H1 className="mb-6">{t.TermsConditionsPage.section_1_title}</H1>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_1_content_1}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_1_content_2}
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">{t.TermsConditionsPage.section_2_title}</H2>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_2_content_1}
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">{t.TermsConditionsPage.section_3_title}</H2>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_3_content_1}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_3_content_2}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_3_content_3}
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">{t.TermsConditionsPage.section_4_title}</H2>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_4_content_1}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_4_content_2}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_4_content_3}
          </Paragraph>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_4_content_4}
          </Paragraph>
        </div>

        <div className="mb-3">
          <H2 className="mb-3">{t.TermsConditionsPage.section_5_title}</H2>
          <Paragraph className="mb-2">
            {t.TermsConditionsPage.section_5_content_1}
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};
