import { AboutSection } from "../../../components/MainComponents/AboutSection";
import { ContactSection } from "../../../components/MainComponents/ContactSection";
import { Directions } from "../../../components/MainComponents/Directions";
import { Footer } from "../../../components/Footer";
import { Hero } from "../../../components/MainComponents/Hero";
import { InstrComponent } from "../../../components/MainComponents/InstrComponent";
import { ProblemsCarouselSection } from "../../../components/MainComponents/ProblemsCarousel";
import { ProductSection } from "../../../components/MainComponents/ProductSection";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Hero />
      <ProblemsCarouselSection />
      <AboutSection />
      <InstrComponent />
      <ProductSection />
      <Directions />
      <ContactSection />
      <Footer />
    </div>
  )
};

export default Main;
