import { motion } from 'framer-motion';
import cls from './ContactSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';

import { YANDEX_MAP_SRC } from '../../../../shared/lib/constants';

interface IContactSectionProps {
  className?: string;
}

const contactListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const ContactSection = ({ className }: IContactSectionProps) => {
  return (
    <section
      id='contacts'
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          className={classNames(cls.info, {}, [])}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06 }}
          >
            <Titles
              uptitle='КОНТАКТЫ'
              title='Как нас найти'
              dark={false}
              className={classNames(cls.titles, {}, [])}
            />
          </motion.div>
          <motion.p
            className={classNames(cls.intro, {}, [])}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            Мы находимся в центре Симферополя. Звоните, пишите или приезжайте —
            будем рады ответить на вопросы и обсудить ваш проект.
          </motion.p>

          <motion.ul
            className={classNames(cls.contactList, {}, [])}
            variants={contactListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.li
              className={classNames(cls.contactItem, {}, [])}
              variants={contactItemVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className={classNames(cls.icon, {}, [cls.iconPhone])} aria-hidden="true" />
              <div className={classNames(cls.contactBody, {}, [])}>
                <span className={classNames(cls.contactLabel, {}, [])}>Телефон</span>
                <a
                  href='tel:+79782176422'
                  className={classNames(cls.contactValue, {}, [])}
                >
                  +7 (978) 217 64 22
                </a>
                <span className={classNames(cls.contactHint, {}, [])}>Ежедневно с 9:00 до 18:00</span>
              </div>
            </motion.li>
            <motion.li
              className={classNames(cls.contactItem, {}, [])}
              variants={contactItemVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <span className={classNames(cls.icon, {}, [cls.iconEmail])} aria-hidden="true" />
              <div className={classNames(cls.contactBody, {}, [])}>
                <span className={classNames(cls.contactLabel, {}, [])}>Почта</span>
                <a
                  href='mailto:trafsaf@yandex.ru'
                  className={classNames(cls.contactValue, {}, [])}
                >
                  trafsaf@yandex.ru
                </a>
                <span className={classNames(cls.contactHint, {}, [])}>Ответим в течение рабочего дня</span>
              </div>
            </motion.li>
            <motion.li
              className={classNames(cls.contactItem, {}, [])}
              variants={contactItemVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
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
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className={classNames(cls.mapWrap, {}, [])}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={classNames(cls.mapInner, {}, [])}>
            <iframe
              src={YANDEX_MAP_SRC}
              width='560'
              height='711'
              frameBorder='0'
              allowFullScreen
              title='Карта: проспект Победы, 109А, Симферополь'
              className={classNames(cls.mapIframe, {}, [])}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
