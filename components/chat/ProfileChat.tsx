// components/chat/ProfileChat.tsx

"use client";

import { useEffect, useRef, useState } from "react";
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
  const nextMessageIdRef = useRef(1);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
    setIsOpen((currentValue) => !currentValue);
  }

  function closeChat() {
    setIsOpen(false);
  }

  return (
    <>
      <DesktopChat
        isOpen={isOpen}
        content={content}
        messages={messages}
        draft={draft}
        onDraftChange={setDraft}
        onToggle={toggleChat}
        onClose={closeChat}
        onSubmit={handleSubmit}
      />

      <MobileChatTrigger
        isOpen={isOpen}
        content={content}
        onToggle={toggleChat}
      />

      <MobileChatBottomSheet
        isOpen={isOpen}
        content={content}
        messages={messages}
        draft={draft}
        onDraftChange={setDraft}
        onClose={closeChat}
        onSubmit={handleSubmit}
      />
    </>
  );
}
