// lib/chatbot/types.ts

export type ChatKnowledgeItem = {
  id: string;
  answer: string;
  terms: readonly string[];
  priority?: number;
};

export type ChatAnswer = {
  answer: string;
  matchedKnowledgeId: string | null;
};

export type ChatExchange = {
  id: number;
  question: string;
  answer: string;
};
