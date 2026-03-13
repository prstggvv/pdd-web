import { useState } from 'react';
import { motion } from 'framer-motion';
import cls from './PhotosSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { Popup } from '../../Popup';
import { PHOTOS_DATA, type IPhotoItem } from '../model/photosData';

interface IPhotosSectionProps {
  className?: string;
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const PhotosSection = ({ className }: IPhotosSectionProps) => {
  const [activePhoto, setActivePhoto] = useState<IPhotoItem | null>(null);

  return (
    <section
      id="photos"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Titles
            uptitle="Как проходят работы"
            title="Фото с объектов"
            dark={true}
            className={classNames(cls.titles, {}, [])}
          />
        </motion.div>
        <motion.ul
          className={classNames(cls.grid, {}, [])}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PHOTOS_DATA.map((photo) => (
            <motion.li
              key={photo.id}
              className={classNames(cls.gridItem, {}, [])}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <button
                type="button"
                className={classNames(cls.cardButton, {}, [])}
                onClick={() => setActivePhoto(photo)}
                aria-label={`Открыть фото: ${photo.title}`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className={classNames(cls.image, {}, [])}
                />
                <span className={classNames(cls.caption, {}, [])}>{photo.title}</span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Popup
        isOpen={Boolean(activePhoto)}
        imageSrc={activePhoto?.imageUrl ?? ''}
        imageAlt={activePhoto?.title ?? 'Фото работ'}
        title={activePhoto?.title}
        onClose={() => setActivePhoto(null)}
      />
    </section>
  )
};
