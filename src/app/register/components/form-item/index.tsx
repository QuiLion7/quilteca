"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  areaOfKnowledge,
  authorsList,
  bnccAbilitysList,
  bnccCompetenceList,
  curriculumComponents,
  difficultyLevel,
  specificSubjectList,
  subjectsList,
  years,
} from "@/constants";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import React from "react";

const itemFormSchema = z.object({
  knowledge: z.string().min(1, { message: "Selecione a Área do Conhecimento" }),
  componentCurricular: z
    .string()
    .min(1, { message: "Selecione um Componente" }),
  subject: z.string().min(1, { message: "Selecione o Assunto Geral" }),
  specificSubject: z
    .string()
    .min(1, { message: "Selecione o Assunto Específico" }),
  author: z.string().min(1, { message: "Selecione o Autor" }),
  year: z.string().min(1, { message: "Selecione o Ano" }),
  bnccCompetence: z.string().min(1, { message: "Selecione a Competência" }),
  bnccAbility: z
    .string()
    .min(1, { message: "Selecione a habilidade principal" }),
  difficultyLevel: z
    .string()
    .min(1, { message: "Selecione o Nível de Dificuldade" }),
  baseText: z
    .string()
    .max(3000, { message: "Escreva no máximo 3000 caracteres" }),
  resource: z
    .string()
    .max(2000, { message: "Escreva no máximo 000 caracteres" }),
  itemCommand: z
    .string()
    .min(10, { message: "Escreva no mínimo 10 caracteres" })
    .max(3000, { message: "Escreva no máximo 3000 caracteres" }),
  alternatives: z.array(
    z.object({
      alternative: z.string().min(1, { message: "Escreva o item" }),
      correct: z.boolean(),
    }),
  ),
});

type ProfileFormValues = z.infer<typeof itemFormSchema>;

export default function FormItems() {
  const { status, data } = useSession();
  const [selectedKnowledge, setSelectedKnowledge] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState("");
  const [selectedCompetence, setSelectedCompetence] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const [error, setError] = useState("");

  const [alternativesList, setAlternativesList] = useState([
    { alternative: "", correct: false },
    { alternative: "", correct: false },
    { alternative: "", correct: false },
    { alternative: "", correct: false },
    { alternative: "", correct: false },
  ]);

  const router = useRouter();

  const validateBeforeSubmit = () => {
    const hasCorrect = alternativesList.some((item) => item.correct);
    if (!hasCorrect) {
      setError("Selecione pelo menos uma alternativa correta.");
      return false;
    }
    return true;
  };

  const userId = data?.user.id;
  const userName = data?.user?.name || "Nome não encontrado";

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(itemFormSchema),
    defaultValues: {
      knowledge: "",
      componentCurricular: "",
      subject: "",
      specificSubject: "",
      author: "",
      year: "",
      bnccCompetence: "",
      bnccAbility: "",
      difficultyLevel: "",
      baseText: "",
      resource: "",
      itemCommand: "",
      alternatives: [],
    },
  });

  async function onSubmit(data: ProfileFormValues) {
    if (validateBeforeSubmit()) {
      try {
        const response = await api.post("/api/items", {
          knowledge: data.knowledge,
          componentCurricular: data.componentCurricular,
          subject: data.subject,
          specificSubject: data.specificSubject,
          author: data.author,
          year: data.year,
          bNCCCompetence: data.bnccCompetence,
          bNCCHability: data.bnccAbility,
          difficultyLevel: data.difficultyLevel,
          baseText: data.baseText,
          resource: data.resource,
          itemCommand: data.itemCommand,
          alternatives: data.alternatives,
          userId: userId,
        });
        console.log(response.data);
        setError("");
        form.reset();
        router.refresh();
        router.replace("/myitems");
      } catch (error) {
        console.error(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("Erro desconhecido ao tentar cadastrar o item.");
        }
      }
    } else {
      console.log(error);
    }
  }

  return (
    <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-2">
      <h1 className="my-5 text-sm font-bold uppercase sm:text-base md:text-lg lg:text-2xl">
        Formulário para Adição de Itens
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="knowledge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área do Conhecimento</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedKnowledge(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a Área do Conhecimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Componente Curricular</SelectLabel>
                        {areaOfKnowledge.map((knowledge, index) => (
                          <SelectItem key={index} value={knowledge}>
                            {knowledge}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="componentCurricular"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Componente Curricular</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCurriculum(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Componente" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(curriculumComponents).map(
                        ([area, discipline], index) =>
                          selectedKnowledge === area && (
                            <SelectGroup key={index}>
                              {discipline.map((subject, subjectIndex) => (
                                <SelectItem key={subjectIndex} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assunto</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedSubject(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(subjectsList).map(
                        ([discipline, subjects], index) =>
                          selectedCurriculum === discipline && (
                            <SelectGroup key={index}>
                              {subjects.map((subject, subjectIndex) => (
                                <SelectItem key={subjectIndex} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specificSubject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assunto Específico</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Assunto Específico" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(specificSubjectList).map(
                        ([discipline, topics], index) =>
                          selectedCurriculum === discipline && (
                            <SelectGroup key={index}>
                              {topics.map((topicObj, topicIndex) => (
                                <React.Fragment key={topicIndex}>
                                  {Object.entries(topicObj).map(
                                    ([topic, subtopics], subIndex) => (
                                      <React.Fragment key={subIndex}>
                                        {topic === selectedSubject &&
                                          subtopics.map(
                                            (subtopic, subtopicIndex) => (
                                              <SelectItem
                                                key={subtopicIndex}
                                                value={
                                                  typeof subtopic === "string"
                                                    ? subtopic
                                                    : ""
                                                }
                                              >
                                                {typeof subtopic === "string"
                                                  ? subtopic
                                                  : ""}
                                              </SelectItem>
                                            ),
                                          )}
                                      </React.Fragment>
                                    ),
                                  )}
                                </React.Fragment>
                              ))}
                            </SelectGroup>
                          ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bnccCompetence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Competência da BNCC</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCompetence(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a Competência" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(bnccCompetenceList).map(
                        ([area, competences], index) =>
                          selectedKnowledge === area && (
                            <SelectGroup key={index}>
                              {competences.map(
                                (competence, competenceIndex) => (
                                  <SelectItem
                                    key={competenceIndex}
                                    value={competence}
                                  >
                                    {competence}
                                  </SelectItem>
                                ),
                              )}
                            </SelectGroup>
                          ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bnccAbility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Habilidade da BNCC</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a Habilidade Principal" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(bnccAbilitysList).map(
                        ([knowledge, competences], index) =>
                          selectedKnowledge === knowledge && (
                            <SelectGroup key={index}>
                              {competences[selectedCompetence] &&
                                competences[selectedCompetence].map(
                                  (ability, abilityIndex) => (
                                    <SelectItem
                                      key={abilityIndex}
                                      value={ability}
                                    >
                                      {ability}
                                    </SelectItem>
                                  ),
                                )}
                            </SelectGroup>
                          ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Autor</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Autor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Autor</SelectLabel>
                        <SelectItem key="userName" value={userName}>
                          {userName}
                        </SelectItem>
                        {authorsList.map((author, index) => (
                          <SelectItem key={index} value={author}>
                            {author}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ano</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Ano</SelectLabel>
                        {years.map((year, index) => (
                          <SelectItem key={index} value={year.toString()}>
                            {year.toString()}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="difficultyLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nível de Dificuldade</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCurriculum(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Nível de Dificuldade</SelectLabel>
                        {difficultyLevel.map((level, index) => (
                          <SelectItem key={index} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="baseText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Base</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Se tiver, escreva o texto base para contextualização..."
                    className="min-h-[250px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recurso</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Se tiver, escreva o texto (imagem em breve) usado como recurso..."
                    className="min-h-[200px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="itemCommand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comando do Item</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escreva o Comando do Item!"
                    className="min-h-[150px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {alternativesList.map((alternative, index) => (
            <div
              className="flex w-full items-center justify-center gap-2"
              key={index}
            >
              <input
                type="checkbox"
                {...form.register(`alternatives.${index}.correct`)}
                onChange={(e) => {
                  const newAlternatives = alternativesList.map((item, idx) =>
                    idx === index
                      ? { ...item, correct: e.target.checked }
                      : { ...item, correct: false },
                  );
                  setAlternativesList(newAlternatives);
                }}
              />
              <FormField
                control={form.control}
                name={`alternatives.${index}.alternative`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="w-full"
                        {...field}
                        value={field.value || ""}
                        placeholder={`Alternativa ${String.fromCharCode(65 + index)}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          {error && (
            <p className="w-full text-center text-destructive">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full rounded-lg uppercase uppercase"
          >
            Registrar Item
          </Button>
        </form>
      </Form>
    </div>
  );
}
