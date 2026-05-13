import { Carousel } from '../Carousel/Carousel';
import { Workflow } from '../Workflow/Workflow';
import { Cases } from '../Cases/Cases';
import { Why } from '../Why/Why';
import { Steps } from '../Steps/Steps';
import { Faq } from '../Faq/Faq';
import { Form } from '../Form/Form';

export const Home = () => {
  return (
    <>
      <Carousel />

      <Workflow />

      <Cases />

      <Why />

      <Steps />

      <Faq />

      <Form />
    </>
  );
};
