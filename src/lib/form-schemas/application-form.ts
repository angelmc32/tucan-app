import * as z from "zod";

export const applicationFormSchema = z.object({
  name: z.string().min(5, {
    message: "tu nombre debe de tener al menos 5 caracteres",
  }),
  email: z.string().email("introduce un correo electrónico válido"),
  favoriteFruit: z.string().min(2, {
    message: "debes introducir cuál es tu fruta favorita",
  }),
  city: z.string().min(2, {
    message: "debes introducir la ciudad/región donde pasas más tiempo",
  }),
  country: z.string().min(3, {
    message: "debes introducir el país donde pasas más tiempo",
  }),
  primaryRole: z.string().min(5, {
    message: "debes introducir cuál es tu superpoder (rol principal)",
  }),
  professionalProfile: z.string().min(2, {
    message: "debes introducir cuál tu perfil profesional",
  }),
  isStudent: z.boolean(),
  githubUsername: z.string().optional(),
  xUsername: z.string().optional(),
  telegramUsername: z.string().optional(),
  isBuilding: z.boolean(),
  projectName: z.string().optional(),
  projectCategory: z.string().optional(),
  projectTweetPitch: z
    .string()
    .min(140, {
      message: "debes introducir cuál es tu fruta favorita",
    })
    .optional(),
  projectWebsite: z.string().url().optional(),
  projectNetworks: z.array(z.string()).optional(),
});
