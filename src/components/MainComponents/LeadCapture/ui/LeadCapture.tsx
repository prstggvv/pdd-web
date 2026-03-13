import { useState } from 'react';
import { motion } from 'framer-motion';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { Popup } from '../../Popup';
import { ContactForm } from '../../../../shared/ui/ContactForm';
import cls from './LeadCapture.module.css';

type LeadCaptureVariant = 'default' | 'lightOnDark';

interface ILeadCaptureProps {
  className?: string;
  variant?: LeadCaptureVariant;
}

export const LeadCapture = ({ className, variant = 'default' }: ILeadCaptureProps) => {
  const [open, setOpen] = useState(false);
  const isLightOnDark = variant === 'lightOnDark';

  return (
    <>
      <motion.button
        type="button"
        className={classNames(cls.trigger, { [cls.triggerLightOnDark]: isLightOnDark }, [className ?? ''])}
        onClick={() => setOpen(true)}
        aria-label="Оставить заявку"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className={cls.triggerText}>Оставить заявку</span>
        <span className={cls.arrow} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 5v14M7 12l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.button>
      <Popup isOpen={open} onClose={() => setOpen(false)} title="Оставить заявку">
        <ContactForm />
      </Popup>
    </>
  );
};
