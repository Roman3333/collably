'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title, Input, Button, Checkbox } from '@/shared/ui';
import { registerSchema } from '../../model/validation/registerSchema';
import { ModalSuccess } from '../ModalSuccess/ModalSuccess';
import { ContactForm } from './types';
import Ornament from '@/svg/ornament.svg';
import Eclipse1 from '@/svg/eclipse-1.svg';
import Eclipse2 from '@/svg/eclipse-2.svg';
import styles from './styles.module.scss';

export const Form = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<ContactForm> = async (form) => {
    try {
      alert(JSON.stringify(form, null, 2));
      setisModalOpen(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="form" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Title className={styles.title} variant="secondary" isItalic>
            Начнём с простого — расскажите о себе
          </Title>
          <p className={styles.suptitle}>
            Заполните форму — мы свяжемся с вами, подберём подходящий план и расскажем обо
            всех деталях.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.top}>
              <Input
                className={styles.input}
                placeholder="Название компании"
                message={errors.company?.message}
                {...register('company')}
              />

              <Input
                className={styles.input}
                placeholder="Цель кампании"
                message={errors.target?.message}
                {...register('target')}
              />

              <Input
                className={styles.input}
                placeholder="Примерный бюджет"
                message={errors.budget?.message}
                {...register('budget')}
              />
            </div>

            <div className={styles.bottom}>
              <Input
                className={styles.input}
                placeholder="Сайт / соцсети"
                message={errors.site?.message}
                {...register('site')}
              />

              <Input
                className={styles.input}
                placeholder="Контакт (имя + e‑mail/телефон)"
                message={errors.contact?.message}
                {...register('contact')}
              />
            </div>

            <Checkbox
              className={styles.checkbox}
              checked={watch('agree') === true}
              onCheckedChange={() => setValue('agree', !watch('agree'))}
              message={errors.agree?.message}
              text="Согласен на обработку персональных данных"
            />

            <Button
              className={styles.btn}
              type="submit"
              weight="semibold"
              isLoading={isSubmitting}
              variant="secondary"
              fontSize="m"
            >
              Оставить заявку
            </Button>
          </form>

          <Ornament className={styles.ornament} width={402} height={297} />
          <Eclipse1 className={styles.eclipse1} width={1328} height={699} />
          <Eclipse2 className={styles.eclipse2} width={1022} height={699} />
        </div>
      </div>

      <ModalSuccess isModalOpen={isModalOpen} setIsModalOpen={setisModalOpen} />
    </section>
  );
};
