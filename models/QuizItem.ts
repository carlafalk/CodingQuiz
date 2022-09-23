interface QuizItem {
  id: string;
  question: string;
  answers: Answer[];
  category: "react" | "html" | "css" | "javascript" | "typescript";
}

export interface Answer {
  isCorrect: boolean;
  answer: string;
}

export default QuizItem;
