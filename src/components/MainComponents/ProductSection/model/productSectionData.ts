import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import SignsImage from '../../../../shared/assets/images/products/signs.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';
import BumpsImage from '../../../../shared/assets/images/products/nerovnost.jpg';
import FencesImage from '../../../../shared/assets/images/products/plastica.jpg';
import ParkingImage from '../../../../shared/assets/images/products/parkings.jpg';

export interface IProductCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const PRODUCT_INTRO =
  'Мы выполняем строительно - монтажные работы в сфере обустройства автомобильных дорог — от подготовки схем до монтажа конструкций на объекте.';

export const PRODUCT_CARDS: IProductCard[] = [
  {
    id: 'signs',
    title: 'Дорожные Знаки',
    description: 'Дорожные знаки по ГОСТ 52289-2019 и 32945-2014.',
    imageUrl: SignsImage,
  },
  {
    id: 'parkings',
    title: 'Паркинги',
    description: 'Паркинги для автомобилей.',
    imageUrl: ParkingImage,
  },
  {
    id: 'lights',
    title: 'Светофоры',
    description: 'Светофоры транспортные и пешеходные. АСУДД, светофоры Т7.',
    imageUrl: LighterImage,
  },
  {
    id: 'marking',
    title: 'Дорожная Разметка',
    description: 'Дорожная разметка краской, термопластиком, холодным пластиком по ГОСТ 51256-2018.',
    imageUrl: MarkingsImage,
  },
  {
    id: 'speed-bumps',
    title: 'Искуственные неровности',
    description: 'Устройства искуственных неровностей по нормативам.',
    imageUrl: BumpsImage,
  },
  {
    id: 'fences',
    title: 'Прочие элементы ТСОДД, обустройства',
    description: 'От ограждений металлоконструкции до обустройства дорог.',
    imageUrl: FencesImage,
  },
];
