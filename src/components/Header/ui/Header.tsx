import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cls from './Header.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';
import { NavMenu } from '../../NavMenu';
import { scrollToSection } from '../../../shared/lib/scrollToSection/scrollToSection';
import type { INavItem } from '../../NavMenu';

const NAV_ITEMS: INavItem[] = [
  { href: '#problems', label: 'Проблемы и решения' },
  { href: '#about', label: 'О нас' },
  { href: '#partners', label: 'Наше преимущество' },
  { href: '#product', label: 'Наш продукт' },
  { href: '#projects', label: 'Наши проекты' },
  { href: '#contacts', label: 'Контакты' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const },
  },
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
      <header
        ref={headerRef}
        className={classNames(cls.header, { [cls.scrolled]: scrolled }, [className ?? ''])}
        style={menuOpen ? { zIndex: 1001 } : undefined}
      >
        <motion.div
          className={classNames(cls.container, {}, [])}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.a
            href='#hero'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className={classNames(cls.logo, {}, [])}
            aria-label='КОДД — на главную'
            variants={itemVariants}
          >
            <span className={classNames(cls.logoText, {}, [])}>КОДД</span>
          </motion.a>
          <motion.nav
            className={classNames(cls.nav, {}, [])}
            variants={itemVariants}
          >
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={classNames(cls.link, {}, [])}
                onClick={handleSmoothScroll}
                variants={navItemVariants}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
          <motion.div
            className={classNames(cls.contact, {}, [])}
            variants={itemVariants}
          >
            <a href='tel:+79782176422' className={classNames(cls.contactLink, {}, [])}>
              +7 (978) 217 64 22
            </a>
            <a href='mailto:trafsaf@yandex.ru' className={classNames(cls.contactLink, {}, [])}>
              trafsaf@yandex.ru
            </a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <BurgerButton
              className={classNames(cls.button, {}, [])}
              menuOpen={menuOpen}
              handleBurgerClick={handleBurgerClick}
              handleKeyDown={handleKeyDown}
            />
          </motion.div>
        </motion.div>
      </header>
      <NavMenu
        isOpen={menuOpen}
        onClose={handleNavLinkClick}
        items={NAV_ITEMS}
      />
    </>
  );
};
