import pool from "./db";
import { QuestionsArraySchema } from "@/types";

export const getQuestionsForGame = async () => {
  try {
    if (!pool) {
      throw new Error("Database pool not initialized");
    }
    const { rows } = await pool.query(`
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'easy' ORDER BY RANDOM() LIMIT 4)
      UNION ALL
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'medium' ORDER BY RANDOM() LIMIT 4)
      UNION ALL
      (SELECT * FROM techmilionerzy.pytania WHERE poziom = 'hard' ORDER BY RANDOM() LIMIT 4)
      ORDER BY poziom
    `);

    return QuestionsArraySchema.parse(rows);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
