import cls from './NotFoundPage.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';

interface INotFoundPageData {
  className?: string;
}

const NotFoundPage = ({ className }: INotFoundPageData) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  }

  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <h1 className={classNames(cls.title, {}, [])}>404</h1>
      <p className={classNames(cls.subtitle, {}, [])}>
        Страница не найдена
      </p>
      <button 
        onClick={handleBack}
        className={classNames(cls.button, {}, [])}>
          Назад
      </button>
    </main>
  )
};

export default NotFoundPage;