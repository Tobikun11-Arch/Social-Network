import {loginSchema} from './schemas/auth/loginSchema';
import z from 'zod';

export type FormLogin = z.infer<typeof loginSchema>;

type ValidationResult =
  | {success: true; data: FormLogin}
  | {success: false; errors: Record<string, string[]>};

export function handleLogin(data: FormLogin): ValidationResult {
  const result = loginSchema.safeParse(data);

  console.log(result);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  return {
    success: true,
    data: result.data
  };
}
