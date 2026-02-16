import cls from './Titles.module.css';
import { classNames } from '../../lib/classNames/classNames';
import { motion } from 'framer-motion';

interface ITitlesData {
  className?: string;
  uptitle: string;
  title: string;
  dark: boolean;
  isVisible: boolean;
}

const Titles = ({
  className,
  uptitle,
  title,
  dark,
  isVisible,
}: ITitlesData) => {
  return (
    <div
      className={classNames(cls.titles, {}, [className ?? ''])}
    >
      <motion.p
        className={classNames(cls.uptitle,
          {
            [cls.dark]: dark
          }, [])}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {uptitle}
      </motion.p>
      <motion.h2
        className={classNames(cls.title,
          {
            [cls.dark]: dark,
            [cls.visible]: isVisible,
          }, [])}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
    </div >
  )
}

export default Titles;
