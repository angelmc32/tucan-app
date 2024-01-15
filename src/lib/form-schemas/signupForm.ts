import * as z from "zod";

export const signupFormSchema = z.object({
  displayName: z.string().min(3, {
    message: "tu nombre debe de tener al menos 3 caracteres",
  }),
  email: z.string().email("introduce un correo electrónico válido"),
  isStudent: z
    .string()
    .refine(
      (value: string) =>
        value === "isStudentTrue" || value === "isStudentFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value) => value === "true"),
  favoriteFruit: z
    .string()
    .min(3, {
      message: "debes introducir cuál es tu fruta favorita",
    })
    .optional(),
  cityRegion: z
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
  website: z.string().url({
    message: "debes introducir una liga válida e.g. https://tusitio.com",
  }),
  githubUsername: z.string().optional(),
  xUsername: z.string().optional(),
  telegramUsername: z.string().optional(),
  primaryRole: z.enum(
    [
      "administrative",
      "business",
      "dev",
      "creative",
      "operationsPmo",
      "marketingProduct",
      "researcher",
      "trainee",
    ],
    {
      required_error: "debes introducir cuál es tu superpoder (rol principal)",
    },
  ),
  professionalProfile: z
    .string()
    .min(2, {
      message: "debes introducir cuál tu perfil profesional",
    })
    .optional(),
  isBuilding: z
    .string()
    .refine(
      (value: string) =>
        value === "isBuildingTrue" || value === "isBuildingFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value) => value === "true"),
  background: z.string().min(40, {
    message: "debes introducir al menos 40 caracteres",
  }),
  ideaPitch: z
    .string()
    .min(40, {
      message: "debes introducir al menos 40 caracteres",
    })
    .max(280, {
      message: "debes introducir máximo 280 caracteres",
    }),
  motivation: z.string().min(40, {
    message: "debes introducir al menos 40 caracteres",
  }),
  hasTeam: z
    .string()
    .refine(
      (value: string) => value === "hasTeamTrue" || value === "hasTeamFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value) => value === "true"),
  hasHackathonExperience: z
    .string()
    .refine(
      (value: string) =>
        value === "hasHackathonExperienceTrue" ||
        value === "hasHackathonExperienceFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value) => value === "true"),
  ethereumExperience: z
    .enum(["beginner", "intermediate", "expert"])
    .default("beginner"),
  isScholarshipApplicant: z
    .string()
    .refine(
      (value: string) =>
        value === "isScholarshipApplicantTrue" ||
        value === "isScholarshipApplicantFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value) => value === "true"),
  areTermsAccepted: z.literal(true),
  // .string().refine((value: string) => value === "true" || value === "false", {
  //   message: "debes escoger alguna de las opciones",
  // }),
  // .transform((value) => value === "true"),
  isVipApplicant: z.string().optional(),
});

export const projectCreationSchema = z.object({
  projectName: z.string().optional(),
  projectCategory: z.string().optional(),
  projectTweetPitch: z
    .string()
    .max(140, {
      message: "debes introducir cuál es tu fruta favorita",
    })
    .optional(),
  projectWebsite: z.string().optional(),
  projectNetworks: z.string().optional(),
});

export const freshDevBootcampSignupSchema = z.object({
  background: z.string().min(64),
  ideaPitch: z.string().min(64).max(280),
  motivation: z.string().min(64),
  hasTeam: z.boolean().default(false),
  hasHackathonExperience: z.boolean().default(false),
  ethereumExperience: z
    .enum(["beginner", "intermediate", "expert"])
    .default("beginner"),
  isScholarshipApplicant: z.boolean().default(false),
  githubUsername: z.string().min(64),
  twitterUsername: z.string().min(64),
});
