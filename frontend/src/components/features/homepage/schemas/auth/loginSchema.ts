import { z } from "zod"

export const loginSchema = z.object({
  Email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export type FormData = z.infer<typeof loginSchema>