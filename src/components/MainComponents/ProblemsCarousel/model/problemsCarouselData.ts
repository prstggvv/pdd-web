import CarouselImg1 from '../../../../shared/assets/images/carousel/12123123123123.jpg';
import CarouselImg2 from '../../../../shared/assets/images/carousel/123213123.jpg';
import CarouselImg3 from '../../../../shared/assets/images/carousel/1222222.jpg';
import CarouselImg4 from '../../../../shared/assets/images/carousel/first.jpg';
import CarouselImg5 from '../../../../shared/assets/images/carousel/second.jpg';

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
    imageUrl: CarouselImg1,
    title: 'Дорожные знаки',
    solutionText:
      'Установка дорожных знаков по ГОСТ на объектах любой сложности.',
  },
  {
    id: '2',
    imageUrl: CarouselImg2,
    title: 'Светофоры',
    solutionText:
      'Монтаж и обслуживание светофорных объектов и ИДН.',
  },
  {
    id: '3',
    imageUrl: CarouselImg3,
    title: 'Дорожная разметка',
    solutionText:
      'Нанесение разметки по нормам ПДД и ГОСТ.',
  },
  {
    id: '4',
    imageUrl: CarouselImg4,
    title: 'Искусственные неровности',
    solutionText:
      'Устройство лежачих полицейских и искусственных неровностей по нормативам.',
  },
  {
    id: '5',
    imageUrl: CarouselImg5,
    title: 'Ограждения и средства организации движения',
    solutionText:
      'Установка ограждений, барьерных систем и прочих средств ОДД.',
  },
];
