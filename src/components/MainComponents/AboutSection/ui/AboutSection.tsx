import { motion } from 'framer-motion';
import cls from './AboutSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';

interface IAboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: IAboutSectionProps) => {
  return (
    <motion.section
      id="about"
      className={classNames(cls.section, {}, [className ?? ''])}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classNames(cls.container, {}, [])}>
        <Titles
          uptitle='О нас'
          title='О компании'
          dark={false}
          className={classNames(cls.titles, {}, [])}
        />
        <motion.div
          className={classNames(cls.content, {}, [])}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.p
            className={classNames(cls.lead, {}, [])}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ООО «КОДД» — эксперты в безопасности дорожного движения и транспортной инфраструктуре. Мы обеспечиваем безопасность на дорогах, выполняя полный комплекс работ по обустройству объектов транспортной инфраструктуры
          </motion.p>
          <motion.ul
            className={classNames(cls.features, {}, [])}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          >
            <motion.li className={classNames(cls.feature, {}, [])} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
              <span className={classNames(cls.featureNum, {}, [])}>01</span>
              <p className={classNames(cls.featureText, {}, [])}>
                Производим и создаем монтаж технических средств организации дорожного движения (ТСОДД): дорожные знаки, рамные и Г-образные опоры, барьерное ограждение, шумозащитные экраны.
              </p>
            </motion.li>
            <motion.li className={classNames(cls.feature, {}, [])} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
              <span className={classNames(cls.featureNum, {}, [])}>02</span>
              <p className={classNames(cls.featureText, {}, [])}>
                Наносим горизонтальные и вертикальные линии дорожной разметки (термопластик, краска), включая временные схемы.
              </p>
            </motion.li>
            <motion.li className={classNames(cls.feature, {}, [])} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
              <span className={classNames(cls.featureNum, {}, [])}>03</span>
              <p className={classNames(cls.featureText, {}, [])}>
                Установавлиавем и делаем монтаж наружного освещения.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
