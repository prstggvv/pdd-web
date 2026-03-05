import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cls from './Directions.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { directionsData, type IDirectionsDataProps } from '../model/directionsData';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IDirectionsProps {
  className?: string;
}

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const Directions = ({ className }: IDirectionsProps) => {
  const [selectedDirection, setSelectedDirection] = useState<IDirectionsDataProps | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [trackOffset, setTrackOffset] = useState(0);

  const handleClose = useCallback(() => {
    setSelectedDirection(null);
    setSlideIndex(0);
  }, []);

  const slideCount = selectedDirection?.galleryImages?.length ?? 5;

  const goPrev = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (!selectedDirection) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedDirection, handleClose]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !selectedDirection) return;
    const update = () => setTrackOffset(-slideIndex * el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [slideIndex, selectedDirection]);

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
            role="button"
            aria-label={`${direction.title}. Открыть подробнее`}
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => {
              setSelectedDirection(direction);
              setSlideIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedDirection(direction);
                setSlideIndex(0);
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
              <p className={classNames(cls.panelSubtitle, {}, [])}>
                {direction.subtitle}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {selectedDirection && (
          <motion.div
            className={cls.popupOverlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={handleClose}
          >
            <motion.div
              className={cls.popup}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={cls.popupClose}
                onClick={handleClose}
                aria-label="Закрыть"
              >
                ×
              </button>
              <div className={cls.popupGrid}>
                <div className={cls.popupLeft}>
                  <h2 id="popup-title" className={cls.popupTitle}>
                    {selectedDirection.title}
                  </h2>
                  <p className={cls.popupDescription}>
                    {selectedDirection.description}
                  </p>
                </div>
                <div className={cls.popupRight}>
                  <div className={cls.sliderRow}>
                    <div className={cls.sliderArrows}>
                      <button
                        type="button"
                        className={classNames(cls.sliderArrow, {}, [cls.sliderArrowPrev])}
                        onClick={goPrev}
                        aria-label="Предыдущий слайд"
                      />
                      <button
                        type="button"
                        className={classNames(cls.sliderArrow, {}, [cls.sliderArrowNext])}
                        onClick={goNext}
                        aria-label="Следующий слайд"
                      />
                    </div>
                    <div ref={wrapRef} className={cls.sliderWrap}>
                      <motion.div
                        className={cls.sliderTrack}
                        style={{
                          width: `${slideCount * 100}%`,
                          ['--slides' as string]: slideCount,
                        }}
                        animate={{ x: trackOffset }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        role="region"
                        aria-label="Галерея фотографий"
                      >
                        {selectedDirection.galleryImages.map((src, idx) => (
                          <div key={idx} className={cls.sliderSlide}>
                            <img
                              src={src}
                              alt={`${selectedDirection.title} — фото ${idx + 1}`}
                              className={cls.sliderImage}
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
