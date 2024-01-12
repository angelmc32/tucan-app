import * as z from "zod";

export const signupFormSchema = z.object({
  name: z.string().min(3, {
    message: "tu nombre debe de tener al menos 5 caracteres",
  }),
  email: z.string().email("introduce un correo electrónico válido"),
  favoriteFruit: z
    .string()
    .min(3, {
      message: "debes introducir cuál es tu fruta favorita",
    })
    .optional(),
  city: z
    .string()
    .min(2, {
      message: "debes introducir la ciudad/región donde pasas más tiempo",
    })
    .optional(),
  country: z
    .string()
    .min(3, {
      message: "debes introducir el país donde pasas más tiempo",
    })
    .optional(),
  primaryRole: z
    .string()
    .min(5, {
      message: "debes introducir cuál es tu superpoder (rol principal)",
    })
    .optional(),
  professionalProfile: z
    .string()
    .min(2, {
      message: "debes introducir cuál tu perfil profesional",
    })
    .optional(),
  website: z
    .string()
    .min(2, {
      message: "debes introducir cuál tu perfil profesional",
    })
    .optional(),
  isStudent: z.boolean().default(false).optional(),
  githubUsername: z.string().optional(),
  xUsername: z.string().optional(),
  telegramUsername: z.string().optional(),
  isBuilding: z.boolean().default(false).optional(),
  projectName: z.string().optional(),
  projectCategory: z.string().optional(),
  projectTweetPitch: z
    .string()
    .min(140, {
      message: "debes introducir cuál es tu fruta favorita",
    })
    .optional(),
  projectWebsite: z.string().optional(),
  projectNetworks: z.array(z.string()).optional(),
});
