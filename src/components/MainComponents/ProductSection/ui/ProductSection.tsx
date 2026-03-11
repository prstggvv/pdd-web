import { motion } from 'framer-motion';
import cls from './ProductSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { scrollToSection } from '../../../../shared/lib/scrollToSection/scrollToSection';
import Titles from '../../../../shared/ui/Titles/Titles';
import { PRODUCT_CARDS, PRODUCT_INTRO } from '../model/productSectionData';
import { LeadCapture } from '../../LeadCapture';

interface IProductSectionProps {
  className?: string;
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    (e.currentTarget as HTMLAnchorElement).click();
  }
};

const cardsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const ProductSection = ({ className }: IProductSectionProps) => {
  return (
    <section
      id="product"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          className={classNames(cls.intro, {}, [])}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Titles
            uptitle='Наш продукт'
            title='Комплекс работ по обустройству автомобильных дорог'
            dark={false}
            className={classNames(cls.titles, {}, [])}
          />
          <p className={classNames(cls.introText, {}, [])}>{PRODUCT_INTRO}</p>
          <div className={cls.leadCaptureWrap}>
            <LeadCapture />
          </div>
        </motion.div>

        <motion.div
          className={classNames(cls.cardsGrid, {}, [])}
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {PRODUCT_CARDS.map((card, index) => (
            <motion.article
              key={card.id}
              className={classNames(cls.card, { [cls.cardWide]: index === 0 }, [])}
              tabIndex={0}
              aria-label={card.title}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: 'easeOut' }}
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
                <p className={classNames(cls.cardDescription, {}, [])}>{card.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
