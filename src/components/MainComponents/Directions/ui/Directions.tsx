import { motion } from 'framer-motion';
import cls from './Directions.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { directionsData } from '../model/directionsData';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IDirectionsProps {
  className?: string;
}

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const Directions = ({ className }: IDirectionsProps) => {
  return (
    <section
      id='projects'
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Titles
          uptitle='Наши проекты'
          title='То что мы реализовали'
          dark={true}
          className={classNames(cls.titles, {}, [])}
        />
      </motion.div>
      <ul className={classNames(cls.container, {}, [])}>
        {directionsData.map((direction) => (
          <motion.li
            key={direction.id}
            className={classNames(cls.panel, {}, [])}
            tabIndex={0}
            aria-label={direction.title}
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className={classNames(cls.imageWrapper, {}, [])}>
              <img
                src={direction.defaultImage}
                alt={direction.title}
                className={classNames(cls.defaultImage, {}, [])}
              />
              <img
                src={direction.hoverImage}
                alt={direction.title}
                className={classNames(cls.hoverImage, {}, [])}
              />
            </div>
            <div className={classNames(cls.textWrapper, {}, [])}>
              <h3 className={classNames(cls.panelTitle, {}, [])}>
                {direction.title}
              </h3>
              <p className={classNames(cls.panelSubtitle, {}, [])}>
                {direction.subtitle}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
