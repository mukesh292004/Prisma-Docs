import{z} from 'zod';
const validationSchema = z.object({
    id: z.string().uuid(),
    name:z.string().min(3).max(255),
    age:z.number().int().positive(),
    email:z.string().email(),
    });
export default validationSchema;