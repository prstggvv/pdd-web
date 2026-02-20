import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import PlasticaImage from '../../../../shared/assets/images/products/plastica.jpg';
import SignsImage from '../../../../shared/assets/images/products/signs.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';

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
    imageUrl: SignsImage,
  },
  {
    id: 'lights',
    title: 'Светофоры',
    description: 'Монтаж и обслуживание светофорных объектов',
    imageUrl: LighterImage,
  },
  {
    id: 'marking',
    title: 'Разметка',
    description: 'Нанесение дорожной разметки по нормам ПДД',
    imageUrl: MarkingsImage,
  },
  {
    id: 'plastic',
    title: 'Пластик',
    description: 'Пластиковые ограждения, столбики, конусы',
    imageUrl: PlasticaImage,
  },
];
