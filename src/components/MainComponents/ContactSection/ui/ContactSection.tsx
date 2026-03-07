import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cls from './ContactSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { Input } from '../../../../shared/ui/Input/Input';
import { Form } from '../../../../shared/ui/Form/Form';
import { YANDEX_MAP_SRC } from '../../../../shared/lib/constants';
import { submitContactForm } from '../../../../shared/lib/api/contactFormApi';

const PHONE_PREFIX = '+7 ';
const PHONE_PLACEHOLDER = '+7 (___) ___-__-__';

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  const rest = digits.startsWith('8') ? digits.slice(1) : digits.startsWith('7') ? digits.slice(1) : digits;
  const ten = rest.slice(0, 10);
  if (ten.length === 0) return PHONE_PREFIX;
  if (ten.length <= 3) return `${PHONE_PREFIX}(${ten}`;
  if (ten.length <= 6) return `${PHONE_PREFIX}(${ten.slice(0, 3)}) ${ten.slice(3)}`;
  return `${PHONE_PREFIX}(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6, 8)}-${ten.slice(8, 10)}`;
}

function getPhoneDigits(displayValue: string): string {
  const digits = displayValue.replace(/\D/g, '');
  if (digits.startsWith('8')) return digits.slice(1).slice(0, 10);
  if (digits.startsWith('7')) return digits.slice(1).slice(0, 10);
  return digits.slice(0, 10);
}

function isPhoneComplete(displayValue: string): boolean {
  return getPhoneDigits(displayValue).length === 10;
}

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(PHONE_PREFIX);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const next = formatPhone(e.target.value);
    setPhone(next);
    setPhoneError('');
  }, []);

  const handlePhoneKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && getPhoneDigits(phone).length <= 1) {
      setPhone(PHONE_PREFIX);
      e.preventDefault();
    }
  }, [phone]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setNameError('');
      setPhoneError('');
      setSubmitError('');
      let valid = true;
      const trimmedName = name.trim();
      if (!trimmedName) {
        setNameError('Введите имя');
        valid = false;
      }
      if (!isPhoneComplete(phone)) {
        setPhoneError('Введите номер в формате +7 (xxx) xxx-xx-xx');
        valid = false;
      }
      if (!valid) return;
      setStatus('sending');
      try {
        const digits = getPhoneDigits(phone);
        const phoneForSend = `+7${digits}`;
        await submitContactForm(trimmedName, phoneForSend);
        setStatus('success');
        setName('');
        setPhone(PHONE_PREFIX);
      } catch (err) {
        setStatus('error');
        setSubmitError(err instanceof Error ? err.message : 'Не удалось отправить заявку.');
      }
    },
    [name, phone]
  );

  return (
    <section
      id='contacts'
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
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

        <div className={classNames(cls.content, {}, [])}>
          <motion.div
            className={classNames(cls.info, {}, [])}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
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
                    href='tel:+79816986397'
                    className={classNames(cls.contactValue, {}, [])}
                  >
                    +7 (981) 698 63 97
                  </a>
                  <a
                    href='tel:+79119950349'
                    className={classNames(cls.contactValue, {}, [])}
                  >
                    +7 (911) 995 03 49
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
                    href='mailto:kodd_crimea@mail.ru'
                    className={classNames(cls.contactValue, {}, [])}
                  >
                    kodd_crimea@mail.ru
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
                    Россия, Республика Крым, Симферополь,<br />
                    проспект Победы, 109А
                  </address>
                  <span className={classNames(cls.contactHint, {}, [])}>Офис и приём заявок по предварительной записи</span>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className={classNames(cls.formBlock, {}, [])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className={cls.formFrame}>
              <Form title="Оставить заявку" onSubmit={handleSubmit}>
                <div className={cls.formRow}>
                  <Input
                    label="Имя"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError('');
                    }}
                    error={nameError}
                    placeholder="Ваше имя"
                    disabled={status === 'sending'}
                    required
                  />
                  <Input
                    label="Номер телефона"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    error={phoneError}
                    placeholder={PHONE_PLACEHOLDER}
                    disabled={status === 'sending'}
                    required
                  />
                </div>
                <AnimatePresence mode="wait">
                  {(status === 'success' || status === 'error') && (
                    <motion.div
                      key={status}
                      className={classNames(cls.formNotification, {}, [
                        status === 'success' ? cls.formNotificationSuccess : cls.formNotificationError,
                      ])}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      {status === 'success' ? (
                        <>
                          <span className={cls.formNotificationIcon} aria-hidden>✓</span>
                          <span>Заявка отправлена</span>
                        </>
                      ) : (
                        <>
                          <span className={cls.formNotificationIcon} aria-hidden>!</span>
                          <span>{submitError || 'Не удалось отправить заявку'}</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className={cls.formActions}>
                  <button
                    type="submit"
                    className={cls.submitBtn}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Отправка…' : 'Отправить заявку'}
                  </button>
                </div>
              </Form>
            </div>
          </motion.div>
        </div>

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
              height='554'
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
