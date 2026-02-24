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
  'Срывы сроков из-за субподрядчиков.',
  'Проекты, которые не работают на объекте.',
  'Ошибки во временных схемах ОДД.',
  'Низкое качество металлоконструкций.',
  'Отсутствие одного ответственного за результат.',
];

export const CAROUSEL_SLIDES: ICarouselSlide[] = [
  {
    id: '1',
    imageUrl: CarouselImg1,
    title: 'Полный цикл без срывов',
    solutionText:
      'Берем работы под ключ: от проектирования до монтажа. Это снимает риски срывов сроков и переделок на объекте.',
  },
  {
    id: '2',
    imageUrl: CarouselImg2,
    title: 'Решения, которые работают на объекте',
    solutionText:
      'Прорабатываем ОДД под реальные условия площадки, чтобы схемы и организация движения работали в практике, а не только на бумаге.',
  },
  {
    id: '3',
    imageUrl: CarouselImg3,
    title: 'Работа в действующем трафике',
    solutionText:
      'Выполняем монтаж знаков, светофоров и разметки без остановки объекта и без критичных помех движению.',
  },
  {
    id: '4',
    imageUrl: CarouselImg4,
    title: 'Собственное производство и контроль качества',
    solutionText:
      'Изготавливаем знаки, опоры и металлоконструкции сами, поэтому держим качество и сроки под контролем одной команды.',
  },
  {
    id: '5',
    imageUrl: CarouselImg5,
    title: 'Один ответственный и инженерная экспертиза',
    solutionText:
      'Назначаем единого ответственного за результат, подключаем инженеров с допусками и учитываем региональную специфику Крыма.',
  },
];
