import QuizItems from "../data/quizItemData";

export default function QuizItemRandomizer(category: string, amount: number) {
  // get questions by category
  const filteredQuestions = QuizItems.filter((item) => item.category === category);
  // shuffle questions
  const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());
  // shuffle anwser positions
  shuffledQuestions.forEach((quizItem) => {
    quizItem.answers = quizItem.answers.sort(() => 0.5 - Math.random());
  });

  return shuffledQuestions.slice(0, amount);
}
