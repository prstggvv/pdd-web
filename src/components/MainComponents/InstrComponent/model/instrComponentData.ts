interface IInstrComponentDataProps {
  number: string;
  title: string;
  subtitle: string;
}

export const instrComponentData: IInstrComponentDataProps[] = [
  {
    number: '01',
    title: 'Заявка',
    subtitle: 'Нажмите на кнопку “заполнить форму” для отправки запроса нашему специалисту.'
  },
  {
    number: '02',
    title: 'МЫ СВЯЖЕМСЯ С ВАМИ',
    subtitle: `Наш специалист свяжется с вами по любому
доступному контакту и обсудит
условия сотрудничества.`,
  },
  {
    number: '03',
    title: 'ВЫХОДИМ НА ДОГОВОР',
    subtitle: `Прорабатываем условия договора,подписываем
и приступаем к работе.`
  },
  {
    number: '04',
    title: 'ВЫПОЛНЕНИЕ РАБОТ',
    subtitle: `Наши специалисты предоставят готовый материал, проконсультируют по всем возникшим вопросам`
  }
]