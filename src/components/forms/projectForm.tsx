import React from "react";
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { projectCreationSchema as formSchema } from "@/lib/form-schemas/signupForm";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectCategory: "",
      projectTweetPitch: "",
      projectWebsite: "",
      projectNetworks: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submitting!!!");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-4 text-left"
      >
        <FormField
          name="projectName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectName">
                ¿cómo se llama tu proyecto?
              </FormLabel>
              <FormControl>
                <Input placeholder="piperNet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="projectCategory"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectCategory">
                ¿cuál es la categoría de tu proyecto?
              </FormLabel>
              <FormDescription>
                NFTs, DeFi, Diseño Arquitectónico... debe ser corto (máximo 5
                palabras)
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="plataforma de internet descentralizado"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="projectTweetPitch"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectTweetPitch">
                describe tu proyecto en 140 caracteres o menos
              </FormLabel>
              <FormDescription>
                pitch de elevador, debes transmitir tu idea de manera fácil
              </FormDescription>
              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="un internet descentralizado que utiliza un algoritmo de compresión para mejorar la transferencia de datos"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="projectWebsite"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectWebsite">
                ¿dónde podemos aprender más sobre tu proyecto?
              </FormLabel>
              <FormDescription>
                sitio web, cuenta de twitter, instagram, etc...
              </FormDescription>
              <FormControl>
                <Input placeholder="piedpiper.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="projectNetworks"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectNetworks">
                ¿cuáles cadenas utilizas o vas a utilizar?
              </FormLabel>
              <FormDescription>
                si no sabes, pon las que más te interesan o gustan
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="e.g. ethereum mainnet, avalanche, gnosis chain, starknet..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
