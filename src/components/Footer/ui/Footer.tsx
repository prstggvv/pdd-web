import cls from './Footer.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import MaxSvg from '../../../shared/assets/images/icons/footer/max.svg';
import { footerSocialLinks } from '../model/footerData';

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
          {footerSocialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(cls.socialLink, {}, [])}
              aria-label={link.label}
              tabIndex={0}
              onKeyDown={handleKeyDownLink}
            >
              {link.id === 'telegram' && (
                <span className={classNames(cls.iconTelegram, {}, [])} aria-hidden="true" />
              )}
              {link.id === 'vk' && (
                <span className={classNames(cls.iconVk, {}, [])} aria-hidden="true" />
              )}
              {link.id === 'max' && (
                <img
                  className={classNames(cls.iconMaks, {}, [])}
                  aria-hidden="true"
                  src={MaxSvg}
                  alt=""
                />
              )}
            </a>
          ))}
        </div>
        <div className={classNames(cls.copyright, {}, [])}>
          © 2022 ООО «КОДД»
        </div>
      </div>
    </footer>
  );
};
