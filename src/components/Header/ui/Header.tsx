import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cls from './Header.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';
import { NavMenu } from '../../NavMenu';
import type { INavItem } from '../../NavMenu';

const NAV_ITEMS: INavItem[] = [
  { href: '#about', label: 'О нас' },
  { href: '#partners', label: 'Партнерам' },
  { href: '#product', label: 'Наш продукт' },
  { href: '#projects', label: 'Наши проекты' },
  { href: '#contacts', label: 'Контакты' },
];

interface IHeaderData {
  className?: string;
}

const SCROLL_THRESHOLD_PERCENT = 0.2;

export const Header = ({ className }: IHeaderData) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleOpenBurger = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const getScrollThreshold = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      return maxScroll * SCROLL_THRESHOLD_PERCENT;
    };

    const updateFixed = () => {
      const threshold = getScrollThreshold();
      setIsFixed(window.scrollY >= threshold);
    };

    updateFixed();
    window.addEventListener('scroll', updateFixed, { passive: true });
    return () => window.removeEventListener('scroll', updateFixed);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        className={classNames(cls.header, { [cls.fixed]: isFixed }, [className ?? ''])}
        initial={false}
        animate={{
          y: isFixed ? 0 : undefined,
          boxShadow: isFixed ? '0 2px 24px rgba(0,0,0,0.25)' : 'none',
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          ...(isFixed ? { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'var(--color-bg)' } : {}),
          ...(menuOpen ? { zIndex: 1001, ...(!isFixed ? { position: 'relative' } : {}) } : {}),
        }}
      >
        <div className={classNames(cls.container, {}, [])}>
          <a
            href="/"
            className={classNames(cls.logo, {}, [])}
            aria-label="КОДД — на главную"
          >
            <span className={classNames(cls.icon, {}, [])} aria-hidden="true"></span>
            <span className={classNames(cls.logoText, {}, [])}>КОДД</span>
          </a>
          <nav className={classNames(cls.nav, {}, [])}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={classNames(cls.link, {}, [])}
                onClick={handleSmoothScroll}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className={classNames(cls.contact, {}, [])}>
            <a href="tel:+79782176422" className={classNames(cls.contactLink, {}, [])}>
              +7 (978) 217 64 22
            </a>
            <a href="mailto:trafsaf@yandex.ru" className={classNames(cls.contactLink, {}, [])}>
              trafsaf@yandex.ru
            </a>
          </div>
          <BurgerButton
            className={classNames(cls.button, {}, [])}
            menuOpen={menuOpen}
            handleBurgerClick={handleOpenBurger}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </motion.header>
      <NavMenu
        isOpen={menuOpen}
        onClose={handleCloseMenu}
        items={NAV_ITEMS}
      />
    </>
  );
};
