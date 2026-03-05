import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import type { IDirectionsDataProps } from '../../Directions/model/directionsData';
import cls from './DirectionsPopup.module.css';

const SWIPE_THRESHOLD = 50;

interface IDirectionsPopupProps {
  isOpen: boolean;
  direction: IDirectionsDataProps | null;
  onClose: () => void;
}

export const DirectionsPopup = ({ isOpen, direction, onClose }: IDirectionsPopupProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const touchStartX = useRef(0);

  const slideCount = useMemo(
    () => (direction?.galleryImages?.length ?? 5),
    [direction?.galleryImages?.length]
  );

  const goPrev = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const delta = touchStartX.current - endX;
      if (Math.abs(delta) >= SWIPE_THRESHOLD) {
        if (delta > 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !direction) return;
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setTrackOffset(-slideIndex * el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen, direction, slideIndex]);

  const overlayTransition = useMemo(
    () => ({ duration: 0.22, ease: 'easeOut' as const }),
    []
  );
  const popupTransition = useMemo(
    () => ({ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] as const }),
    []
  );

  return (
    <AnimatePresence>
      {isOpen && direction && (
        <motion.div
          className={cls.popupOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          onClick={onClose}
        >
          <motion.div
            className={cls.popup}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={popupTransition}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={cls.popupClose}
              onClick={onClose}
              aria-label="Закрыть"
            >
              ×
            </button>
            <div className={cls.popupGrid}>
              <div className={cls.popupLeft}>
                <h2 id="popup-title" className={cls.popupTitle}>
                  {direction.title}
                </h2>
                <p className={cls.popupDescription}>{direction.description}</p>
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
                  <div
                    ref={wrapRef}
                    className={cls.sliderWrap}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
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
                      {direction.galleryImages.map((src, idx) => (
                        <div key={idx} className={cls.sliderSlide}>
                          <img
                            src={src}
                            alt={`${direction.title} — фото ${idx + 1}`}
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
  );
};
