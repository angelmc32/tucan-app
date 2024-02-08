"use client";

import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signupFormSchema as formSchema } from "@/lib/form-schemas/signupForm";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      favoriteFruit: "",
      city: "",
      country: "",
      primaryRole: "",
      professionalProfile: "",
      website: "",
      isStudent: false,
      githubUsername: "",
      xUsername: "",
      telegramUsername: "",
      isBuilding: false,
      projectName: "",
      projectCategory: "",
      projectTweetPitch: "",
      projectWebsite: "",
      projectNetworks: [""],
    },
  });
  console.log(form.formState.errors);
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
        className="space-y-4 text-left"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cómo te conocemos en la comunidad?</FormLabel>
              <FormControl className="py-0">
                <Input placeholder="cosme fulanito" {...field} />
              </FormControl>
              <FormDescription>
                nombre, apodo, pseudónimo, street name...
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es tu correo electrónico?</FormLabel>
              <FormControl>
                <Input placeholder="jared@piedpiper.com" {...field} />
              </FormControl>
              <FormDescription>
                te recomendamos usar un correo que sí uses
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="favoriteFruit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿con cuál fruta te identificas?</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. plátano, mango, fresa, pera, etc..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                fruta favorita, la de tu ex, la que desayunaste, pon la que
                quieras, pero pon una
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="primaryRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es tu "super poder"?</FormLabel>
              <FormDescription>
                escoge el rol en el que mejor te desempeñes
              </FormDescription>
              <FormControl>
                <RadioGroup>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="administrative"
                        id="administrative"
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="administrative">
                      administrativo / legal
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="business" id="business" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="business">
                      negocio / biz dev
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="dev" id="dev" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="dev">
                      desarrollador / técnico
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="creative" id="creative" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="creative">
                      diseño / arte / visuales
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="operationsPmo"
                        id="operationsPmo"
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="operationsPmo">
                      administración de proyectos / operaciones
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="marketingProduct"
                        id="marketingProduct"
                      />
                    </FormControl>
                    <FormLabel
                      className="font-normal"
                      htmlFor="marketingProduct"
                    >
                      producto / marketing
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="researcher" id="researcher" />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor="researcher">
                      investigador / entusiasta
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="professionalProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cómo te presentas profesionalmente?</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. community builder, full stack dev, artista visual, etc..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                este será desplegado en tu perfil
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                muéstranos algo que hayas hecho que te de orgullo
              </FormLabel>
              <FormDescription>
                puede ser tu portafolio, una página web o tu blog... ¡presúmenos
                qué has construido!
              </FormDescription>
              <FormControl>
                <Input placeholder="https://github.com/piedpiper" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isStudent"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col">
                <FormLabel>¿eres estudiante?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={() => {
                        return field.onChange(!field.value);
                      }}
                    />

                    <FormLabel className="text-sm font-normal">
                      sí (tiempo completo o medio-tiempo)
                    </FormLabel>
                  </div>
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="githubUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es tu usuario de github?</FormLabel>
              <FormDescription>
                será desplegado en tu perfil, opcional
              </FormDescription>
              <FormControl>
                <Input placeholder="@fruteroclub" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="xUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es tu usuario de x/twitter?</FormLabel>
              <FormDescription>
                será desplegado en tu perfil, opcional
              </FormDescription>
              <FormControl>
                <Input placeholder="@fruteroclub" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telegramUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es tu usuario de telegram?</FormLabel>
              <FormDescription>
                será desplegado en tu perfil, opcional
              </FormDescription>
              <FormControl>
                <Input placeholder="@fruteroclub" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isBuilding"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col">
                <FormLabel>¿tienes algún proyecto?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={() => {
                        return field.onChange(!field.value);
                      }}
                    />

                    <FormLabel className="text-sm font-normal">
                      ¡sí, estoy construyendo algo!
                    </FormLabel>
                  </div>
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cómo se llama tu proyecto?</FormLabel>
              <FormControl>
                <Input placeholder="piperNet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuál es la categoría de tu proyecto?</FormLabel>
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
          control={form.control}
          name="projectTweetPitch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
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
          control={form.control}
          name="projectWebsite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
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
          control={form.control}
          name="projectNetworks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿cuáles cadenas utilizas o vas a utilizar?</FormLabel>
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
