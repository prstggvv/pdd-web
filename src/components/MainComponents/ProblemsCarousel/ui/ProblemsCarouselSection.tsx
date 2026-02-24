import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import cls from './ProblemsCarouselSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { scrollToSection } from '../../../../shared/lib/scrollToSection/scrollToSection';
import {
  CAROUSEL_SLIDES,
  PROBLEMS_LIST,
  type ICarouselSlide,
} from '../model/problemsCarouselData';

const AUTO_PLAY_MS = 5000;

interface IProblemsCarouselSectionProps {
  className?: string;
}

export const ProblemsCarouselSection = ({ className }: IProblemsCarouselSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [trackOffset, setTrackOffset] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(() => (index + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      setTrackOffset(-currentIndex * w);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [currentIndex]);

  const { ref: swipeRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      (wrapRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      swipeRef(node);
    },
    [swipeRef]
  );

  return (
    <motion.section
      id="problems"
      className={classNames(cls.section, {}, [className ?? ''])}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.problemsColumn, {}, [])}>
          <Titles
            uptitle="ПРОБЛЕМЫ И РЕШЕНИЯ"
            title="Что мы решаем"
            dark={true}
            className={classNames(cls.titles, {}, [])}
          />
          <motion.ul
            className={classNames(cls.problemsList, {}, [])}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {PROBLEMS_LIST.map((problem) => (
              <li key={problem} className={classNames(cls.problemItem, {}, [])}>
                {problem}
              </li>
            ))}
          </motion.ul>
          <motion.a
            href="#product"
            className={classNames(cls.cta, {}, [])}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('product');
            }}
          >
            Подробнее
          </motion.a>
        </div>

        <div className={classNames(cls.carouselColumn, {}, [])}>
          <div className={classNames(cls.arrowsRow, {}, [])}>
            <button
              type="button"
              className={classNames(cls.arrow, {}, [cls.arrowPrev])}
              onClick={goPrev}
              aria-label="Предыдущий слайд"
            />
            <button
              type="button"
              className={classNames(cls.arrow, {}, [cls.arrowNext])}
              onClick={goNext}
              aria-label="Следующий слайд"
            />
          </div>

          <div
            ref={setRef}
            className={classNames(cls.carouselWrap, {}, [])}
            {...swipeHandlers}
          >
            <motion.div
              className={classNames(cls.carouselTrack, {}, [])}
              style={{
                width: `${CAROUSEL_SLIDES.length * 100}%`,
                ['--slides' as string]: CAROUSEL_SLIDES.length,
              }}
              animate={{ x: trackOffset }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {CAROUSEL_SLIDES.map((slide) => (
                <div key={slide.id} className={classNames(cls.slide, {}, [])}>
                  <SlideContent slide={slide} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className={classNames(cls.dots, {}, [])}>
            {CAROUSEL_SLIDES.map((_, index) => (
              <button
                key={CAROUSEL_SLIDES[index].id}
                type="button"
                className={classNames(cls.dot, { [cls.dotActive]: index === currentIndex }, [])}
                onClick={() => goTo(index)}
                aria-label={`Слайд ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

function SlideContent({ slide }: { slide: ICarouselSlide }) {
  return (
    <>
      <div className={classNames(cls.slideImageWrap, {}, [])}>
        <img src={slide.imageUrl} alt="" className={classNames(cls.slideImage, {}, [])} />
        <div className={classNames(cls.slideOverlay, {}, [])} aria-hidden />
      </div>
      <div className={classNames(cls.slideText, {}, [])}>
        <h3 className={classNames(cls.slideTitle, {}, [])}>{slide.title}</h3>
        <p className={classNames(cls.slideSolution, {}, [])}>{slide.solutionText}</p>
      </div>
    </>
  );
}
