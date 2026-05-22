import { z } from "zod";

export const createGameSchema = z.object({
  title: z
    .string()
    .min(1, "Título obrigatório")
    .max(100, "Título muito grande"),

  genre: z
    .string()
    .min(1, "Título obrigatório")
    .max(100, "Título muito grande"),

  platform: z.string().min(1, "Plataforma obrigatória"),

  score: z.number().min(0, "Nota mínima é 0").max(10, "Nota máxima é 10"),

  review: z.string().max(500, "Review muito grande"),

  coverUrl: z.string().url("URL inválida").optional(),

  status: z
    .enum(["PLAYING", "COMPLETED", " PLATINUM", "DROPPED", "BACKLOG"])
    .optional(),
});
