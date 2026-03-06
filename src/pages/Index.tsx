import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Collections from '@/components/Collections';
import ImpactSection from '@/components/ImpactSection';
import FactoriesSection from '@/components/FactoriesSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <WhyChooseUs />
      <Collections />
      <ImpactSection />
      <FactoriesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
