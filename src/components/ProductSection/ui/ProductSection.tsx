import cls from './ProductSection.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { productSectionListData } from '../model/productSectionData';

interface IProductSectionProps {
  className?: string;
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    target.click();
  }
};

export const ProductSection = ({ className }: IProductSectionProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.content, {}, [])}>
          <div className={classNames(cls.titles, {}, [])}>
            <h2 className={classNames(cls.subheading, {}, [])}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <h3 className={classNames(cls.heading, {}, [])}>Наш продукт</h3>
          </div>
          <div className={classNames(cls.separator, {}, [])}></div>

          <ul className={classNames(cls.list, {}, [])}>
            {productSectionListData.map((item, index) => (
              <li key={index} className={classNames(cls.listItem, {}, [])}>
                <span className={classNames(cls.listText, {}, [])}>{item}</span>
              </li>
            ))}
          </ul>

          <div className={classNames(cls.footer, {}, [])}>
            <p className={classNames(cls.footerText, {}, [])}>
              Выполним комплекс работ от разработки и согласования проекта ОДД до реализации проектных решений
            </p>
            <a
              href="#"
              className={classNames(cls.ctaLink, {}, [])}
              tabIndex={0}
              aria-label="Оставить заявку"
              onKeyDown={handleKeyDown}
            >
              <span className={classNames(cls.ctaText, {}, [])}>Оставить заявку</span>
              <span className={classNames(cls.ctaArrow, {}, [])}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
