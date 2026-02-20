import cls from './Directions.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { directionsData } from '../model/directionsData';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IDirectionsProps {
  className?: string;
}

export const Directions = ({ className }: IDirectionsProps) => {
  return (
    <section id="projects" className={classNames(cls.section, {}, [className ?? ''])}>
      <Titles
        uptitle='Наши проекты'
        title='То что мы реализовали'
        dark={true}
        className={classNames(cls.titles, {}, [])}
      />
      <div className={classNames(cls.container, {}, [])}>
        {directionsData.map((direction) => (
          <div
            key={direction.id}
            className={classNames(cls.panel, {}, [])}
            tabIndex={0}
            aria-label={direction.title}
          >
            <div className={classNames(cls.imageWrapper, {}, [])}>
              <img
                src={direction.defaultImage}
                alt={direction.title}
                className={classNames(cls.defaultImage, {}, [])}
              />
              <img
                src={direction.hoverImage}
                alt={direction.title}
                className={classNames(cls.hoverImage, {}, [])}
              />
            </div>
            <div className={classNames(cls.textWrapper, {}, [])}>
              <h3 className={classNames(cls.panelTitle, {}, [])}>
                {direction.title}
              </h3>
              <p className={classNames(cls.panelSubtitle, {}, [])}>
                {direction.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
