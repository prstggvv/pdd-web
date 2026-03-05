import SimferopolImage from '../../../../shared/assets/images/projects/simferopol.webp';
import YaltaImage from '../../../../shared/assets/images/projects/yalta.webp';
import PheodosiaImage from '../../../../shared/assets/images/projects/pheodosia.jpg';
import KerchImage from '../../../../shared/assets/images/projects/kerch.webp';
import Photo1 from '../../../../shared/assets/images/photos/first.jpg';
import Photo2 from '../../../../shared/assets/images/photos/second.jpg';
import Photo3 from '../../../../shared/assets/images/photos/signs.jpg';
import Photo4 from '../../../../shared/assets/images/photos/object.jpg';
import Photo5 from '../../../../shared/assets/images/photos/markings.jpg';
import Photo6 from '../../../../shared/assets/images/photos/plastica.jpg';
import Photo7 from '../../../../shared/assets/images/photos/nerovnost.jpg';
import Photo8 from '../../../../shared/assets/images/photos/1222222.jpg';
import Photo9 from '../../../../shared/assets/images/photos/123213123.jpg';
import Photo10 from '../../../../shared/assets/images/photos/11.jpg';
import Photo11 from '../../../../shared/assets/images/photos/done.jpg';

export interface IDirectionsDataProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  defaultImage: string;
  /** Ровно 5 фото для карусели в попапе — один слайд = одно фото */
  galleryImages: string[];
}

export const directionsData: IDirectionsDataProps[] = [
  {
    id: 'simferopol',
    title: 'г. Симферополь',
    subtitle: 'Разработка постоянной схемы',
    description: 'Устройство примыкания парковки к автомобильной дороге общего пользования местного значения. Реализованы работы по разработке постоянной схемы организации дорожного движения.',
    defaultImage: SimferopolImage,
    galleryImages: [Photo1, Photo2, Photo3, Photo4, Photo5],
  },
  {
    id: 'yalta',
    title: 'г. Ялта',
    subtitle: 'Разработка проектной схемы ОДД',
    description: 'Разработка проектной схемы организации дорожного движения торгового центра. Включает размещение знаков, разметки и светофорного оборудования.',
    defaultImage: YaltaImage,
    galleryImages: [Photo3, Photo4, Photo5, Photo6, Photo7],
  },
  {
    id: 'feodosiya',
    title: 'г. Феодосия',
    subtitle: 'Строительство АЗС',
    description: 'Строительство и эксплуатация автозаправочной станции в полосе отвода автомобильной дороги. Выполнены проектные и монтажные работы.',
    defaultImage: PheodosiaImage,
    galleryImages: [Photo5, Photo6, Photo7, Photo8, Photo9],
  },
  {
    id: 'kerch',
    title: 'г. Керчь',
    subtitle: 'Временная схема ОДД',
    description: 'Разработка временной схемы на период производства строительно-монтажных работ. Обеспечена безопасность движения на объекте.',
    defaultImage: KerchImage,
    galleryImages: [Photo7, Photo8, Photo9, Photo10, Photo11],
  },
];
