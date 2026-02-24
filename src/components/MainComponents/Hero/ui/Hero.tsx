import { motion } from 'framer-motion';
import cls from './Hero.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';

interface IHeroProps {
  className?: string;
};

export const Hero = ({ className }: IHeroProps) => {
  return (
    <motion.section
      id='hero'
      className={classNames(cls.section, {}, [className ?? ''])}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={classNames(cls.container, {}, [])}>
        <div
          className={classNames(cls.backImage, {}, [])}></div>
        <motion.div
          className={classNames(cls.block, {}, [])}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className={classNames(cls.titles, {}, [])}
          >
            <motion.span className={classNames(cls.span, {}, [])} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>ЗНАКИ</motion.span>
            <motion.span className={classNames(cls.span, {}, [])} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>СВЕТОФОРЫ</motion.span>
            <motion.span className={classNames(cls.span, {}, [])} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>РАЗМЕТКА</motion.span>
          </h1>
          <motion.div
            className={classNames(cls.content, {}, [])}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
};
