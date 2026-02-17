import cls from './Hero.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';

interface IHeroProps {
  className?: string;
};

export const Hero = ({ className }: IHeroProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div
          className={classNames(cls.backImage, {}, [])}></div>
        <div className={classNames(cls.block, {}, [])}>
          <h1
            className={classNames(cls.titles, {}, [])}
          >
            <span className={classNames(cls.span, {}, [])}>ЗНАКИ</span>
            <span className={classNames(cls.span, {}, [])}>СВЕТОФОРЫ</span>
            <span className={classNames(cls.span, {}, [])}>РАЗМЕТКА</span>
          </h1>
          <div className={classNames(cls.content, {}, [])}>
            <p className={classNames(cls.text, {}, [])}>
              Установка знаков, светофоров и нанесение разметки.
              Проектирование и монтаж по нормам ПДД и ГОСТ.
            </p>
            <ul className={classNames(cls.cards, {}, [])}>
              <li className={classNames(cls.card, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>850+</h2>
                <p className={classNames(cls.subtitle, {}, [])}>Светофоров установлено</p>
              </li>
              <li className={classNames(cls.card, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>120 км</h2>
                <p className={classNames(cls.subtitle, {}, [])}>Разметки нанесено</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};
