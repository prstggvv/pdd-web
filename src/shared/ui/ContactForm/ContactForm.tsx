import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { classNames } from '../../lib/classNames/classNames';
import { Input } from '../Input/Input';
import { Form } from '../Form/Form';
import { submitContactForm } from '../../lib/api/contactFormApi';
import cls from './ContactForm.module.css';

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

export interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const ContactForm = ({ className, onSuccess }: ContactFormProps) => {
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
        onSuccess?.();
      } catch (err) {
        setStatus('error');
        setSubmitError(err instanceof Error ? err.message : 'Не удалось отправить заявку.');
      }
    },
    [name, phone, onSuccess]
  );

  return (
    <div className={classNames(cls.formFrame, {}, [className ?? ''])}>
      <Form title="Оставить заявку" onSubmit={handleSubmit} className={cls.formInner}>
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
  );
};
