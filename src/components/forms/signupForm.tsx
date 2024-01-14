"use client";

import React, { useState } from "react";
import type * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signupFormSchema as formSchema } from "@/lib/form-schemas/signupForm";
import { museoModernoFont } from "@/lib/fonts";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SignupForm() {
  const [step, setStep] = useState("1");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
      email: "",
      favoriteFruit: "",
      cityRegion: "",
      country: "",
      primaryRole: "trainee",
      professionalProfile: "",
      website: "",
      isStudent: "false",
      githubUsername: "",
      xUsername: "",
      telegramUsername: "",
      isBuilding: "false",
      background: "",
      ideaPitch: "",
      motivation: "",
      hasTeam: "false",
      hasHackathonExperience: "false",
      ethereumExperience: "beginner",
      isScholarshipApplicant: "false",
      isVipApplicant: "",
    },
  });

  async function checkRequiredFields() {
    switch (step) {
      case "1":
        return await form.trigger([
          "displayName",
          "email",
          "favoriteFruit",
          "country",
          "cityRegion",
        ]);
      case "2":
        return await form.trigger(["website"]);
      case "3":
        return await form.trigger([
          "primaryRole",
          "professionalProfile",
          "isBuilding",
        ]);
      case "4":
        return await form.trigger([
          "background",
          "ideaPitch",
          "motivation",
          "hasTeam",
          "hasHackathonExperience",
          "ethereumExperience",
          "isScholarshipApplicant",
        ]);
      // return displayName && email && favoriteFruit && country && cityRegion
      //   ? true
      //   : false;
      default:
        return true;
    }
  }

  async function onNavigationClick(value: string) {
    console.log(form.getValues());

    if ((step === "1" && value === "-1") || (step === "5" && value === "1")) {
      return;
    }

    if (value === "-1" || (await checkRequiredFields())) {
      return setStep((Number(step) + Number(value)).toString());
    } else {
      return;
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submitting!!!");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
        <Tabs
          defaultValue="1"
          // onValueChange={(value) => setStep(value)}
          value={step.toString()}
        >
          <TabsList className="w-full justify-around space-x-3 px-0">
            <Button
              size="icon"
              variant="outline"
              disabled={step === "1"}
              onClick={async (event) => {
                event?.preventDefault();
                await onNavigationClick("-1");
              }}
            >
              <ChevronLeft size={16} />
            </Button>
            <div className="space-x-2 hover:cursor-default">
              <TabsTrigger value="1" className="hover:cursor-default">
                1
              </TabsTrigger>
              <TabsTrigger value="2" className="hover:cursor-default">
                2
              </TabsTrigger>
              <TabsTrigger value="3" className="hover:cursor-default">
                3
              </TabsTrigger>
              <TabsTrigger value="4" className="hover:cursor-default">
                4
              </TabsTrigger>
              <TabsTrigger value="5" className="hover:cursor-default">
                5
              </TabsTrigger>
            </div>
            <Button
              size="icon"
              variant="outline"
              disabled={step === "5"}
              onClick={async (event) => {
                event?.preventDefault();
                await onNavigationClick("1");
              }}
            >
              <ChevronRight size={16} />
            </Button>
          </TabsList>
          <TabsContent value="1" className="my-0 space-y-2 px-4 py-6 md:py-4">
            <FormField
              name="displayName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="displayName">
                    ¿cómo te conocemos en la comunidad?
                  </FormLabel>
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
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">
                    ¿cuál es tu correo electrónico?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="jared@piedpiper.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    te recomendamos registar un correo que sí revises
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="isStudent"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel htmlFor="isStudent">¿eres estudiante?</FormLabel>
                    <FormDescription>
                      medio-tiempo o tiempo completo (en una institución
                      educativa)
                    </FormDescription>
                    <FormControl className="py-1">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value ?? "false"}
                        className="space-y-1 pl-2 md:pl-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="true" id="true" />
                          </FormControl>
                          <FormLabel className="font-normal">sí</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="false" id="false" />
                          </FormControl>
                          <FormLabel className="font-normal">no</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            <FormField
              name="favoriteFruit"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="favoriteFruit">
                    ¿con cuál fruta te identificas?
                  </FormLabel>
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
              name="country"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="country">
                    ¿en cuál país pasas la mayor parte de tu tiempo?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="México, Colombia, Guatemala, etc..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cityRegion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="cityRegion">
                    ¿en qué ciudad o región vives?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mérida, Caribe, San Pedro Sula, Bajío, etc..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
          <TabsContent value="2" className="my-0 space-y-2 px-4 py-6 md:py-4">
            <FormField
              name="website"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="website">
                    muéstranos algo que hayas hecho que te enorgullezca
                  </FormLabel>
                  <FormDescription>
                    puede ser tu portafolio, sitio web o tu blog/perfil...
                    ¡presúmenos tus habilidades!
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="https://tusitio.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="githubUsername"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="githubUsername">
                    ¿cuál es tu usuario de github?
                  </FormLabel>
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
              name="xUsername"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="xUsername">
                    ¿cuál es tu usuario de x/twitter?
                  </FormLabel>
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
              name="telegramUsername"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="telegramUsername">
                    ¿cuál es tu usuario de telegram?
                  </FormLabel>
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
          </TabsContent>
          <TabsContent value="3" className="my-0 space-y-2 px-4 py-6 md:py-4">
            <FormField
              name="primaryRole"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel htmlFor="primaryRole">
                    ¿cuál es tu "super poder"?
                  </FormLabel>
                  <FormDescription>
                    escoge el rol en el que mejor te desempeñes
                  </FormDescription>
                  <FormControl className="py-1">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-1 pl-2 md:pl-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="administrative"
                            id="administrative"
                          />
                        </FormControl>
                        <FormLabel
                          className="font-normal"
                          htmlFor="administrative"
                        >
                          administrativo / legal
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="business" id="business" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="business">
                          negocio / biz dev
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="dev" id="dev" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="dev">
                          desarrollador / técnico / código
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="creative" id="creative" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="creative">
                          diseño / arte / visuales
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="operationsPmo"
                            id="operationsPmo"
                          />
                        </FormControl>
                        <FormLabel
                          className="font-normal"
                          htmlFor="operationsPmo"
                        >
                          administración de proyectos / operaciones
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
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
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="researcher" id="researcher" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="researcher">
                          investigador / entusiasta
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="trainee" id="trainee" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="trainee">
                          aún estoy definiendo o aprendiendo
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="professionalProfile"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="professionalProfile">
                    ¿cómo te presentas profesionalmente?
                  </FormLabel>
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
              name="isBuilding"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="space-y-0">
                    <FormLabel htmlFor="isBuilding">
                      ¿tienes algún proyecto?
                    </FormLabel>
                    <FormControl className="py-1">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value ?? "false"}
                        className="space-y-1 pl-2 md:pl-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="true" id="true" />
                          </FormControl>
                          <FormLabel className="font-normal" htmlFor="true">
                            sí, estoy construyendo algo
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="false" id="false" />
                          </FormControl>
                          <FormLabel className="font-normal" htmlFor="false">
                            no, todavía no me animo
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </TabsContent>
          <TabsContent value="4" className="my-0 space-y-2 px-4 py-6 md:py-4">
            <FormField
              name="background"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="background">
                    cuéntanos un poco sobre tu trabajo o experiencia
                    construyendo
                  </FormLabel>
                  <FormDescription>
                    ¿qué has ayudado a construir o qué problemas has resuelto?
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder="cree un sistema de préstamos en mi trabajo, construí un sito web para un negocio, organicé un evento comunitario para 40 personas, etc..."
                      rows={4}
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
                    <Textarea
                      placeholder="un sistema de efectivo electrónico usuario-a-usuario"
                      rows={4}
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
                      rows={4}
                      placeholder="pagos en línea enviados de una persona a otra, a través de una red descentralizada de computadoras que comparten la misma información, protegida con criptografía"
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
                    ¿quieres aplicar a la beca de "frutas == buidlers" de
                    frutero club?
                  </FormLabel>
                  <FormDescription>
                    más información sobre la beca
                    <Link
                      href="https://frutero.club/becas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {" "}
                      aquí
                    </Link>
                  </FormDescription>
                  <FormControl className="py-1">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value ?? "false"}
                      className="space-y-1 pl-2 md:pl-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" id="true" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="true">
                          sí
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
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
          </TabsContent>
          <TabsContent value="5" className="my-0 space-y-2 px-4 py-6 md:py-4">
            <h4
              className={`${museoModernoFont.className} text-center text-xl font-medium text-primary`}
            >
              enviar
            </h4>
            <FormField
              name="areTermsAccepted"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel htmlFor="areTermsAccepted">
                      ¿aceptas los términos y condiciones de la plataforma?
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={() => {
                            return field.onChange(!field.value);
                          }}
                        />
                        <FormLabel className="text-sm font-normal">
                          sí, acepto los términos y condiciones
                        </FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <div className="flex w-full justify-center">
              <Button type="submit">registrarme</Button>
            </div>
          </TabsContent>
          {/* 
          // TODO: move project form to its own page
          hidden tab, for project info
          */}
          <TabsContent
            value="6"
            className="my-0 hidden space-y-2 px-4 py-6 md:py-4"
          >
            {/* <FormField
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
                    NFTs, DeFi, Diseño Arquitectónico... debe ser corto (máximo
                    5 palabras)
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
            /> */}
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
}
