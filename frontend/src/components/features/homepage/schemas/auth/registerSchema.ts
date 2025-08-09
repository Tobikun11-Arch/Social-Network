import { z } from "zod"

export const registerSchema = z.object({
  first_name: z.string().min(1, {
    message: "First name is required.",
  }),
  last_name: z.string().min(1, {
    message: "Last name is required.",
  })
})

export type FormRegister = z.infer<typeof registerSchema>;

export type FormData = z.infer<typeof registerSchema>