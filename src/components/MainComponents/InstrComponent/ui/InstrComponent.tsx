import cls from './InstrComponent.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { scrollToSection } from '../../../../shared/lib/scrollToSection/scrollToSection';
import { instrComponentData } from '../model/instrComponentData';
import Titles from '../../../../shared/ui/Titles/Titles';
import FirstImage from '../../../../shared/assets/images/advantages/imageeee.jpg';

interface IInstrComponentProps {
  className?: string;
}

export const InstrComponent = ({ className }: IInstrComponentProps) => {
  return (
    <section id="partners" className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.infoBlock, {}, [])}>
          <Titles
            uptitle='Наше преимущество'
            title='Почему стоит выбирать нас'
            dark={true}
          />
          <ul className={classNames(cls.list, {}, [])}>
            {instrComponentData.map((c, i) => {
              return (
                <li
                  className={classNames(cls.item, {}, [])}
                  key={i}
                >
                  <p className={classNames(cls.number, {}, [])}>{c.number}</p>
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
        <div className={classNames(cls.imageWrapper, {}, [])}>
          <img
            alt='Картинка'
            src={FirstImage}
            className={classNames(cls.image, {}, [])}
          />
        </div>
      </div>
    </section>
  )
}