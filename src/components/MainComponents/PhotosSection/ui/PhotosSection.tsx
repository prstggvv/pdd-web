import { useState } from 'react';
import cls from './PhotosSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { Popup } from '../../Popup';
import { PHOTOS_DATA, type IPhotoItem } from '../model/photosData';

interface IPhotosSectionProps {
  className?: string;
}

export const PhotosSection = ({ className }: IPhotosSectionProps) => {
  const [activePhoto, setActivePhoto] = useState<IPhotoItem | null>(null);

  return (
    <section
      id="photos"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          uptitle="Как проходят работы"
          title="Фото с объектов"
          dark={true}
          className={classNames(cls.titles, {}, [])}
        />
        <ul className={classNames(cls.grid, {}, [])}>
          {PHOTOS_DATA.map((photo) => (
            <li key={photo.id} className={classNames(cls.gridItem, {}, [])}>
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
            </li>
          ))}
        </ul>
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
