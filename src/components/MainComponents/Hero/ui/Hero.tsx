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
        <motion.div
          className={classNames(cls.block, {}, [])}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className={classNames(cls.titles, {}, [])}
          >
            <motion.span
              className={classNames(cls.span, {}, [cls.spanMain])}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Обустройство дорожной инфраструктуры
            </motion.span>
            <motion.span
              className={classNames(cls.spanAccent, {}, [])}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              под ключ без срывов и переделок
            </motion.span>
          </h1>
          <motion.div
            className={classNames(cls.content, {}, [])}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className={classNames(cls.text, {}, [])}>
              Работаем в реальных условиях трафика. Сроки, безопасность и качество под полным контролем.
            </p>
            <ul className={classNames(cls.cards, {}, [])}>
              <li className={classNames(cls.card, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>8000</h2>
                <p className={classNames(cls.subtitle, {}, [])}>Установлено знаков по Крыму</p>
              </li>
              <li className={classNames(cls.card, {}, [])}>
                <h2 className={classNames(cls.heading, {}, [])}>+500 тн.</h2>
                <p className={classNames(cls.subtitle, {}, [])}>Смонтировано металлоконструкции</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
};
