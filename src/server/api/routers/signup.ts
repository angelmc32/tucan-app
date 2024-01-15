// import { TRPCError } from "@trpc/server";
// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { bootcampSignupFormSchema } from "@/lib/form-schemas/signupForm";

export const signupRouter = createTRPCRouter({
  createBootcampSignup: publicProcedure
    .input(bootcampSignupFormSchema)
    .mutation(async ({ ctx, input }) => {
      const newSignup = await ctx.db.bootcampSignupForm.create({
        data: {
          displayName: input.displayName,
          email: input.email,
          favoriteFruit: input.favoriteFruit,
          cityRegion: input.cityRegion,
          country: input.country,
          primaryRole: input.primaryRole,
          professionalProfile: input.professionalProfile,
          website: input.website,
          isStudent: Boolean(input.isStudent === "isStudentTrue"),
          githubUsername: input.githubUsername,
          xUsername: input.xUsername,
          telegramUsername: input.telegramUsername,
          isBuilding: Boolean(input.isBuilding === "isBuildingTrue"),
          background: input.background,
          ideaPitch: input.ideaPitch,
          motivation: input.motivation,
          hasTeam: Boolean(input.hasTeam === "hasTeamTrue"),
          hasHackathonExperience: Boolean(
            input.hasHackathonExperience === "hasHackathonExperienceTrue",
          ),
          ethereumExperience: input.ethereumExperience,
          isScholarshipApplicant: Boolean(
            input.isScholarshipApplicant === "isScholarshipApplicantTrue",
          ),
          hasAcceptedTerms: input.hasAcceptedTerms,
          isVipApplicant: input.isVipApplicant,
        },
      });

      return newSignup;
    }),

  // getProductById: publicProcedure
  //   .input(z.object({ id: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     // Fetch a products by ID from the database using Prisma
  //     const product = await ctx.db.product.findUnique({
  //       where: { id: input.id },
  //     });

  //     if (!product) {
  //       throw new Error("No existe el artículo");
  //     }

  //     return product;
  //   }),

  // getUserProducts: publicProcedure
  //   .input(z.object({ ownerId: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     const products = await ctx.db.product.findMany({
  //       where: { ownerId: input.ownerId },
  //     });

  //     return products;
  //   }),

  // updateProductById: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //       data: z.object({
  //         name: z.string().trim().optional(),
  //         description: z.string().trim().optional(),
  //         image_url: z.string().optional(),
  //         quantity: z.string().trim().optional(),
  //         price: z.string().trim().optional(),
  //         token_address: z.string().optional(),
  //         size: z.string().trim().optional(),
  //         category: z.string().trim().optional(),
  //         brand: z.string().trim().optional(),
  //         projectId: z.string().trim().optional(),
  //       }),
  //     }),
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     // Update a product in the database using Prisma
  //     const updatedProduct = await ctx.db.product.update({
  //       where: { id: input.id },
  //       data: input.data,
  //     });

  //     return updatedProduct;
  //   }),

  // deleteProductById: publicProcedure
  //   .input(z.object({ id: z.string() }))
  //   .mutation(async ({ ctx, input }) => {
  //     // Delete a product from the database using Prisma
  //     const deletedProduct = ctx.db.product.delete({
  //       where: { id: input.id },
  //     });

  //     return deletedProduct;
  //   }),

  // getAllProducts: publicProcedure.query(async ({ ctx }) => {
  //   // Fetch all products from the database using Prisma
  //   const products = ctx.db.product.findMany();
  //   return products;
  // }),
});
