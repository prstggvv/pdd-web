import cls from './InstrComponent.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { scrollToSection } from '../../../../shared/lib/scrollToSection/scrollToSection';
import { instrComponentData } from '../model/instrComponentData';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IInstrComponentProps {
  className?: string;
}

export const InstrComponent = ({ className }: IInstrComponentProps) => {
  return (
    <section id="partners" className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.infoBlock, {}, [])}>
          <Titles
            uptitle='Наши преимущества'
            title='Как мы работаем'
            dark={true}
          />
          <p className={classNames(cls.lead, {}, [])}>
            Прозрачный процесс из 5 шагов: от анализа до сопровождения. Вы всегда понимаете, что
            происходит на каждом этапе и кто отвечает за результат.
          </p>
          <ul className={classNames(cls.list, {}, [])}>
            {instrComponentData.map((c, i) => {
              return (
                <li
                  className={classNames(cls.item, {}, [])}
                  key={i}
                >
                  <p className={classNames(cls.number, {}, [])}>Шаг {c.number}</p>
                  <h3 className={classNames(cls.heading, {}, [])}>{c.title}</h3>
                  <p className={classNames(cls.subheading, {}, [])}>{c.subtitle}</p>
                </li>
              )
            })}
          </ul>
          <a
            href="#product"
            className={classNames(cls.cta, {}, [])}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('product');
            }}
          >
            Подробнее
          </a>
        </div>
      </div>
    </section>
  )
}