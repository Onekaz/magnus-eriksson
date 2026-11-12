// components/chat/ChatSuggestedQuestions.tsx

import type { SiteContent } from "@/lib/content/profile";
import styles from "./chat.module.css";

type ChatSuggestedQuestionsProps = {
  questions: SiteContent["chat"]["suggestedQuestions"];
  onSelect: (question: string) => void;
  fontSize: number;
  fontWeight: number;
};

export default function ChatSuggestedQuestions({
  questions,
  onSelect,
  fontSize,
  fontWeight,
}: ChatSuggestedQuestionsProps) {
  return (
    <div className={styles.suggestedQuestions}>
      {questions.map((question) => (
        <button
          key={question}
          type="button"
          className={styles.suggestedQuestion}
          onClick={() => onSelect(question)}
          style={{ fontSize, fontWeight }}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
