import cls from './InstrComponent.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { instrComponentData } from '../model/instrComponentData';
import Button from '../../../../shared/ui/Button/Button';
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
          <Button
            href='#'
            children='Записаться'
            className={classNames(cls.button, {}, [])}
          />
        </div>
        <div className={classNames(cls.imageWrapper, {}, [])}>
          <img
            alt='#'
            src='https://sun9-73.userapi.com/impf/5dbukgVCXw0pD_Tpdkhbum4ip3WlzMv7NOtRnA/Q1XLiU97Otk.jpg?size=1280x848&quality=96&sign=38da420d5909bb97559a8d65da62be11&c_uniq_tag=TUUQ_PNdphxCPLMeaiH-Kske8wJcuIlePemCWuLjYW4&type=album'
            className={classNames(cls.image, {}, [])}
          />
        </div>
      </div>
    </section>
  )
}