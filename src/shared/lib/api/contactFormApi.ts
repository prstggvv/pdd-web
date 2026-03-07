import { CONTACT_FORM_WEBHOOK_URL } from '../constants';

export type ContactFormPayload = {
  name: string;
  phone: string;
};

export async function submitContactForm(
  name: string,
  phone: string
): Promise<void> {
  if (!CONTACT_FORM_WEBHOOK_URL) {
    throw new Error('Не указан URL webhook для формы контактов.');
  }
  const res = await fetch(CONTACT_FORM_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone } as ContactFormPayload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Ошибка ${res.status}`);
  }
}
