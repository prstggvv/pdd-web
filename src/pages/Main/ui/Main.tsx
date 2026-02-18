import { Directions } from "../../../components/Directions";
import { Hero } from "../../../components/MainComponents/Hero";
import { InstrComponent } from "../../../components/MainComponents/InstrComponent";
import { ProductSection } from "../../../components/ProductSection";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.css';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className ?? ''])}>
      <Hero />
      <InstrComponent />
      <ProductSection />
      <Directions />
    </div>
  )
};

export default Main;
