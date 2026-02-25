import cls from './Footer.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface IFooterProps {
  className?: string;
}

const handleKeyDownLink = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    (e.currentTarget as HTMLAnchorElement).click();
  }
};

export const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={classNames(cls.footer, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.col, {}, [cls.colInfo])}>
          <p className={classNames(cls.inn, {}, [])}>ИНН: 9102156500</p>
          <address className={classNames(cls.address, {}, [])}>
            проспект Победы, 109А, 295017, г. Симферополь
          </address>
        </div>
        <div className={classNames(cls.col, {}, [cls.colSocial])}>
          <a
            href="https://t.me/example"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(cls.socialLink, {}, [])}
            aria-label="Telegram"
            tabIndex={0}
            onKeyDown={handleKeyDownLink}
          >
            <span className={classNames(cls.iconTelegram, {}, [])} aria-hidden="true" />
          </a>
          <a
            href="https://maks.one/example"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(cls.socialLink, {}, [])}
            aria-label="Макс"
            tabIndex={0}
            onKeyDown={handleKeyDownLink}
          >
            <span className={classNames(cls.iconMaks, {}, [])} aria-hidden="true">M</span>
          </a>
        </div>
      </div>
      <div className={classNames(cls.copyright, {}, [])}>
        © 2022 ООО «Дорожная Безопасность»
      </div>
    </footer>
  );
};
