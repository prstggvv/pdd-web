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

export const PROBLEMS_LIST: string[] = [
  'соблюдение сроков',
  'прозрачность работ',
  'корректная документация',
  'Низкое качество знаков и металлоконструкций.',
  'меньше рисков и переделок',
];

export const CAROUSEL_SLIDES: ICarouselSlide[] = [
  {
    id: '1',
    imageUrl: CarouselImg1,
    title: 'Полный цикл без срывов',
    solutionText:
      'Берём объект под ключ: проектирование, согласование, производство и монтаж. Это исключает разрывы между подрядчиками и гарантирует соблюдение сроков.',
  },
  {
    id: '2',
    imageUrl: CarouselImg2,
    title: 'Проекты, которые работают на практике',
    solutionText:
      'Разрабатываем схемы ОДД с учётом реального трафика, застройки и особенностей площадки. Решения проходят инженерную проверку и применимы на объекте.',
  },
  {
    id: '3',
    imageUrl: CarouselImg3,
    title: 'Безопасная работа в действующем трафике',
    solutionText:
      'Организуем временные схемы движения и выполняем монтаж без полной остановки движения, минимизируя риски и жалобы жителей.',
  },
  {
    id: '4',
    imageUrl: CarouselImg4,
    title: 'Собственное производство и контроль качества',
    solutionText:
      'Изготавливаем дорожные знаки, опоры и металлоконструкции на собственной базе. Контролируем соответствие ГОСТ и качество каждого изделия.',
  },
  {
    id: '5',
    imageUrl: CarouselImg5,
    title: 'Один ответственный за результат',
    solutionText:
      'Назначаем персонального руководителя проекта. Заказчик взаимодействует с одной командой и получает прозрачный контроль всех этапов работ.',
  },
];
