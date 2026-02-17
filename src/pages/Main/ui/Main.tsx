import { Hero } from "../../../components/MainComponents/Hero";
import { InstrComponent } from "../../../components/MainComponents/InstrComponent";
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
    </div>
  )
};

export default Main;
