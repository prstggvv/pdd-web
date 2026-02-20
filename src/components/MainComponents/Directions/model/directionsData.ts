import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import PlasticaImage from '../../../../shared/assets/images/products/plastica.jpg';
import SignsImage from '../../../../shared/assets/images/products/signs.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';

interface IDirectionsDataProps {
  id: string;
  title: string;
  subtitle: string;
  defaultImage: string;
  hoverImage: string;
}

export const directionsData: IDirectionsDataProps[] = [
  {
    id: 'boxing',
    title: 'г. Симферополь',
    subtitle: 'Разработка постоянной схемы Устройство примыкания парковки к автомобильной дороге общего пользования местного значения',
    defaultImage: SignsImage,
    hoverImage: PlasticaImage,
  },
  {
    id: 'kickboxing',
    title: 'г. Симферополь',
    subtitle: 'Разработка постоянной схемы Устройство примыкания парковки к автомобильной дороге общего пользования местного значения',
    defaultImage: PlasticaImage,
    hoverImage: SignsImage,
  },
  {
    id: 'mma',
    title: 'г. Симферополь',
    subtitle: 'Разработка постоянной схемы Устройство примыкания парковки к автомобильной дороге общего пользования местного значения',
    defaultImage: MarkingsImage,
    hoverImage: LighterImage,
  },
  {
    id: 'bjj',
    title: 'г. Симферополь',
    subtitle: 'Разработка постоянной схемы Устройство примыкания парковки к автомобильной дороге общего пользования местного значения',
    defaultImage: LighterImage,
    hoverImage: MarkingsImage,
  }
];
