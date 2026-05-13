import { Title } from '@/shared/ui';
import Vector from '@/svg/vector.svg';
import styles from './styles.module.scss';

const items = [
  {
    id: 1,
    title: 'Вы оставляете заявку',
    text: 'Заполняете краткий или расширенный бриф о компании и задачах кампании',
  },
  {
    id: 2,
    title: 'Определяем цели и KPI',
    text: 'Фиксируем задачи: охват, продажи, узнаваемость бренда или трафик',
  },
  {
    id: 3,
    title: 'Анализируем аудиторию',
    text: 'Формируем портреты целевой аудитории и определяем площадки, где она активна',
  },
  {
    id: 4,
    title: 'Подбираем и проверяем',
    text: 'Анализируем аудиторию блогеров, вовлечённость, отсеиваем накрутки и формируем список для публикаций.',
  },
  {
    id: 5,
    title: 'Сопровождаем публикации',
    text: 'Следим за сроками, корректностью интеграций и качеством размещений',
  },
  {
    id: 6,
    title: 'Предоставляем отчёт',
    text: 'Собираем статистику, анализируем результаты и предлагаем улучшения',
  },
];

export const Steps = () => {
  return (
    <section className="section">
      <div className="container">
        <Title className={styles.title}>Этапы работы</Title>
        <div className={styles.steps}>
          {items.map(({ id, title, text }) => (
            <div key={id} className={styles.step}>
              <div className={styles.top}>Шаг #{id}</div>

              <Title weight="medium" className={styles.suptitle}>
                {title}
              </Title>

              <p className={styles.text}>{text}</p>

              <Vector className={styles.ornament} width={230} height={130} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
