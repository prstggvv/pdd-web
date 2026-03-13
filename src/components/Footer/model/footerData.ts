export type FooterSocialId = 'telegram' | 'vk' | 'max';

export interface FooterSocialLink {
  id: FooterSocialId;
  href: string;
  label: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  {
    id: 'telegram',
    href: 'https://t.me/dd_road',
    label: 'Telegram',
  },
  {
    id: 'vk',
    href: 'https://vk.com/id1104330088',
    label: 'VK',
  },
];

