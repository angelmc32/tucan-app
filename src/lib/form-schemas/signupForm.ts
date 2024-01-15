import * as z from "zod";

export const bootcampSignupFormSchema = z.object({
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
  // .transform((value: string) => value === "isStudentTrue"),
  cityRegion: z.string().min(2, {
    message: "debes introducir la ciudad/región donde pasas más tiempo",
  }),
  country: z.string().min(3, {
    message: "debes introducir el país donde pasas más tiempo",
  }),
  website: z.string().url({
    message: "debes introducir una liga válida e.g. https://tusitio.com",
  }),
  favoriteFruit: z.string().min(3, {
    message: "debes introducir cuál es tu fruta favorita",
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
  professionalProfile: z.string().min(2, {
    message: "debes introducir cuál tu perfil profesional",
  }),
  isBuilding: z
    .string()
    .refine(
      (value: string) =>
        value === "isBuildingTrue" || value === "isBuildingFalse",
      {
        message: "debes escoger alguna de las opciones",
      },
    ),
  // .transform((value: string) => value === "isBuildingTrue"),
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
  // .transform((value: string) => value === "hasTeamTrue"),
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
  // .transform((value: string) => value === "hasHackathonExperienceTrue"),
  background: z.string().min(40, {
    message: "debes introducir al menos 40 caracteres",
  }),
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
  // .transform((value: string) => value === "isScholarshipApplicantTrue"),
  hasAcceptedTerms: z.literal(true),
  // .string().refine((value: string) => value === "true" || value === "false", {
  //   message: "debes escoger alguna de las opciones",
  // }),
  // .transform((value) => value === "true"),
  isVipApplicant: z.string().optional(), // bot detection
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
