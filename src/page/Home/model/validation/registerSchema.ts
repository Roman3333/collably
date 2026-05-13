import { z } from 'zod';

export const registerSchema = z.object({
  company: z.string().optional(),
  target: z.string().optional(),
  budget: z.string().optional(),
  site: z.string().min(1, 'Обязательное поле'),
  contact: z.string().min(1, 'Обязательное поле'),
  agree: z.boolean(),
});
