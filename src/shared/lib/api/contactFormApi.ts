import {
  CONTACT_FORM_WEBHOOK_URL,
  CONTACT_FORM_EMAIL,
} from '../constants';

export type ContactFormPayload = {
  name: string;
  phone: string;
  to: string;
};

export async function submitContactForm(
  name: string,
  phone: string
): Promise<void> {
  if (!CONTACT_FORM_WEBHOOK_URL) {
    throw new Error(
      'Укажите VITE_CONTACT_FORM_WEBHOOK в .env (URL webhook или Formspree). Письма будут отправляться на vany4golos@yandex.ru.'
    );
  }
  const res = await fetch(CONTACT_FORM_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      phone,
      to: CONTACT_FORM_EMAIL,
    } as ContactFormPayload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Ошибка ${res.status}`);
  }
}
