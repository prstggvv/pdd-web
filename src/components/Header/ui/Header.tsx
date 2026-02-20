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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface IHeaderData {
  className?: string;
}

export const Header = ({ className }: IHeaderData) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleBurgerClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
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
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={classNames(cls.header, { [cls.scrolled]: scrolled }, [className ?? ''])}
        style={menuOpen ? { zIndex: 1001 } : undefined}
      >
        <div className={classNames(cls.container, {}, [])}>
          <a
            href="/"
            className={classNames(cls.logo, {}, [])}
            aria-label="КОДД — на главную"
          >
            <span className={classNames(cls.icon, {}, [])} aria-hidden="true" />
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
            handleBurgerClick={handleBurgerClick}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </motion.header>
      <NavMenu
        isOpen={menuOpen}
        onClose={handleNavLinkClick}
        items={NAV_ITEMS}
      />
    </>
  );
};
