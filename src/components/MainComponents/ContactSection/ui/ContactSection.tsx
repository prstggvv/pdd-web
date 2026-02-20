import cls from './ContactSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IContactSectionProps {
  className?: string;
}

const YANDEX_MAP_SRC =
  'https://yandex.ru/map-widget/v1/?from=api-maps&ll=34.124298%2C44.965854&mode=routes&origin=jsapi_2_1_79&rtext=~44.965758%2C34.127123&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNLYIIQhXw3DNC&utm_source=jsapi&z=14';

export const ContactSection = ({ className }: IContactSectionProps) => {
  return (
    <section id="contacts" className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <Titles
            uptitle="КОНТАКТЫ"
            title="Как нас найти"
            dark={false}
            className={classNames(cls.titles, {}, [])}
          />
          <p className={classNames(cls.intro, {}, [])}>
            Мы находимся в центре Симферополя. Звоните, пишите или приезжайте — будем рады ответить на вопросы и обсудить ваш проект.
          </p>

          <div className={classNames(cls.contactList, {}, [])}>
            <div className={classNames(cls.contactItem, {}, [])}>
              <span className={classNames(cls.icon, {}, [cls.iconPhone])} aria-hidden="true" />
              <div className={classNames(cls.contactBody, {}, [])}>
                <span className={classNames(cls.contactLabel, {}, [])}>Телефон</span>
                <a
                  href="tel:+79782176422"
                  className={classNames(cls.contactValue, {}, [])}
                  aria-label="Позвонить"
                >
                  +7 (978) 217 64 22
                </a>
                <span className={classNames(cls.contactHint, {}, [])}>Ежедневно с 9:00 до 18:00</span>
              </div>
            </div>

            <div className={classNames(cls.contactItem, {}, [])}>
              <span className={classNames(cls.icon, {}, [cls.iconEmail])} aria-hidden="true" />
              <div className={classNames(cls.contactBody, {}, [])}>
                <span className={classNames(cls.contactLabel, {}, [])}>Почта</span>
                <a
                  href="mailto:trafsaf@yandex.ru"
                  className={classNames(cls.contactValue, {}, [])}
                  aria-label="Написать на почту"
                >
                  trafsaf@yandex.ru
                </a>
                <span className={classNames(cls.contactHint, {}, [])}>Ответим в течение рабочего дня</span>
              </div>
            </div>

            <div className={classNames(cls.contactItem, {}, [])}>
              <span className={classNames(cls.icon, {}, [cls.iconAddress])} aria-hidden="true" />
              <div className={classNames(cls.contactBody, {}, [])}>
                <span className={classNames(cls.contactLabel, {}, [])}>Адрес</span>
                <address className={classNames(cls.contactValue, {}, [cls.addressText])}>
                  ИНДЕКС 295000<br />
                  Россия, Республика Крым, Симферополь,<br />
                  проспект Победы, 109А
                </address>
                <span className={classNames(cls.contactHint, {}, [])}>Офис и приём заявок по предварительной записи</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(cls.mapWrap, {}, [])}>
          <div className={classNames(cls.mapInner, {}, [])}>
            <iframe
              src={YANDEX_MAP_SRC}
              width="560"
              height="711"
              frameBorder="0"
              allowFullScreen
              title="Карта: проспект Победы, 109А, Симферополь"
              className={classNames(cls.mapIframe, {}, [])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
