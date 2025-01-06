import { z } from "zod";

const DifficultyLevel = z.enum(["easy", "medium", "hard"]);

const Topic = z.enum([
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React.js",
  "Next.js",
]);

export const QuestionSchema = z.object({
  id: z.number().optional(),
  poziom: DifficultyLevel,
  temat: Topic,
  pytanie: z.string().min(3).max(500),
  odp_a: z.string().min(1).max(255),
  odp_b: z.string().min(1).max(255),
  odp_c: z.string().min(1).max(255),
  odp_d: z.string().min(1).max(255),
  odp_poprawna: z.string().min(1).max(255),
});

export type Question = z.infer<typeof QuestionSchema>;

export const QuestionsArraySchema = z.array(QuestionSchema);

export type AnswerState =
  | "default"
  | "selected"
  | "correct"
  | "wrong"
  | "wrong-with-correct";
