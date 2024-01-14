import React from "react";
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { freshDevBootcampSignupSchema as formSchema } from "@/lib/form-schemas/signupForm";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FreshDevBootcampSignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      background: "",
      ideaPitch: "",
      motivation: "",
      hasTeam: false,
      hasHackathonExperience: false,
      ethereumExperience: "beginner",
      isScholarshipApplicant: false,
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
          name="background"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="background">
                cuéntanos un poco sobre tu trabajo o experiencia construyendo
              </FormLabel>
              <FormDescription>
                ¿qué has ayudado a construir o qué problemas has resuelto?
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="cree un sistema de préstamos en mi trabajo, construí un sito web para un negocio, organicé un evento comunitario para 40 personas, etc..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="ideaPitch"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="ideaPitch">
                ¿qué quieres construir en el hackathon?
              </FormLabel>
              <FormDescription>
                ¿cuál es tu idea o problema que quieres resolver?
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="un sistema de efectivo electrónico usuario-a-usuario"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="motivation"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="motivation">
                ¿cuál es tu principal motivación de asistir al taller y al
                hackathon?
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
          name="ethereumExperience"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="ethereumExperience">
                ¿cuál es tu experiencia con ethereum?
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="principiante, intermedio, experto..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="isScholarshipApplicant"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="projectNetworks">
                ¿estarás aplicando a la beca de "frutas == buidlers" de frutero
                club?
              </FormLabel>
              <FormDescription>
                si no sabes, pon las que más te interesan o gustan
              </FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value ? "true" : "false"}
                  className="space-y-1 pl-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" id="true" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="true">
                      sí
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" id="false" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="false">
                      no
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
