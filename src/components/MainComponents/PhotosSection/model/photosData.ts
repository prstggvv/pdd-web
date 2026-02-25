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
import Photo12 from '../../../../shared/assets/images/photos/prepare.jpg';

export interface IPhotoItem {
  id: string;
  title: string;
  imageUrl: string;
}

export const PHOTOS_DATA: IPhotoItem[] = [
  { id: 'photo-1', title: 'Сдача знаков', imageUrl: Photo1 },
  { id: 'photo-2', title: 'Работы на участке', imageUrl: Photo2 },
  { id: 'photo-3', title: 'Монтаж знаков', imageUrl: Photo3 },
  { id: 'photo-4', title: 'Сдача объекта', imageUrl: Photo4 },
  { id: 'photo-5', title: 'Нанесение разметки', imageUrl: Photo5 },
  { id: 'photo-6', title: 'Производство элементов', imageUrl: Photo6 },
  { id: 'photo-7', title: 'Искусственные неровности', imageUrl: Photo7 },
  { id: 'photo-8', title: 'Контроль выполнения', imageUrl: Photo8 },
  { id: 'photo-9', title: 'Подготовка светофоров', imageUrl: Photo9 },
  { id: 'photo-10', title: 'Производство элементов', imageUrl: Photo10 },
  { id: 'photo-12', title: 'Сдача результата', imageUrl: Photo11 },
  { id: 'photo-13', title: 'Подготовка объекта', imageUrl: Photo12 }
];
