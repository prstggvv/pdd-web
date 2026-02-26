import { motion } from 'framer-motion';
import cls from './InstrComponent.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { scrollToSection } from '../../../../shared/lib/scrollToSection/scrollToSection';
import { instrComponentData } from '../model/instrComponentData';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IInstrComponentProps {
  className?: string;
}

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const InstrComponent = ({ className }: IInstrComponentProps) => {
  return (
    <section id="partners" className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          className={classNames(cls.infoBlock, {}, [])}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06 }}
          >
            <Titles
              uptitle='Наши преимущества'
              title='Как мы работаем'
              dark={true}
            />
          </motion.div>
          <motion.p
            className={classNames(cls.lead, {}, [])}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            Прозрачный процесс из 5 шагов: от анализа до сопровождения. Вы всегда понимаете, что
            происходит на каждом этапе и кто отвечает за результат.
          </motion.p>
          <motion.ul
            className={classNames(cls.list, {}, [])}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {instrComponentData.map((c) => (
              <motion.li
                className={classNames(cls.item, {}, [])}
                key={c.number}
                variants={itemVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <p className={classNames(cls.number, {}, [])}>Шаг {c.number}</p>
                <h3 className={classNames(cls.heading, {}, [])}>{c.title}</h3>
                <p className={classNames(cls.subheading, {}, [])}>{c.subtitle}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.a
            href="#product"
            className={classNames(cls.cta, {}, [])}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('product');
            }}
          >
            Подробнее
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}