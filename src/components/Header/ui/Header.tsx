import cls from './Header.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import BurgerButton from '../../../shared/ui/BurgerButton/BurgerButton';
import { useState, useCallback } from 'react';

interface IHeaderData {
  className?: string;
}

export const Header = ({ className }: IHeaderData) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpenBurger = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  }, []);

  return (
    <header className={classNames(cls.header, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <a
          href="/"
          className={classNames(cls.logo, {}, [])}
          aria-label="КОДД — на главную">
          <span className={classNames(cls.icon, {}, [])} aria-hidden="true"></span>
          <span className={classNames(cls.logoText, {}, [])}>
            КОДД
          </span>
        </a>
        <nav className={classNames(cls.nav, {}, [])}>
          <a
            href="#about"
            className={classNames(cls.link, {}, [])}>О нас</a>
          <a
            href="#partners"
            className={classNames(cls.link, {}, [])}>
            Партнерам
          </a>
          <a
            href="#product"
            className={classNames(cls.link, {}, [])}>
            Наш продукт
          </a>
          <a
            href="#projects"
            className={classNames(cls.link, {}, [])}>
            Наши проекты
          </a>
          <a
            href="#contacts"
            className={classNames(cls.link, {}, [])}>
            Контакты
          </a>
        </nav>
        <BurgerButton
          className={classNames(cls.button, {}, [])}
          menuOpen={menuOpen}
          handleBurgerClick={handleOpenBurger}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </header>
  )
};
