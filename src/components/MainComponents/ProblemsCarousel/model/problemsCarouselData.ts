import LighterImage from '../../../../shared/assets/images/products/lighter.jpg';
import SignsImage from '../../../../shared/assets/images/products/signs.jpg';
import MarkingsImage from '../../../../shared/assets/images/products/markings.jpg';

export interface ICarouselSlide {
  id: string;
  imageUrl: string;
  title: string;
  solutionText: string;
}

export const PROBLEMS_INTRO =
  'Несогласованные схемы ОДД, задержки при согласовании и отсутствие единого подхода к организации движения на объектах создают риски и удорожание проектов.';

export const CAROUSEL_SLIDES: ICarouselSlide[] = [
  {
    id: '1',
    imageUrl: LighterImage,
    title: 'Проект ОДД под ключ',
    solutionText:
      'Разработка и согласование схемы организации дорожного движения в установленные сроки с гарантией прохождения экспертизы.',
  },
  {
    id: '2',
    imageUrl: MarkingsImage,
    title: 'Знаки и разметка',
    solutionText:
      'Установка дорожных знаков и нанесение разметки по нормам ПДД и ГОСТ на объектах любой сложности.',
  },
  {
    id: '3',
    imageUrl: SignsImage,
    title: 'Сопровождение на всех этапах',
    solutionText:
      'От разработки проекта до сдачи в эксплуатацию — единый подрядчик и контроль сроков.',
  },
];
