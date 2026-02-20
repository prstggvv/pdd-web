import cls from './ProductSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { PRODUCT_CARDS, PRODUCT_INTRO } from '../model/productSectionData';

interface IProductSectionProps {
  className?: string;
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    (e.currentTarget as HTMLAnchorElement).click();
  }
};

export const ProductSection = ({ className }: IProductSectionProps) => {
  return (
    <section
      id="product"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.intro, {}, [])}>
          <Titles
            uptitle="Чем мы занимаемся"
            title="Наш продукт"
            dark={false}
            className={classNames(cls.titles, {}, [])}
          />
          <p className={classNames(cls.introText, {}, [])}>{PRODUCT_INTRO}</p>
          <a
            href="#contacts"
            className={classNames(cls.ctaLink, {}, [])}
            tabIndex={0}
            aria-label="Оставить заявку"
            onKeyDown={handleKeyDown}
          >
            <span className={classNames(cls.ctaText, {}, [])}>Оставить заявку</span>
            <span className={classNames(cls.ctaArrow, {}, [])}>→</span>
          </a>
        </div>

        <div className={classNames(cls.cardsGrid, {}, [])}>
          {PRODUCT_CARDS.map((card) => (
            <article
              key={card.id}
              className={classNames(cls.card, {}, [])}
              tabIndex={0}
              aria-label={card.title}
            >
              <div className={classNames(cls.cardImageWrap, {}, [])}>
                <img
                  src={card.imageUrl}
                  alt=""
                  className={classNames(cls.cardImage, {}, [])}
                />
                <div className={classNames(cls.cardOverlay, {}, [])} aria-hidden />
              </div>
              <div className={classNames(cls.cardText, {}, [])}>
                <h3 className={classNames(cls.cardTitle, {}, [])}>{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
