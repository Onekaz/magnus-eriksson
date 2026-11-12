// components/chat/ProfileChat.tsx

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DesktopChat from "@/components/chat/DesktopChat";
import MobileChatTrigger from "@/components/chat/MobileChatTrigger";
import MobileChatBottomSheet from "@/components/mobile/bottom-sheet/MobileChatBottomSheet";
import { answerProfileQuestion } from "@/lib/chatbot/engine";
import type { ChatExchange } from "@/lib/chatbot/types";
import type { SiteContent, SiteLanguage } from "@/lib/content/profile";

type ProfileChatProps = {
  language: SiteLanguage;
  content: SiteContent;
};

export default function ProfileChat({ language, content }: ProfileChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatExchange[]>([]);
  const [rotatingQuestionIndex, setRotatingQuestionIndex] = useState(0);
  const nextMessageIdRef = useRef(1);
  const previousRotatingQuestionIndexRef = useRef<number | null>(null);

  const suggestedQuestions = [
    ...content.chat.suggestedQuestions,
    content.chat.rotatingSuggestedQuestions[rotatingQuestionIndex],
  ];

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setDraft("");
    setMessages([]);
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

    const questionCount = content.chat.rotatingSuggestedQuestions.length;

    if (questionCount > 0) {
      const previousIndex = previousRotatingQuestionIndexRef.current;
      // Choose anew on each opening, without immediately repeating the last question.
      const nextIndex =
        previousIndex === null || questionCount === 1
          ? Math.floor(Math.random() * questionCount)
          : (previousIndex + 1 + Math.floor(Math.random() * (questionCount - 1))) %
            questionCount;

      previousRotatingQuestionIndexRef.current = nextIndex;
      setRotatingQuestionIndex(nextIndex);
    }

    setIsOpen(true);
  }

  return (
    <>
      <DesktopChat
        isOpen={isOpen}
        content={content}
        suggestedQuestions={suggestedQuestions}
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
