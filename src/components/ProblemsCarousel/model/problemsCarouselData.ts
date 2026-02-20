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
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    title: 'Проект ОДД под ключ',
    solutionText:
      'Разработка и согласование схемы организации дорожного движения в установленные сроки с гарантией прохождения экспертизы.',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1504309092620-4d0ec7265f6d?w=800&q=80',
    title: 'Знаки и разметка',
    solutionText:
      'Установка дорожных знаков и нанесение разметки по нормам ПДД и ГОСТ на объектах любой сложности.',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    title: 'Сопровождение на всех этапах',
    solutionText:
      'От разработки проекта до сдачи в эксплуатацию — единый подрядчик и контроль сроков.',
  },
];
