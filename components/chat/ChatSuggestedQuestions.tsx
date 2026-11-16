// components/chat/ChatSuggestedQuestions.tsx

import { Refresh } from "@/components/icons";
import type { SiteContent } from "@/lib/content/profile";
import styles from "./chat.module.css";

type ChatSuggestedQuestionsProps = {
  questions: SiteContent["chat"]["suggestedQuestions"];
  refreshAriaLabel: string;
  exampleQuestionsLabel: string;
  labelFontSize: number;
  labelFontWeight: number;
  labelLineHeight: number;
  refreshIconSize: number;
  refreshButtonSize: number;
  refreshToQuestionsGap: number;
  questionGap: number;
  questionsToConversationGap: number;
  refreshAnimationKey: number;
  onRefresh: () => void;
  onSelect: (question: string) => void;
  fontSize: number;
  fontWeight: number;
};

export default function ChatSuggestedQuestions({
  questions,
  refreshAriaLabel,
  exampleQuestionsLabel,
  labelFontSize,
  labelFontWeight,
  labelLineHeight,
  refreshIconSize,
  refreshButtonSize,
  refreshToQuestionsGap,
  questionGap,
  questionsToConversationGap,
  refreshAnimationKey,
  onRefresh,
  onSelect,
  fontSize,
  fontWeight,
}: ChatSuggestedQuestionsProps) {
  return (
    <div
      className={styles.suggestedQuestionsArea}
      style={{
        gap: refreshToQuestionsGap,
        paddingBottom: questionsToConversationGap,
      }}
    >
      <div className={styles.refreshRow} style={{ height: refreshIconSize }}>
        <span
          className={styles.exampleQuestionsLabel}
          style={{
            fontSize: labelFontSize,
            fontWeight: labelFontWeight,
            lineHeight: labelLineHeight,
          }}
        >
          {exampleQuestionsLabel}
        </span>
        <button
          type="button"
          className={styles.refreshButton}
          aria-label={refreshAriaLabel}
          onClick={onRefresh}
          style={{ width: refreshButtonSize, height: refreshButtonSize }}
        >
          <Refresh size={refreshIconSize} animationKey={refreshAnimationKey} />
        </button>
      </div>
      <div className={styles.suggestedQuestions} style={{ gap: questionGap }}>
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
    </div>
  );
}
