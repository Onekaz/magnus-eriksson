// components/chat/ProfileChat.tsx

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DesktopChat from "@/components/chat/DesktopChat";
import MobileChatTrigger from "@/components/chat/MobileChatTrigger";
import MobileChatBottomSheet from "@/components/mobile/bottom-sheet/MobileChatBottomSheet";
import { answerProfileQuestion } from "@/lib/chatbot/engine";
import type { ChatExchange } from "@/lib/chatbot/types";
import type { SiteContent, SiteLanguage } from "@/lib/content/profile";

function chooseSuggestedQuestionIndices(
  totalQuestions: number,
  usedIndices: readonly number[],
  previousIndices: readonly number[],
): number[] {
  const eligibleIndices = Array.from({ length: totalQuestions }, (_, index) => index).filter(
    (index) => !usedIndices.includes(index),
  );
  const unshownIndices = eligibleIndices.filter(
    (index) => !previousIndices.includes(index),
  );
  const shownIndices = eligibleIndices.filter((index) => previousIndices.includes(index));
  const nextIndices: number[] = [];

  for (const pool of [unshownIndices, shownIndices]) {
    while (nextIndices.length < 3 && pool.length > 0) {
      const randomPosition = Math.floor(Math.random() * pool.length);
      const [selectedIndex] = pool.splice(randomPosition, 1);
      nextIndices.push(selectedIndex);
    }
  }

  return nextIndices;
}

type ProfileChatProps = {
  language: SiteLanguage;
  content: SiteContent;
};

export default function ProfileChat({ language, content }: ProfileChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatExchange[]>([]);
  const [suggestedQuestionIndices, setSuggestedQuestionIndices] = useState<number[]>([]);
  const [usedQuestionIndices, setUsedQuestionIndices] = useState<number[]>([]);
  const [refreshAnimationKey, setRefreshAnimationKey] = useState(0);
  const nextMessageIdRef = useRef(1);

  const questionBank = [
    ...content.chat.suggestedQuestions,
    ...content.chat.rotatingSuggestedQuestions,
  ];
  const suggestedQuestions = suggestedQuestionIndices.map((index) => questionBank[index]);

  function refreshSuggestedQuestions() {
    setSuggestedQuestionIndices((currentIndices) =>
      chooseSuggestedQuestionIndices(questionBank.length, usedQuestionIndices, currentIndices),
    );
    setRefreshAnimationKey((currentKey) => currentKey + 1);
  }

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setDraft("");
    setMessages([]);
    setSuggestedQuestionIndices([]);
    setUsedQuestionIndices([]);
    setRefreshAnimationKey(0);
    nextMessageIdRef.current = 1;
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeChat();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeChat]);

  function submitQuestion(question: string) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    const result = answerProfileQuestion(trimmedQuestion, content, language);

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nextMessageIdRef.current,
        question: trimmedQuestion,
        answer: result.answer,
      },
    ]);
    nextMessageIdRef.current += 1;

    const usedQuestionIndex = questionBank.findIndex(
      (suggestion) => suggestion.toLocaleLowerCase() === trimmedQuestion.toLocaleLowerCase(),
    );
    if (usedQuestionIndex !== -1 && !usedQuestionIndices.includes(usedQuestionIndex)) {
      const nextUsedIndices = [...usedQuestionIndices, usedQuestionIndex];
      setUsedQuestionIndices(nextUsedIndices);
      setSuggestedQuestionIndices((currentIndices) => {
        if (!currentIndices.includes(usedQuestionIndex)) {
          return currentIndices;
        }

        const remainingIndices = currentIndices.filter((index) => index !== usedQuestionIndex);
        const replacements = chooseSuggestedQuestionIndices(
          questionBank.length,
          [...nextUsedIndices, ...remainingIndices],
          [],
        );
        return [...remainingIndices, ...replacements.slice(0, 3 - remainingIndices.length)];
      });
    }

    setDraft("");
  }

  function handleSubmit() {
    submitQuestion(draft);
  }

  function toggleChat() {
    if (isOpen) {
      closeChat();
      return;
    }

    setSuggestedQuestionIndices(chooseSuggestedQuestionIndices(questionBank.length, [], []));
    setRefreshAnimationKey(0);
    setIsOpen(true);
  }

  return (
    <>
      <DesktopChat
        isOpen={isOpen}
        content={content}
        suggestedQuestions={suggestedQuestions}
        refreshAnimationKey={refreshAnimationKey}
        onRefreshQuestions={refreshSuggestedQuestions}
        messages={messages}
        draft={draft}
        onDraftChange={setDraft}
        onToggle={toggleChat}
        onClose={closeChat}
        onSubmit={handleSubmit}
        onSuggestedQuestion={submitQuestion}
      />

      <MobileChatTrigger
        isOpen={isOpen}
        content={content}
        onToggle={toggleChat}
      />

      <MobileChatBottomSheet
        isOpen={isOpen}
        content={content}
        suggestedQuestions={suggestedQuestions}
        refreshAnimationKey={refreshAnimationKey}
        onRefreshQuestions={refreshSuggestedQuestions}
        messages={messages}
        draft={draft}
        onDraftChange={setDraft}
        onClose={closeChat}
        onSubmit={handleSubmit}
        onSuggestedQuestion={submitQuestion}
      />
    </>
  );
}
