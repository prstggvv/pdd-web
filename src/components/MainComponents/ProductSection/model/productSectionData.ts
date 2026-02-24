import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import SignsImage from '../../../../shared/assets/images/products/signs.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';
import BumpsImage from '../../../../shared/assets/images/carousel/first.jpg';
import FencesImage from '../../../../shared/assets/images/carousel/second.jpg';

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
    description: 'Дорожные знаки по ГОСТ 52289-2019 и 32945-2014.',
    imageUrl: SignsImage,
  },
  {
    id: 'lights',
    title: 'Светофоры',
    description: 'Светофоры транспортные и пешеходные. АСУДД, светофоры Т7.',
    imageUrl: LighterImage,
  },
  {
    id: 'marking',
    title: 'Разметка',
    description: 'Дорожная разметка краской, термопластиком, холодным пластиком по ГОСТ 51256-2018.',
    imageUrl: MarkingsImage,
  },
  {
    id: 'speed-bumps',
    title: 'Искуственные неровности',
    description: 'Устройства лежачих полицейских и искуственных неровностей по нормативам.',
    imageUrl: BumpsImage,
  },
  {
    id: 'fences',
    title: 'Ограждения и средства организации движения',
    description: 'От ограждений металлоконструкции до обустройства дорог.',
    imageUrl: FencesImage,
  },
];
