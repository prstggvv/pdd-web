import { useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cls from './NavMenu.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

export interface INavItem {
  href: string;
  label: string;
}

interface INavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: INavItem[];
  className?: string;
}

const CLOSE_ANIMATION_MS = 350;

const overlayTransition = { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const };
const panelTransition = { duration: 0.4, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const };
const panelExitTransition = { duration: 0.25 };

const navVariants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
};

export const NavMenu = ({ isOpen, onClose, items, className }: INavMenuProps) => {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      onClose();
      return;
    }

    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    onClose();

    if (targetElement) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;

      setTimeout(() => {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        });
      }, CLOSE_ANIMATION_MS);
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    }
  }, [isOpen]);

  const handleExitComplete = useCallback(() => {
    previouslyFocusedRef.current?.focus();
  }, []);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <motion.div
          className={classNames(cls.overlay, {}, [className ?? ''])}
          role="dialog"
          aria-modal="true"
          aria-label="Навигация"
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          onAnimationComplete={() => {
            if (isOpen) firstLinkRef.current?.focus({ preventScroll: true });
          }}
        >
          <motion.button
            type="button"
            className={classNames(cls.backdrop, {}, [])}
            onClick={onClose}
            aria-label="Закрыть меню"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ...overlayTransition, delay: 0.05 }}
          />
          <motion.div
            id="mobile-nav"
            className={classNames(cls.panel, {}, [])}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: panelExitTransition }}
            transition={panelTransition}
          >
            <motion.nav
              className={classNames(cls.nav, {}, [])}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {items.map((item, index) => (
                <motion.a
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className={classNames(cls.link, {}, [])}
                  variants={linkVariants}
                  onClick={handleLinkClick}
                  tabIndex={0}
                  aria-label={item.label}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              className={classNames(cls.contactBlock, {}, [])}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              <a
                href="tel:+79816986397"
                className={classNames(cls.contactLink, {}, [])}
                onClick={onClose}
                aria-label="Позвонить по номеру +7 (981) 698 63 97"
              >
                +7 (981) 698 63 97
              </a>
              <a
                href="tel:+79119950349"
                className={classNames(cls.contactLink, {}, [])}
                onClick={onClose}
                aria-label="Позвонить по номеру +7 (911) 995 03 49"
              >
                +7 (911) 995 03 49
              </a>
              <a
                href="mailto:kodd_crimea@mail.ru"
                className={classNames(cls.contactLink, {}, [])}
                onClick={onClose}
                aria-label="Написать на почту kodd_crimea@mail.ru"
              >
                kodd_crimea@mail.ru
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
