import {z} from'zod'

export const cepFormSchema = z.object({
    cep: z.string()
    .min(8, 'cep deve ter 8 digitos')
    .refine((cep) => /^\d{5}\d{3}$/.test(cep), {
        message: "cep invalido, deve ter formato 12345678",
    }),
})