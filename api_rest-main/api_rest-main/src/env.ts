import { z } from 'zod'

const nonEmptyString = z
  .string()
  .min(1, { message: 'Set the environment variable' })

const envSchema = z.object({
  PORT: z
    .string()
    .transform((val) => Number(val))
    .optional(),
  NODE_ENV: nonEmptyString,
})

export const env = envSchema.parse(process.env)
