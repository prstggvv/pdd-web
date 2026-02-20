export interface IProductCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const PRODUCT_INTRO =
  'Разработка и согласование схем ОДД, установка технических средств организации движения, нанесение разметки и производство пластиковых изделий для дорожной инфраструктуры.';

export const PRODUCT_CARDS: IProductCard[] = [
  {
    id: 'signs',
    title: 'Знаки',
    description: 'Изготовление и установка дорожных знаков по ГОСТ',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    id: 'lights',
    title: 'Светофоры',
    description: 'Монтаж и обслуживание светофорных объектов',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
  },
  {
    id: 'marking',
    title: 'Разметка',
    description: 'Нанесение дорожной разметки по нормам ПДД',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
  },
  {
    id: 'plastic',
    title: 'Пластик',
    description: 'Пластиковые ограждения, столбики, конусы',
    imageUrl: 'https://images.unsplash.com/photo-1504309092620-4d0ec7265f6d?w=600&h=400&fit=crop',
  },
];
