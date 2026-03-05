import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import cls from './Directions.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { directionsData, type IDirectionsDataProps } from '../model/directionsData';
import Titles from '../../../../shared/ui/Titles/Titles';
import { DirectionsPopup } from '../../DirectionsPopup';

interface IDirectionsProps {
  className?: string;
}

export const Directions = ({ className }: IDirectionsProps) => {
  const [selectedDirection, setSelectedDirection] = useState<IDirectionsDataProps | null>(null);

  const panelVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  const handleClose = useCallback(() => {
    setSelectedDirection(null);
  }, []);

  const handleOpen = useCallback((direction: IDirectionsDataProps) => {
    setSelectedDirection(direction);
  }, []);

  const isPopupOpen = !!selectedDirection;

  return (
    <section
      id="projects"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Titles
          uptitle="Наши проекты"
          title="То что мы реализовали"
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
            role="button"
            aria-label={`${direction.title}. Открыть подробнее`}
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => handleOpen(direction)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpen(direction);
              }
            }}
          >
            <div className={classNames(cls.imageWrapper, {}, [])}>
              <img
                src={direction.defaultImage}
                alt={direction.title}
                className={classNames(cls.defaultImage, {}, [])}
              />
            </div>
            <div className={classNames(cls.textWrapper, {}, [])}>
              <h3 className={classNames(cls.panelTitle, {}, [])}>
                {direction.title}
              </h3>
            </div>
          </motion.li>
        ))}
      </ul>

      <DirectionsPopup
        isOpen={isPopupOpen}
        direction={selectedDirection}
        onClose={handleClose}
      />
    </section>
  );
};
