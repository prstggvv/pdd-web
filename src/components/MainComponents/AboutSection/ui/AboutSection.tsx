import { motion } from 'framer-motion';
import cls from './AboutSection.module.css';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Titles from '../../../../shared/ui/Titles/Titles';
import { LeadCapture } from '../../LeadCapture';

interface IAboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: IAboutSectionProps) => {
  return (
    <section
      id="about"
      className={classNames(cls.section, {}, [className ?? ''])}
    >
      <div className={classNames(cls.container, {}, [])}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Titles
            uptitle='О нас'
            title='О компании'
            dark={false}
            className={classNames(cls.titles, {}, [])}
          />
        </motion.div>
        <motion.div
          className={classNames(cls.content, {}, [])}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={classNames(cls.textBlock, {}, [])}>
            <motion.p
              className={classNames(cls.lead, {}, [])}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              ООО «КОДД» — эксперты в безопасности дорожного движения и транспортной инфраструктуре.
              Наша команда принимала прямое участие в строительстве трассы «Таврида» (2017–2020 гг.),
              что позволило нам получить практический опыт реализации масштабных инфраструктурных проектов в Крыму.
            </motion.p>
            <motion.p
              className={classNames(cls.lead, {}, [])}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.18 }}
            >
              Мы обладаем опытом работы с ведущими подрядчиками региона: {'\u00A0'}
              <a
                href="https://zaovad.ru/"
                target="_blank"
                rel="noreferrer"
                className={classNames(cls.partnerLink, {}, [])}
              >
                АО{'\u00A0'}«ВАД»
              </a>{'\u00A0'}
              <a
                href="https://zaovad.ru/"
                target="_blank"
                rel="noreferrer"
                className={classNames(cls.partnerLink, {}, [])}
              >
                ООО{'\u00A0'}«Кедр»
              </a>{'\u00A0'}и другими компаниями.
            </motion.p>
            <div className={cls.leadCaptureWrap}>
              <LeadCapture />
            </div>
          </div>
          <motion.ul
            className={classNames(cls.features, {}, [])}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }, hidden: {} }}
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
    </section>
  );
};
