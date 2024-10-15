import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  company: z.object({
    name: z.string(),
  }),
  address: z.object({
    street: z.string(),
    city: z.string(),
    suite: z.string(),
    zipcode: z.string(),
  }),
  phone: z.string(),
  website: z.string(),
});

export type User = z.infer<typeof userSchema>;
