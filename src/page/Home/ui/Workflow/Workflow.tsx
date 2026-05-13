import { Title } from '@/shared/ui';
import Icon1 from '@/svg/workflow-1.svg';
import Icon2 from '@/svg/workflow-2.svg';
import Icon3 from '@/svg/workflow-3.svg';
import Icon4 from '@/svg/workflow-4.svg';
import Icon5 from '@/svg/workflow-5.svg';
import Icon6 from '@/svg/workflow-6.svg';
import PcLineLeft from '@/svg/arc-pc-left.svg';
import PcLineRight from '@/svg/arc-pc-right.svg';
import PcCircle from '@/svg/circle-pc.svg';
import Lines from '@/svg/lines.svg';
import MobileEclipse from '@/svg/mobile-eclipse.svg';
import styles from './styles.module.scss';

const steps = [
  { id: 1, text: 'Проработка контент-стратегии', Icon: Icon1 },
  { id: 2, text: 'Подбор блогеров по вашей ЦА', Icon: Icon2 },
  { id: 3, text: 'Анализ и проверка блогеров', Icon: Icon3 },
  { id: 4, text: 'Контроль размещения', Icon: Icon4 },
  { id: 5, text: 'Сбор и визуализация статистики', Icon: Icon5 },
  { id: 6, text: 'Юр. сопровождение и маркировка', Icon: Icon6 },
];

export const Workflow = () => {
  return (
    <section id="workflow" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.column}>
            {steps.slice(0, 3).map(({ id, text, Icon }) => (
              <div key={id} className={styles.item}>
                <Icon className={styles.icon} width={62} height={62} />
                <span className={styles.text}>{text}</span>
                <span className={styles.id}>{id}</span>
              </div>
            ))}
          </div>

          <div className={styles.column}>
            <Lines className={styles.lines} width={172} height={108} />
            <Title className={styles.title}>Как мы работаем?</Title>
          </div>

          <div className={styles.column}>
            {steps.slice(3).map(({ id, text, Icon }) => (
              <div key={id} className={styles.item}>
                <Icon className={styles.icon} width={62} height={62} />
                <span className={styles.text}>{text}</span>
                <div className={styles.id}>{id}</div>
              </div>
            ))}
          </div>

          <PcLineLeft className={styles.pcLineLeft} width={320} height={640} />
          <PcCircle className={styles.pcCircle} width={640} height={640} />
          <PcLineRight className={styles.pcLineRight} width={320} height={640} />
          <MobileEclipse className={styles.mobileTop} />
          <MobileEclipse className={styles.mobileBottom} />
        </div>
      </div>
    </section>
  );
};
