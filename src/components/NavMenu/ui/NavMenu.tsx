import { useEffect, useRef, useCallback, useState } from 'react';
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

export const NavMenu = ({ isOpen, onClose, items, className }: INavMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      setIsClosing(false);
      setIsVisible(true);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsOpening(true);
        });
      });
    } else if (isVisible) {
      setIsOpening(false);
      setIsClosing(true);
      closeTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        closeTimeoutRef.current = null;
      }, CLOSE_ANIMATION_MS);
    }
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [isOpen, isVisible]);

  useEffect(() => {
    if (!isOpen || !isVisible || isClosing) return;
    const t = requestAnimationFrame(() => {
      firstLinkRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(t);
  }, [isOpen, isVisible, isClosing]);

  useEffect(() => {
    if (!isVisible || isClosing) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    return () => {
      previouslyFocused?.focus();
    };
  }, [isVisible, isClosing]);

  if (!isVisible) return null;

  return (
    <div
      className={classNames(cls.overlay, { [cls.closing]: isClosing, [cls.opening]: isOpening }, [className ?? ''])}
      role="dialog"
      aria-modal="true"
      aria-label="Навигация"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={classNames(cls.backdrop, {}, [])}
        onClick={onClose}
        aria-label="Закрыть меню"
        tabIndex={-1}
      />
      <div id="mobile-nav" className={classNames(cls.panel, { [cls.closing]: isClosing, [cls.opening]: isOpening }, [])}>
        <nav className={classNames(cls.nav, {}, [])}>
          {items.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              className={classNames(cls.link, {}, [])}
              style={{ animationDelay: isClosing ? '0ms' : `${120 + index * 80}ms` }}
              onClick={handleLinkClick}
              tabIndex={0}
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={classNames(cls.contactBlock, {}, [])}>
          <a
            href="tel:+79782176422"
            className={classNames(cls.contactLink, {}, [])}
            onClick={onClose}
            aria-label="Позвонить"
          >
            +7 (978) 217 64 22
          </a>
          <a
            href="mailto:trafsaf@yandex.ru"
            className={classNames(cls.contactLink, {}, [])}
            onClick={onClose}
            aria-label="Написать на почту"
          >
            trafsaf@yandex.ru
          </a>
        </div>
      </div>
    </div>
  );
};
