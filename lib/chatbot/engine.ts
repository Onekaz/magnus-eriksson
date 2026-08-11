// lib/chatbot/engine.ts

import { additionalChatKnowledge } from "@/lib/chatbot/additionalKnowledge";
import { buildSiteChatKnowledge } from "@/lib/chatbot/siteKnowledge";
import type { ChatAnswer, ChatKnowledgeItem } from "@/lib/chatbot/types";
import type { SiteContent, SiteLanguage } from "@/lib/content/profile";

const STOP_WORDS = new Set([
  "a",
  "about",
  "an",
  "and",
  "ar",
  "att",
  "are",
  "av",
  "det",
  "does",
  "en",
  "ett",
  "for",
  "för",
  "har",
  "has",
  "have",
  "i",
  "in",
  "is",
  "magnus",
  "med",
  "och",
  "of",
  "om",
  "pa",
  "på",
  "the",
  "to",
  "vad",
  "what",
  "which",
  "who",
  "vilka",
  "är",
]);

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9åäöæø\s-]/gi, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTokens(value: string) {
  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function scoreKnowledgeItem(query: string, item: ChatKnowledgeItem) {
  const normalizedQuery = normalizeText(query);
  const queryTokens = new Set(getTokens(query));
  const matchedQueryTokens = new Set<string>();
  let score = 0;
  let hasExactMatch = false;
  let hasMeaningfulPhraseMatch = false;

  item.terms.forEach((term) => {
    const normalizedTerm = normalizeText(term);

    if (!normalizedTerm) {
      return;
    }

    if (normalizedQuery === normalizedTerm) {
      hasExactMatch = true;
      score += 100;
      return;
    }

    const termTokens = getTokens(term);

    if (
      termTokens.length > 0 &&
      normalizedTerm.length >= 3 &&
      normalizedQuery.includes(normalizedTerm)
    ) {
      hasMeaningfulPhraseMatch = true;
      score += 35;
    }

    termTokens.forEach((token) => {
      if (queryTokens.has(token) && !matchedQueryTokens.has(token)) {
        matchedQueryTokens.add(token);
        score += 6;
      }
    });
  });

  if (!hasExactMatch && !hasMeaningfulPhraseMatch) {
    const requiredTokenMatches = Math.min(2, queryTokens.size);

    if (requiredTokenMatches === 0 || matchedQueryTokens.size < requiredTokenMatches) {
      return 0;
    }
  }

  return score > 0 ? score + (item.priority ?? 0) : 0;
}

export function answerProfileQuestion(
  question: string,
  content: SiteContent,
  language: SiteLanguage,
): ChatAnswer {
  const trimmedQuestion = question.trim();

  if (!trimmedQuestion) {
    return {
      answer: content.chat.noAnswer,
      matchedKnowledgeId: null,
    };
  }

  const knowledge = [
    ...buildSiteChatKnowledge(content, language),
    ...additionalChatKnowledge[language],
  ];

  const rankedKnowledge = knowledge
    .map((item) => ({ item, score: scoreKnowledgeItem(trimmedQuestion, item) }))
    .sort((left, right) => right.score - left.score);
  const bestMatch = rankedKnowledge[0];

  if (!bestMatch || bestMatch.score < 12) {
    return {
      answer: content.chat.noAnswer,
      matchedKnowledgeId: null,
    };
  }

  return {
    answer: bestMatch.item.answer,
    matchedKnowledgeId: bestMatch.item.id,
  };
}
