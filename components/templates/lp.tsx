import { Header } from '../molecules/Header';
import { Footer } from '../molecules/Footer';
import { LandingPageContent } from '../organisms/LandingPageContent';
import { FAQContent } from '../organisms/FAQContent';
import { PriceContent } from '../organisms/PriceContent';

export const LP = () => {
  return (
    <>
      <main className="font-montserrat bg-gray-100">
        <Header />
        <LandingPageContent />
        <FAQContent />
        <PriceContent />
        <Footer />
      </main>
    </>
  );
};
