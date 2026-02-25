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
          <div className={classNames(cls.textBlock, {}, [])}>
            <motion.p
              className={classNames(cls.lead, {}, [])}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ООО «КОДД» — эксперты в безопасности дорожного движения и транспортной инфраструктуре.
              Наша команда принимала прямое участие в строительстве трассы «Таврида» (2017–2020 гг.),
              что позволило нам получить практический опыт реализации масштабных инфраструктурных проектов в Крыму.
            </motion.p>
            <motion.p className={classNames(cls.lead, {}, [])}>
              Мы обладаем опытом работы с ведущими подрядчиками региона:
            </motion.p>
            <motion.ul className={classNames(cls.partnerList, {}, [])}>
              <li className={classNames(cls.partnerItem, {}, [])}>
                <a
                  href="https://zaovad.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(cls.partnerLink, {}, [])}
                >
                  АО «ВАД»
                </a>
              </li>
              <li className={classNames(cls.partnerItem, {}, [])}>
                <a
                  href="https://baltmost.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(cls.partnerLink, {}, [])}
                >
                  ООО «Балтмостстрой»
                </a>
              </li>
              <li className={classNames(cls.partnerItem, {}, [])}>
                <a
                  href="https://gas.crimea.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(cls.partnerLink, {}, [])}
                >
                  ГУП РК «Черноморнефтегаз»
                </a>
              </li>
            </motion.ul>
            <motion.p className={classNames(cls.lead, {}, [])}>
              И другими компаниями. Знаем специфику крымских объектов, логистику и требования заказчиков.
            </motion.p>
          </div>
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
                Производим и монтируем технические средства организации дорожного движения (ТСОДД):
                дорожные знаки, рамные и Г-образные опоры, барьерные ограждения, шумозащитные экраны.
              </p>
            </motion.li>
            <motion.li className={classNames(cls.feature, {}, [])} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
              <span className={classNames(cls.featureNum, {}, [])}>02</span>
              <p className={classNames(cls.featureText, {}, [])}>
                Наносим горизонтальную и вертикальную дорожную разметку
                (термопластик, холодный пластик, краска), включая временные схемы ОДД.
              </p>
            </motion.li>
            <motion.li className={classNames(cls.feature, {}, [])} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}>
              <span className={classNames(cls.featureNum, {}, [])}>03</span>
              <p className={classNames(cls.featureText, {}, [])}>
                Выполняем монтаж наружного освещения и сопутствующей инфраструктуры.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
