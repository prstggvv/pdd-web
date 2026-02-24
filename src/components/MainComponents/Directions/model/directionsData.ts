import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';

import SimferopolImage from '../../../../shared/assets/images/projects/simferopol.webp';
import SimferopolHoverImage from '../../../../shared/assets/images/projects/simferopolwork.png';
import YaltaImage from '../../../../shared/assets/images/projects/yalta.webp';
import YaltaHoverImage from '../../../../shared/assets/images/projects/yaltawork.png';
import PheodosiaImage from '../../../../shared/assets/images/projects/pheodosia.jpg';
import PheodosiaHoverImage from '../../../../shared/assets/images/projects/pheodosiawork.png';
import KerchImage from '../../../../shared/assets/images/projects/kerch.webp';
import KerchHoverImage from '../../../../shared/assets/images/projects/kerchwork.png';

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
    defaultImage: SimferopolImage,
    hoverImage: SimferopolHoverImage,
  },
  {
    id: 'kickboxing',
    title: 'г. Ялта',
    subtitle: 'Разработка проектной схемы ОДД торгового центра',
    defaultImage: YaltaImage,
    hoverImage: YaltaHoverImage,
  },
  {
    id: 'mma',
    title: 'г. Феодосия',
    subtitle: 'Строительство и эксплуатация автозаправочной станции", в полосе отвода автомобильной дороги',
    defaultImage: PheodosiaImage,
    hoverImage: PheodosiaHoverImage,
  },
  {
    id: 'bjj',
    title: 'г. Керчь',
    subtitle: 'Разработка временной схемы на период производства строительно-монтажных работ',
    defaultImage: KerchImage,
    hoverImage: KerchHoverImage,
  }
];
