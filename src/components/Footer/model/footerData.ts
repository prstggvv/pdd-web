export type FooterSocialId = 'telegram' | 'vk' | 'max';

export interface FooterSocialLink {
  id: FooterSocialId;
  href: string;
  label: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  {
    id: 'telegram',
    href: 'https://t.me/example',
    label: 'Telegram',
  },
  {
    id: 'vk',
    href: 'https://vk.com',
    label: 'VK',
  },
];

