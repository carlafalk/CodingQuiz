import QuizItem from "../models/QuizItem";

const quizItems: QuizItem[] = [
  {
    id: "1",
    category: "react",
    question: "What is React?",
    answers: [
      {
        answer: "A library for building user interfaces",
        isCorrect: true,
      },
      {
        answer: "A framework for building user interfaces",
        isCorrect: false,
      },
      {
        answer: "A library for building server side applications",
        isCorrect: false,
      },
      {
        answer: "A framework for building server side applications",
        isCorrect: false,
      },
    ],
  },
];

export default quizItems;

// import CategoryItemModel from "../models/CategoryItemModel";
// import QuizItemModel from "../models/QuizItemModel";

// export const reactQuestions: QuizItemModel[] = [
//   {
//     question: "What does css stand for",
//     wrongAnswer1: "Colored Styles Supreme",
//     wrongAnswer2: "Cascading Self Service",
//     wrongAnswer3: "Colored Style Sheet",
//     rightAnswer: "Cascading Style Sheet",
//   },
//   {
//     question: "testQuestion2",
//     wrongAnswer1: "wrongAnswer4",
//     wrongAnswer2: "wrongAnswer5",
//     wrongAnswer3: "wrongAnswer6",
//     rightAnswer: "rightAnswer2",
//   },
//   {
//     question: "testQuestion3",
//     wrongAnswer1: "wrongAnswer7",
//     wrongAnswer2: "wrongAnswer8",
//     wrongAnswer3: "wrongAnswer9",
//     rightAnswer: "rightAnswer3",
//   },
// ];

// export const reactItem: CategoryItemModel = {
//   id: 1,
//   title: "React",
//   questions: reactQuestions,
// };

// export const categoryItems: CategoryItemModel[] = [reactItem];
