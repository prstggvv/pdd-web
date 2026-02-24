import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cls from './Popup.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';

interface IPopupProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  title?: string;
}

export const Popup = ({ isOpen, imageSrc, imageAlt, onClose, title }: IPopupProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={classNames(cls.overlay, {}, [])}
          role="dialog"
          aria-modal="true"
          aria-label={title ?? 'Просмотр фото'}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <motion.div
            className={classNames(cls.modal, {}, [])}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              type="button"
              className={classNames(cls.closeBtn, {}, [])}
              onClick={onClose}
              aria-label="Закрыть окно"
            >
              x
            </button>
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className={classNames(cls.image, {}, [])}
              initial={{ opacity: 0.6, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.7, scale: 1.01 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
            {title && <p className={classNames(cls.caption, {}, [])}>{title}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
