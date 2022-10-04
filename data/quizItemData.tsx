import QuizItem from "../models/QuizItem";

const QuizItems: QuizItem[] = [
  {
    id: "1",
    question: "What is the correct CSS syntax for making all the <span> elements bold?",
    answers: [
      {
        answer: "span {text-size: bold}",
        isCorrect: false,
      },
      {
        answer: "span {font-weight: bold}",
        isCorrect: true,
      },
      {
        answer: "<span style='font-size: bold'>",
        isCorrect: false,
      },
      {
        answer: "<span style='text-size: bold'>",
        isCorrect: false,
      },
    ],
    category: "css",
  },

  {
    id: "2",
    question: "How do you add a comment in a CSS file?",
    answers: [
      {
        answer: "/* this is a comment */",
        isCorrect: true,
      },
      {
        answer: "// this is a comment //",
        isCorrect: false,
      },
      {
        answer: "// this is a comment",
        isCorrect: false,
      },
      {
        answer: "<!-- this is a comment-->",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "3",
    question: "What property is used to change the text color of an element?",
    answers: [
      {
        answer: "fontcolor:",
        isCorrect: false,
      },
      {
        answer: "textcolor:",
        isCorrect: false,
      },
      {
        answer: "color:",
        isCorrect: true,
      },
      {
        answer: "font-color:",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "4",
    question: "What does CSS stand for?",
    answers: [
      {
        answer: "Custom Style Sheets",
        isCorrect: false,
      },
      {
        answer: "Crazy Sheet Style",
        isCorrect: false,
      },
      {
        answer: "Cascading Style Sheets:",
        isCorrect: true,
      },
      {
        answer: "Correct Style Sheets",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "5",
    question: "The # symbol specifies that the selector is?",
    answers: [
      {
        answer: "class",
        isCorrect: false,
      },
      {
        answer: "tag",
        isCorrect: false,
      },
      {
        answer: "first",
        isCorrect: false,
      },
      {
        answer: "id",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  {
    id: "6",
    question: "Which is the correct CSS syntax?",
    answers: [
      {
        answer: "{p:color=black(p}",
        isCorrect: false,
      },
      {
        answer: "p {color: black;}",
        isCorrect: true,
      },
      {
        answer: "{p;color:black}",
        isCorrect: false,
      },
      {
        answer: "p:color=black",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "7",
    question:
      "Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
    answers: [
      {
        answer: "#header { height: 30px; width: 750px; color: black; }",
        isCorrect: true,
      },
      {
        answer: ".header { height: 30px; width: 750px; colour: black; }",
        isCorrect: false,
      },
      {
        answer: "#header { height: 30px; width: 750px; text: black; }",
        isCorrect: false,
      },
      {
        answer: ".header { height: 30px; width: 750px; color: black; }",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "8",
    question: "Which snippet of CSS is commonly used to center a website horizontally?",
    answers: [
      {
        answer: "site-align: center;",
        isCorrect: false,
      },
      {
        answer: "margin: center;",
        isCorrect: false,
      },
      {
        answer: "margin: auto 0;",
        isCorrect: false,
      },
      {
        answer: "margin: 0 auto;",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  {
    id: "9",
    question: "How do you make a list not display bullet points?",
    answers: [
      {
        answer: "list-style-type: no-bullet",
        isCorrect: false,
      },
      {
        answer: "list: none",
        isCorrect: false,
      },
      {
        answer: "list-style-type: none",
        isCorrect: true,
      },
      {
        answer: "bulletpoints: none",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "10",
    question: "What is the correct CSS syntax to change the font name?",
    answers: [
      {
        answer: "font-name:",
        isCorrect: false,
      },
      {
        answer: "font:",
        isCorrect: false,
      },
      {
        answer: "font-family:",
        isCorrect: true,
      },
      {
        answer: "fontname:",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "11",
    question: "What is the correct Syntax for importing a stylesheet in CSS?",
    answers: [
      {
        answer: "@import url(css/example.css);",
        isCorrect: true,
      },
      {
        answer: "@import-stylesheet url(css/example.css);",
        isCorrect: false,
      },
      {
        answer: "import-css url(css/example.css);",
        isCorrect: false,
      },
      {
        answer: "@import-style url(css/example.css);",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "12",
    question: "Which HTML attribute is used to define inline CSS styles?",
    answers: [
      {
        answer: "CSS",
        isCorrect: false,
      },
      {
        answer: "Style",
        isCorrect: true,
      },
      {
        answer: "ID",
        isCorrect: false,
      },
      {
        answer: "Type",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "13",
    question: "How do you make each word in a text start with a capital letter?",
    answers: [
      {
        answer: "text-transform: capitalize",
        isCorrect: true,
      },
      {
        answer: "text-transform: uppercase",
        isCorrect: false,
      },
      {
        answer: "You can't do that with CSS",
        isCorrect: false,
      },
      {
        answer: "text: capitalize",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "14",
    question: "What is the correct CSS syntax for making all the <p> tags font size 14px?",
    answers: [
      {
        answer: "p {14px}",
        isCorrect: false,
      },
      {
        answer: "p {font-size: 14px;}",
        isCorrect: true,
      },
      {
        answer: "p {text-size: 14px;}",
        isCorrect: false,
      },
      {
        answer: "p {font: 14px;}",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "15",
    question: "A declaration is terminated by?",
    answers: [
      {
        answer: ". - period",
        isCorrect: false,
      },
      {
        answer: "! - exclamation mark",
        isCorrect: false,
      },
      {
        answer: "; - semi colon",
        isCorrect: true,
      },
      {
        answer: ": - colon",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "16",
    question: "Which CSS property controls the text size?",
    answers: [
      {
        answer: "font-size",
        isCorrect: true,
      },
      {
        answer: "text-size",
        isCorrect: false,
      },
      {
        answer: "font-heigth",
        isCorrect: false,
      },
      {
        answer: "text-style",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "17",
    question: "How do you insert padding so that it is: 10 pixels at the top, 15 pixels at the bottom, 5 pixels at the right, 10 pixels to the left?",
    answers: [
      {
        answer: "padding: 10px 15px 5px 10px;",
        isCorrect: false,
      },
      {
        answer: "padding: 15px 5px 10px 10px;",
        isCorrect: false,
      },
      {
        answer: "padding: 10px 5px 10px 15px;",
        isCorrect: false,
      },
      {
        answer: "padding: 10px 5px 15px 10px;",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  {
    id: "18",
    question: "Which property is used to change the background color?",
    answers: [
      {
        answer: "background-color:",
        isCorrect: true,
      },
      {
        answer: "bg-color:",
        isCorrect: false,
      },
      {
        answer: "bground:",
        isCorrect: false,
      },
      {
        answer: "b-color:",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "19",
    question: "How to rotate objects using CSS3?",
    answers: [
      {
        answer: "object-rotation: 30deg;",
        isCorrect: true,
      },
      {
        answer: "rotate-object: 30deg;",
        isCorrect: false,
      },
      {
        answer: "transform: rotate(30deg);",
        isCorrect: false,
      },
      {
        answer: "transform: rotate-30deg-clockwise;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "20",
    question: "How do you display hyperlinks without an underline?",
    answers: [
      {
        answer: "a {decoration: no underline}",
        isCorrect: false,
      },
      {
        answer: "a {text-decoration: none}",
        isCorrect: true,
      },
      {
        answer: "a {hyperlink: no underline}",
        isCorrect: false,
      },
      {
        answer: "a {text-decoration: no underline}",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "21",
    question: "How can you created rounded corners using CSS3?",
    answers: [
      {
        answer: "border[round]: 30px;",
        isCorrect: false,
      },
      {
        answer: "corner-effect: round;",
        isCorrect: false,
      },
      {
        answer: "border-radius: 30px;",
        isCorrect: true,
      },
      {
        answer: "alpha-effect: round-corner;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "22",
    question: "How do you add shadow to elements in CSS3?",
    answers: [
      {
        answer: "box-shadow: 10px 10px 5px grey;",
        isCorrect: true,
      },
      {
        answer: "shadow-right: 10px shadow-bottom: 10px;",
        isCorrect: false,
      },
      {
        answer: "shadow-color: grey;",
        isCorrect: false,
      },
      {
        answer: "alpha-effect[shadow]: 10px 10px 5px grey;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "23",
    question: "How do you add shadow to elements in CSS3?",
    answers: [
      {
        answer: "box-shadow: 10px 10px 5px grey;",
        isCorrect: true,
      },
      {
        answer: "shadow-right: 10px shadow-bottom: 10px;",
        isCorrect: false,
      },
      {
        answer: "shadow-color: grey;",
        isCorrect: false,
      },
      {
        answer: "alpha-effect[shadow]: 10px 10px 5px grey;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "24",
    question: "How to you modify a border image using CSS3?",
    answers: [
      {
        answer: "border: url(image.png);",
        isCorrect: false,
      },
      {
        answer: "border-variable: image url(image.png);",
        isCorrect: false,
      },
      {
        answer: "border-image: url(border.png) 30 30 round;",
        isCorrect: true,
      },
      {
        answer: "None",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "25",
    question: "How to add text shadow using CSS3?",
    answers: [
      {
        answer: "font: shadowed 5px 5px 5px grey;",
        isCorrect: false,
      },
      {
        answer: "font-shadow: 5px 5px 5px grey;",
        isCorrect: false,
      },
      {
        answer: "text-shadow: 5px 5px 5px grey;",
        isCorrect: true,
      },
      {
        answer: "shadow: text 5px 5px 5px grey;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "26",
    question: "How to force a word wrap using CSS3?",
    answers: [
      {
        answer: "word-wrap: break-word;",
        isCorrect: true,
      },
      {
        answer: "text-wrap: break-word;",
        isCorrect: false,
      },
      {
        answer: "text-wrap: force;",
        isCorrect: false,
      },
      {
        answer: "text-width: set;",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "27",
    question: "Which of these are valid CSS3 transformation statements.",
    answers: [
      {
        answer: "matrix()",
        isCorrect: true,
      },
      {
        answer: "modify()",
        isCorrect: false,
      },
      {
        answer: "skip()",
        isCorrect: false,
      },
      {
        answer: "simulate()",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "28",
    question: "How to re-size/scale objects using CSS3?",
    answers: [
      {
        answer: "transform: scale(2,4);",
        isCorrect: true,
      },
      {
        answer: "scale-object: 2,4;",
        isCorrect: false,
      },
      {
        answer: "scale: (2,4);",
        isCorrect: false,
      },
      {
        answer: "None",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "29",
    question: "How to create transition effects using CSS3?",
    answers: [
      {
        answer: "transition: width 2s;",
        isCorrect: true,
      },
      {
        answer: "transition-duration: 2s; transition-effect: width;",
        isCorrect: false,
      },
      {
        answer: "alpha-effect: transition (width,2s);",
        isCorrect: false,
      },
      {
        answer: "None",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "30",
    question: "Look at the code. What piece of code is missing when make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }",
    answers: [
      {
        answer: "the id name",
        isCorrect: true,
      },
      {
        answer: "the element",
        isCorrect: false,
      },
      {
        answer: "the color",
        isCorrect: false,
      },
      {
        answer: "the text shadow height",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "31",
    question: "Does the box-shadow support all browsers ?",
    answers: [
      {
        answer: "true",
        isCorrect: true,
      },
      {
        answer: "false",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "32",
    question: "What does RGBa mean?",
    answers: [
      {
        answer: "Review Get assistance Back-up your information acquire proof",
        isCorrect: false,
      },
      {
        answer: "Red Green Blue alpha",
        isCorrect: true,
      },
      {
        answer: "Red Gray Brown alpha",
        isCorrect: false,
      },
      {
        answer: "Red Gold Black alpha",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "33",
    question: " __________ is a property that allows developers to add rounded corners on the design elements.",
    answers: [
      {
        answer: "Corner",
        isCorrect: false,
      },
      {
        answer: "Box Shadow",
        isCorrect: false,
      },
      {
        answer: "Round Corner",
        isCorrect: false,
      },
      {
        answer: "Border-Radius",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  {
    id: "34",
    question: "Box-Shadow is a property that allows developers to apply a.....",
    answers: [
      {
        answer: "Border",
        isCorrect: false,
      },
      {
        answer: "Drop Shadow",
        isCorrect: true,
      },
      {
        answer: "Rounded Corner",
        isCorrect: false,
      },
      {
        answer: "Background",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "35",
    question: "If you put a value of 0 for a Border-Radius what will happen?",
    answers: [
      {
        answer: "The Corner will curve horizontal.",
        isCorrect: false,
      },
      {
        answer: "The Corner will be square.",
        isCorrect: true,
      },
      {
        answer: "The Corner will curve vertical.",
        isCorrect: false,
      },
      {
        answer: "The world will end.",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "36",
    question: "What does the a stand for in RGBa?",
    answers: [
      {
        answer: "alpha",
        isCorrect: true,
      },
      {
        answer: "aqua",
        isCorrect: false,
      },
      {
        answer: "Apple",
        isCorrect: false,
      },
      {
        answer: "about",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "37",
    question: "Can you have multiple box-shadows?",
    answers: [
      {
        answer: "yes",
        isCorrect: true,
      },
      {
        answer: "no",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "38",
    question: "How do four values work on border-radius",
    answers: [
      {
        answer: "top, bottom, left, right",
        isCorrect: false,
      },
      {
        answer: "up, down, front, behind",
        isCorrect: false,
      },
      {
        answer: "top-left, top-right, bottom-right, bottom-left",
        isCorrect: false,
      },
      {
        answer: "bottom-left, bottom-right, top-right, top-left",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  {
    id: "39",
    question: "How do you add a background color for all <h1> elements?",
    answers: [
      {
        answer: "all.h1 {background-color:#FFFFFF;}",
        isCorrect: false,
      },
      {
        answer: "h1.all {background-color:#FFFFFF;}",
        isCorrect: false,
      },
      {
        answer: "h1 {background-color:#FFFFFF;}",
        isCorrect: true,
      },
      {
        answer: ".h1 {background-color:#FFFFFF;}",
        isCorrect: false,
      },
    ],
    category: "css",
  },
  {
    id: "36a",
    question: "Which character is used to indicate an end tag?",
    answers: [
      {
        answer: "/",
        isCorrect: false,
      },
      {
        answer: "*",
        isCorrect: false,
      },
      {
        answer: ">",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "37b",
    question: "How can you make a numbered list?",
    answers: [
      {
        answer: "<ol>",
        isCorrect: true,
      },
      {
        answer: "<dl>",
        isCorrect: false,
      },
      {
        answer: "<ul>",
        isCorrect: false,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "38c",
    question: "How can you make a bulleted list?",
    answers: [
      {
        answer: "<ol>",
        isCorrect: false,
      },
      {
        answer: "<dl>",
        isCorrect: false,
      },
      {
        answer: "<ul>",
        isCorrect: true,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "39d",
    question: "What is the correct HTML for making a checkbox?",
    answers: [
      {
        answer: "<checkbox>",
        isCorrect: false,
      },
      {
        answer: "<check>",
        isCorrect: false,
      },
      {
        answer: "<input type='checkbox'>",
        isCorrect: true,
      },
      {
        answer: "<input type='check'>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "40",
    question: "What is the correct HTML for making a text input field?",
    answers: [
      {
        answer: "<input type='textfield'>",
        isCorrect: false,
      },
      {
        answer: "<input type='text'>",
        isCorrect: true,
      },
      {
        answer: "<textfield>",
        isCorrect: false,
      },
      {
        answer: "<textinput>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "41",
    question: "How do you declare a CSS variable?",
    answers: [
      {
        answer: "variable:color;",
        isCorrect: false,
      },
      {
        answer: "var:color;",
        isCorrect: false,
      },
      {
        answer: "var color;",
        isCorrect: false,
      },
      {
        answer: "--color;",
        isCorrect: true,
      },
    ],
    category: "css",
  },
  // REAAACT
  {
    id: "42",
    question: "What is the correct command to create a new React project?",
    answers: [
      {
        answer: "npm create-react-app ",
        isCorrect: false,
      },
      {
        answer: "npx create-react-app",
        isCorrect: false,
      },
      {
        answer: "npx create-react-app myReactApp",
        isCorrect: true,
      },
      {
        answer: "npm create-react-app myReactApp",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "43",
    question: "What command is used to start the React local development server?",
    answers: [
      {
        answer: "npm build",
        isCorrect: false,
      },
      {
        answer: "npm serve",
        isCorrect: false,
      },
      {
        answer: "npm run dev",
        isCorrect: false,
      },
      {
        answer: "npm start",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "44",
    question: "What does myReactApp refer to in the following command?",
    answers: [
      {
        answer: "The name you want to use for the new app",
        isCorrect: true,
      },
      {
        answer: "A reference to an existing app",
        isCorrect: false,
      },
      {
        answer: "The type of app to create",
        isCorrect: false,
      },
      {
        answer: "The directory to create the new app in",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "45",
    question: "What is the default local host port that a React development server uses?",
    answers: [
      {
        answer: "3000",
        isCorrect: true,
      },
      {
        answer: "5000",
        isCorrect: false,
      },
      {
        answer: "3500",
        isCorrect: false,
      },
      {
        answer: "8080",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "46",
    question: "To develop and run React code, Node.js is required.",
    answers: [
      {
        answer: "True",
        isCorrect: true,
      },
      {
        answer: "False",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "47",
    question: "What is the children prop?",
    answers: [
      {
        answer: "A property that lets you pass data to child components",
        isCorrect: false,
      },
      {
        answer: "A property that lets you nest components in other components",
        isCorrect: true,
      },
      {
        answer: "A property that adds child values to state",
        isCorrect: false,
      },
      {
        answer: "A property that lets you set an object as a property",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "48",
    question: "Which keyword creates a constant in JavaScript?",
    answers: [
      {
        answer: "let",
        isCorrect: false,
      },
      {
        answer: "var",
        isCorrect: false,
      },
      {
        answer: "constant",
        isCorrect: false,
      },
      {
        answer: "const",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "49",
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    answers: [
      {
        answer: "DOM",
        isCorrect: false,
      },
      {
        answer: "React DOM",
        isCorrect: false,
      },
      {
        answer: "Virtual DOM",
        isCorrect: true,
      },
      {
        answer: "Shadow DOM",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "50",
    question: "React component names must begin with an uppercase letter.",
    answers: [
      {
        answer: "False",
        isCorrect: false,
      },
      {
        answer: "True",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "51",
    question: "Which operator can be used to conditionally render a React component?",
    answers: [
      {
        answer: "::",
        isCorrect: false,
      },
      {
        answer: "||",
        isCorrect: false,
      },
      {
        answer: "??",
        isCorrect: false,
      },
      {
        answer: "%%",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "52",
    question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    answers: [
      {
        answer: "key",
        isCorrect: true,
      },
      {
        answer: "id",
        isCorrect: false,
      },
      {
        answer: "index",
        isCorrect: false,
      },
      {
        answer: "data",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "53",
    question: "What tool does React use to compile JSX?",
    answers: [
      {
        answer: "ReactDOM",
        isCorrect: false,
      },
      {
        answer: "Babel",
        isCorrect: true,
      },
      {
        answer: "JSX Compiler",
        isCorrect: false,
      },
      {
        answer: "React Router",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "54",
    question: "How can you optimze performance for a function component that always renders the same way?",
    answers: [
      {
        answer: "Wrap it in the React.memo higher-order component",
        isCorrect: true,
      },
      {
        answer: "Use the useReducer Hook",
        isCorrect: false,
      },
      {
        answer: "Use the shouldComponentUpdate lifecycle method",
        isCorrect: false,
      },
      {
        answer: "Use the useMemo Hook",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "55",
    question: "What props will be available to the following component?",
    answers: [
      {
        answer: "only static ones",
        isCorrect: false,
      },
      {
        answer: "all of them",
        isCorrect: true,
      },
      {
        answer: "only updated ones",
        isCorrect: false,
      },
      {
        answer: "children",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "56",
    question: "What is a common use case for ref?",
    answers: [
      {
        answer: "To bind the function",
        isCorrect: false,
      },
      {
        answer: "To directly access a DOM node",
        isCorrect: true,
      },
      {
        answer: "To refer to another JavaScript file",
        isCorrect: false,
      },
      {
        answer: "To refer to a function",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "57",
    question: "const array1 = [1, 2, 3]; const array2 = [4, 5, 6];",
    answers: [
      {
        answer: "const combined = ...array1 + ...array2;",
        isCorrect: false,
      },
      {
        answer: "const combined = [array1, array2];",
        isCorrect: false,
      },
      {
        answer: "const combined = [...array1, ...array2]; ",
        isCorrect: true,
      },
      {
        answer: "const combined = array1 + array2;",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "58",
    question: "React can only render elements in the root document element.",
    answers: [
      {
        answer: "False",
        isCorrect: true,
      },
      {
        answer: "True",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "59",
    question: "What is the correct syntax to import a Component from React?",
    answers: [
      {
        answer: "import Component from 'react'",
        isCorrect: false,
      },
      {
        answer: "import [ Component ] from 'react'",
        isCorrect: false,
      },
      {
        answer: "import { Component } from 'react'",
        isCorrect: true,
      },
      {
        answer: "import React.Component from 'react'",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "60",
    question: "React separates the user interface into components. How are components combinded to create a user interface?",
    answers: [
      {
        answer: "With webpack ",
        isCorrect: false,
      },
      {
        answer: "By nesting components",
        isCorrect: true,
      },
      {
        answer: "By putting them in a folder structure",
        isCorrect: false,
      },
      {
        answer: "With code splitting",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "61",
    question: "Although React Hooks generally replace class components, there are no plans to remove classes from React.",
    answers: [
      {
        answer: "False",
        isCorrect: false,
      },
      {
        answer: "True",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "62",
    question: "Which of the following is NOT a rule for React Hooks?",
    answers: [
      {
        answer: "Hooks can only be called at the top level of a component",
        isCorrect: false,
      },
      {
        answer: "Hooks can be called in Class or Function components",
        isCorrect: true,
      },
      {
        answer: "Hooks can only be called inside React Function components",
        isCorrect: false,
      },
      {
        answer: "Hooks cannot be conditional",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "63",
    question: "Why should you avoid copying the values of props into a component's state?",
    answers: [
      {
        answer: "Because prop values cannot be stored in state ",
        isCorrect: false,
      },
      {
        answer: "Because you want to allow data to flow back up to the parent",
        isCorrect: false,
      },
      {
        answer: "Because you should never mutate state",
        isCorrect: false,
      },
      {
        answer: "Because that would create two instances of the same state that could become out of sync",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "64",
    question: "In React.js which one of the following is used to create a class for Inheritance?",
    answers: [
      {
        answer: "Create",
        isCorrect: false,
      },
      {
        answer: "Extends",
        isCorrect: true,
      },
      {
        answer: "Inherits",
        isCorrect: false,
      },
      {
        answer: "Delete",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "65",
    question: "Which of the following valid component return type of React ?",
    answers: [
      {
        answer: "2",
        isCorrect: false,
      },
      {
        answer: "5",
        isCorrect: false,
      },
      {
        answer: "1",
        isCorrect: true,
      },
      {
        answer: "3",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "66",
    question: "Which of the following is a way to handle data in React.js?",
    answers: [
      {
        answer: "State & Props",
        isCorrect: true,
      },
      {
        answer: "Services & Components",
        isCorrect: false,
      },
      {
        answer: "State & Services",
        isCorrect: false,
      },
      {
        answer: "State & Component",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "67",
    question: "Which of the following is must for the API in React.js?",
    answers: [
      {
        answer: "render",
        isCorrect: false,
      },
      {
        answer: "SetinitialComponent",
        isCorrect: true,
      },
      {
        answer: "renderComponent",
        isCorrect: false,
      },
      {
        answer: "All of the above",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "68",
    question: "Which of the following is true regarding Babel?",
    answers: [
      {
        answer: "Compiler",
        isCorrect: false,
      },
      {
        answer: "Transpilar",
        isCorrect: false,
      },
      {
        answer: "All of the above",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "69",
    question: "In React.js, how we can pass the data from one component to another in React.js?",
    answers: [
      {
        answer: "SetState",
        isCorrect: false,
      },
      {
        answer: "Render with arguments",
        isCorrect: false,
      },
      {
        answer: "Props",
        isCorrect: true,
      },
      {
        answer: "PropsTypes",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "70",
    question: "Which of the following function is true about changing the state in React.js?",
    answers: [
      {
        answer: "this.State{}",
        isCorrect: false,
      },
      {
        answer: "this.setState",
        isCorrect: true,
      },
      {
        answer: "this.setChangeState",
        isCorrect: false,
      },
      {
        answer: "All of the above",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "71",
    question: "Which of the following method is true about referring parent class in React.js?",
    answers: [
      {
        answer: "self()",
        isCorrect: false,
      },
      {
        answer: "inherits()",
        isCorrect: false,
      },
      {
        answer: "this()",
        isCorrect: false,
      },
      {
        answer: "super()",
        isCorrect: true,
      },
    ],
    category: "react",
  },
  {
    id: "72",
    question: "Which function in React.js is invoked before a component gets its props reassigned ?",
    answers: [
      {
        answer: "componentWillRecieveProps()",
        isCorrect: true,
      },
      {
        answer: "componentWillRecieveProps()",
        isCorrect: false,
      },
      {
        answer: "componentWillControlProps()",
        isCorrect: false,
      },
      {
        answer: "componentRecieveProps()",
        isCorrect: false,
      },
    ],
    category: "react",
  },
  {
    id: "73",
    question: "Which of the following is true about key props ?",
    answers: [
      {
        answer: "'Key' props are used to look beauty",
        isCorrect: false,
      },
      {
        answer: "'Key' prop is a way to identify the newly added element",
        isCorrect: true,
      },
      {
        answer: "It is one type of attribute of HTML",
        isCorrect: false,
      },
      {
        answer: "It is not used in the array",
        isCorrect: false,
      },
    ],
    category: "react",
  },

  // TYPESCRIPT Questions

  {
    id: "74",
    question: "What are the three main 'simple types' in TypeScript?",
    answers: [
      {
        answer: "Boolean, Number, String",
        isCorrect: true,
      },
      {
        answer: "Object, String, Number",
        isCorrect: false,
      },
      {
        answer: "Array, Object, Boolean",
        isCorrect: false,
      },
      {
        answer: "Object, Array, Symbol",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "75",
    question: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
    answers: [
      {
        answer: "Explicit",
        isCorrect: true,
      },
      {
        answer: "Implicit",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "76",
    question: "TypeScript can always correctly infer a variables type.",
    answers: [
      {
        answer: "True",
        isCorrect: false,
      },
      {
        answer: "False",
        isCorrect: true,
      },
    ],
    category: "typescript",
  },
  {
    id: "77",
    question: "You can disable implicit variable type assignment by enabling the compiler option:",
    answers: [
      {
        answer: "Implicit = FALSE ",
        isCorrect: false,
      },
      {
        answer: "autoTypeAssignment = FALSE",
        isCorrect: false,
      },
      {
        answer: "noImplicitAny",
        isCorrect: true,
      },
      {
        answer: "noAutoType",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "78",
    question: "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
    answers: [
      {
        answer: "strictNullChecks",
        isCorrect: true,
      },
      {
        answer: "noFalseyInits",
        isCorrect: false,
      },
      {
        answer: "strictChecksRequired",
        isCorrect: false,
      },
      {
        answer: "noAutoType",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "79",
    question: "______ is similar to 'any', but a safer alternative when uncertain about the type",
    answers: [
      {
        answer: "never",
        isCorrect: false,
      },
      {
        answer: "similar",
        isCorrect: false,
      },
      {
        answer: "unknown",
        isCorrect: true,
      },
      {
        answer: "string",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "80",
    question: "What is the inherited type for the variable example in `const example = ['Jonas']`?",
    answers: [
      {
        answer: "any[]",
        isCorrect: false,
      },
      {
        answer: "unknown[]",
        isCorrect: false,
      },
      {
        answer: "string",
        isCorrect: false,
      },
      {
        answer: "string[]",
        isCorrect: true,
      },
    ],
    category: "typescript",
  },
  {
    id: "81",
    question:
      "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
    answers: [
      {
        answer: "Allows no changes and is there simply to be read from and not modified ",
        isCorrect: true,
      },
      {
        answer: "Makes you read it for better clean code",
        isCorrect: false,
      },
      {
        answer: "Makes it private and can only be used in the file its created",
        isCorrect: false,
      },
      {
        answer: "Allows only adding but not deleting elements in the array",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "82",
    question: "TypeScript will always correctly infer the type of an array.",
    answers: [
      {
        answer: "True",
        isCorrect: false,
      },
      {
        answer: "False",
        isCorrect: true,
      },
    ],
    category: "typescript",
  },
  {
    id: "83",
    question: "a Tuple and an Array are the same thing when discussing types",
    answers: [
      {
        answer: "True",
        isCorrect: false,
      },
      {
        answer: "False",
        isCorrect: true,
      },
    ],
    category: "typescript",
  },
  {
    id: "84",
    question: "Which is a successful example of this tuple `[number, string]`?",
    answers: [
      {
        answer: "const ourTuple = [101]",
        isCorrect: false,
      },
      {
        answer: "const ourTuple = ['Coding God', 101]",
        isCorrect: false,
      },
      {
        answer: "const ourTuple = [101, 'Coding God']",
        isCorrect: true,
      },
      {
        answer: "const ourTuple = [101, 101, 'Coding God', 'Coding God']",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "85",
    question: "Type Aliases are mostly used with ______.",
    answers: [
      {
        answer: "Booleans",
        isCorrect: false,
      },
      {
        answer: "Strings",
        isCorrect: true,
      },
      {
        answer: "Numbers",
        isCorrect: false,
      },
      {
        answer: "Decimals",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "86",
    question: "Interfaces are similar to type aliases, but only for object types?",
    answers: [
      {
        answer: "True",
        isCorrect: true,
      },
      {
        answer: "False",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "87",
    question: "________ an interface will have the same properties as that interface.",
    answers: [
      {
        answer: "Idolizing",
        isCorrect: false,
      },
      {
        answer: "Duplicating",
        isCorrect: true,
      },
      {
        answer: "Extending",
        isCorrect: false,
      },
      {
        answer: "Improving",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "88",
    question: "What are the two types of enums?",
    answers: [
      {
        answer: "String and Boolean",
        isCorrect: false,
      },
      {
        answer: "String and Number",
        isCorrect: true,
      },
      {
        answer: "Number and Number Array",
        isCorrect: false,
      },
      {
        answer: "Number and Boolean",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "89",
    question: "Numeric enums first value is defaulted to what?",
    answers: [
      {
        answer: "1",
        isCorrect: false,
      },
      {
        answer: "5",
        isCorrect: false,
      },
      {
        answer: "0",
        isCorrect: true,
      },
      {
        answer: "10",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "90",
    question: "Definitely Typed is...",
    answers: [
      {
        answer: "the official name of TypeScript",
        isCorrect: false,
      },
      {
        answer: "a project whose goal is to make types dynamic",
        isCorrect: false,
      },
      {
        answer: "a project that provides a central repository of TypeScript definitions for NPM packages which do not have types",
        isCorrect: true,
      },
      {
        answer: "a superset of TypeScript",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "91",
    question: "What is the type of the parameter: `function ex(param1?: string){}`?",
    answers: [
      {
        answer: "string",
        isCorrect: false,
      },
      {
        answer: "string | undefined",
        isCorrect: true,
      },
      {
        answer: "unknown",
        isCorrect: false,
      },
      {
        answer: "string | null",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "92",
    question: "_____ is a return type for when nothing is returned.",
    answers: [
      {
        answer: "unknown",
        isCorrect: false,
      },
      {
        answer: "void",
        isCorrect: true,
      },
      {
        answer: "any",
        isCorrect: false,
      },
      {
        answer: "any[]",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "93",
    question: "Access modifiers control the ______ of properties and methods",
    answers: [
      {
        answer: "type",
        isCorrect: false,
      },
      {
        answer: "mocking",
        isCorrect: false,
      },
      {
        answer: "visibility",
        isCorrect: true,
      },
      {
        answer: "inheritance",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "94",
    question: "When a class extends another class and replaces the members of its parent it is called what?",
    answers: [
      {
        answer: "inheriting ",
        isCorrect: false,
      },
      {
        answer: "extending",
        isCorrect: false,
      },
      {
        answer: "override",
        isCorrect: true,
      },
      {
        answer: "overload",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "95",
    question: "public modifiers allow access to the class members from anywhere.",
    answers: [
      {
        answer: "True",
        isCorrect: true,
      },
      {
        answer: "False",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "96",
    question: "What is the difference between a generic type and a union type?",
    answers: [
      {
        answer: "A generic type can be used to describe a collection of types, a union type cannot",
        isCorrect: true,
      },
      {
        answer: "A generic type can be used to describe a collection of types, a union type can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, a union type can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, a union type cannot",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "97",
    question: "What is the difference between a generic type and an intersection type?",
    answers: [
      {
        answer: "A generic type can be used to describe a collection of types, an intersection type cannot",
        isCorrect: true,
      },
      {
        answer: "A generic type can be used to describe a collection of types, an intersection type can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, an intersection type can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, an intersection type cannot",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "98",
    question: "What is the difference between a generic type and an enum?",
    answers: [
      {
        answer: "A generic type can be used to describe a collection of types, an enum cannot",
        isCorrect: true,
      },
      {
        answer: "A generic type can be used to describe a collection of types, an enum can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, an enum can",
        isCorrect: false,
      },
      {
        answer: "A generic type cannot be used to describe a collection of types, an enum cannot",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "99",
    question: "What is the difference between a decorator and a higher order function?",
    answers: [
      {
        answer: "A decorator is a function that returns a function, a higher order function is a function that takes a function as an argument",
        isCorrect: true,
      },
      {
        answer: "A decorator is a function that takes a function as an argument, a higher order function is a function that returns a function",
        isCorrect: false,
      },
      {
        answer: "A decorator is a function that returns a function, a higher order function is a function that returns a function",
        isCorrect: false,
      },
      {
        answer:
          "A decorator is a function that takes a function as an argument, a higher order function is a function that takes a function as an argument",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "100",
    question: "What is the difference between a decorator and a mixin?",
    answers: [
      {
        answer: "A decorator is a function that returns a function, a mixin is a function that takes a function as an argument",
        isCorrect: true,
      },
      {
        answer: "A decorator is a function that takes a function as an argument, a mixin is a function that returns a function",
        isCorrect: false,
      },
      {
        answer: "A decorator is a function that returns a function, a mixin is a function that returns a function",
        isCorrect: false,
      },
      {
        answer: "A decorator is a function that takes a function as an argument, a mixin is a function that takes a function as an argument",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  {
    id: "101",
    question: "What is TypeScript?",
    answers: [
      {
        answer: "A superset of JavaScript that compiles to plain JavaScript",
        isCorrect: true,
      },
      {
        answer: "A superset of JavaScript that compiles to plain Java",
        isCorrect: false,
      },
      {
        answer: "A superset of JavaScript that compiles to plain C#",
        isCorrect: false,
      },
    ],
    category: "typescript",
  },
  //HTML Questions
  {
    id: "102",
    question: "What does HTML stand for?",
    answers: [
      {
        answer: "Hyperlinks and Text Markup Language",
        isCorrect: false,
      },
      {
        answer: "Home Tool Markup Language",
        isCorrect: false,
      },
      {
        answer: "Hyper Text Markup Language",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "103",
    question: "Who is making the Web standards?",
    answers: [
      {
        answer: "Mozilla",
        isCorrect: false,
      },
      {
        answer: "Google",
        isCorrect: false,
      },
      {
        answer: "Microsoft",
        isCorrect: false,
      },
      {
        answer: "The World Wide Web Consortium",
        isCorrect: true,
      },
    ],
    category: "html",
  },
  {
    id: "104",
    question: "Choose the correct HTML element for the largest heading:",
    answers: [
      {
        answer: "<h1>",
        isCorrect: true,
      },
      {
        answer: "<heading>",
        isCorrect: false,
      },
      {
        answer: "<h6>",
        isCorrect: false,
      },
      {
        answer: "<head>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "105",
    question: "What is the correct HTML element for inserting a line break?",
    answers: [
      {
        answer: "<br>",
        isCorrect: true,
      },
      {
        answer: "<lb>",
        isCorrect: false,
      },
      {
        answer: "<break>",
        isCorrect: false,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "106",
    question: "What is the correct HTML for adding a background color?",
    answers: [
      {
        answer: "<body bg='yellow'>",
        isCorrect: false,
      },
      {
        answer: "<body style='background-color:yellow;'>",
        isCorrect: true,
      },
      {
        answer: "<background>yellow</background>",
        isCorrect: false,
      },
      {
        answer: "<body bgColor='yellow'>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "107",
    question: "Which character is used to indicate an end tag?",
    answers: [
      {
        answer: "/",
        isCorrect: false,
      },
      {
        answer: "*",
        isCorrect: false,
      },
      {
        answer: ">",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "108",
    question: "How can you make a numbered list?",
    answers: [
      {
        answer: "<ol>",
        isCorrect: true,
      },
      {
        answer: "<dl>",
        isCorrect: false,
      },
      {
        answer: "<ul>",
        isCorrect: false,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "109",
    question: "How can you make a bulleted list?",
    answers: [
      {
        answer: "<ol>",
        isCorrect: false,
      },
      {
        answer: "<dl>",
        isCorrect: false,
      },
      {
        answer: "<ul>",
        isCorrect: true,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "110",
    question: "What is the correct HTML for making a checkbox?",
    answers: [
      {
        answer: "<checkbox>",
        isCorrect: false,
      },
      {
        answer: "<check>",
        isCorrect: false,
      },
      {
        answer: "<input type='checkbox'>",
        isCorrect: true,
      },
      {
        answer: "<input type='check'>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "111",
    question: "What is the correct HTML for making a text input field?",
    answers: [
      {
        answer: "<input type='textfield'>",
        isCorrect: false,
      },
      {
        answer: "<input type='text'>",
        isCorrect: true,
      },
      {
        answer: "<textfield>",
        isCorrect: false,
      },
      {
        answer: "<textinput>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "112",
    question: "What is the correct HTML for making a drop-down list?",
    answers: [
      {
        answer: "<select>",
        isCorrect: true,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
      {
        answer: "<input type='list'>",
        isCorrect: false,
      },
      {
        answer: "<input type='dropdown'>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "113",
    question: "What is the correct HTML for making a text area?",
    answers: [
      {
        answer: "<input type='textarea'>",
        isCorrect: false,
      },
      {
        answer: "<textarea>",
        isCorrect: true,
      },
      {
        answer: "<input type='textbox'>",
        isCorrect: false,
      },
      {
        answer: "<textbox>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "114",
    question: "What is the correct HTML for inserting an image?",
    answers: [
      {
        answer: "<img href='image.gif' alt='MyImage'>",
        isCorrect: false,
      },
      {
        answer: "<image src='image.gif' alt='MyImage'>",
        isCorrect: false,
      },
      {
        answer: "<img src='image.gif' alt='MyImage'>",
        isCorrect: true,
      },
      {
        answer: "<img alt='MyImage'>image.gif</img>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "115",
    question: "What is the correct HTML for creating a hyperlink?",
    answers: [
      {
        answer: "<a url='http://www.w3schools.com'>W3Schools.com</a>",
        isCorrect: false,
      },
      {
        answer: "<a name='http://www.w3schools.com'>W3Schools.com</a>",
        isCorrect: false,
      },
      {
        answer: "<a href='http://www.w3schools.com'>W3Schools.com</a>",
        isCorrect: true,
      },
      {
        answer: "<a>http://www.w3schools.com</a>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "116",
    question: "Which HTML element defines the title of a document?",
    answers: [
      {
        answer: "<title>",
        isCorrect: true,
      },
      {
        answer: "<head>",
        isCorrect: false,
      },
      {
        answer: "<meta>",
        isCorrect: false,
      },
      {
        answer: "<document>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "117",
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: [
      {
        answer: "src",
        isCorrect: false,
      },
      {
        answer: "title",
        isCorrect: false,
      },
      {
        answer: "alt",
        isCorrect: true,
      },
      {
        answer: "longdesc",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "118",
    question: "The HTML <canvas> element is used to:",
    answers: [
      {
        answer: "draw graphics",
        isCorrect: true,
      },
      {
        answer: "create draggable elements",
        isCorrect: false,
      },
      {
        answer: "manipulate data in MySQL",
        isCorrect: false,
      },
      {
        answer: "display database records",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "119",
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    answers: [
      {
        answer: "formvalidate",
        isCorrect: false,
      },
      {
        answer: "required",
        isCorrect: true,
      },
      {
        answer: "validate",
        isCorrect: false,
      },
      {
        answer: "placeholder",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "120",
    question: "Which input type defines a slider control?",
    answers: [
      {
        answer: "controls",
        isCorrect: false,
      },
      {
        answer: "range",
        isCorrect: true,
      },
      {
        answer: "slider",
        isCorrect: false,
      },
      {
        answer: "search",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "121",
    question: "Which HTML element is used to display a scalar measurement within a range?",
    answers: [
      {
        answer: "<meter>",
        isCorrect: true,
      },
      {
        answer: "<range>",
        isCorrect: false,
      },
      {
        answer: "<gauge>",
        isCorrect: false,
      },
      {
        answer: "<measure>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "122",
    question: "Which HTML element is used to specify a header for a document or section?",
    answers: [
      {
        answer: "<top>",
        isCorrect: false,
      },
      {
        answer: "<section>",
        isCorrect: false,
      },
      {
        answer: "<head>",
        isCorrect: false,
      },
      {
        answer: "<header>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "123",
    question: "An <iframe> is used to display a web page within a web page.",
    answers: [
      {
        answer: "True",
        isCorrect: true,
      },
      {
        answer: "False",
        isCorrect: false,
      },
      {
        answer: "There is no such thing as <iframe>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "124",
    question: "Which HTML element is used to specify a header for a document or section?",
    answers: [
      {
        answer: "<top>",
        isCorrect: false,
      },
      {
        answer: "<section>",
        isCorrect: false,
      },
      {
        answer: "<head>",
        isCorrect: false,
      },
      {
        answer: "<header>",
        isCorrect: true,
      },
    ],
    category: "html",
  },
  {
    id: "125",
    question: "What is the correct HTML for making a drop-down list?",
    answers: [
      {
        answer: "<select>",
        isCorrect: true,
      },
      {
        answer: "<input type='dropdown'>",
        isCorrect: false,
      },
      {
        answer: "<input type='list'>",
        isCorrect: false,
      },
      {
        answer: "<list>",
        isCorrect: false,
      },
    ],
    category: "html",
  },
  {
    id: "126",
    question: "Which input type defines a slider control?",
    answers: [
      {
        answer: "controls",
        isCorrect: false,
      },
      {
        answer: "range",
        isCorrect: true,
      },
      {
        answer: "slider",
        isCorrect: false,
      },
      {
        answer: "search",
        isCorrect: false,
      },
    ],
    category: "html",
  },

  //JavaScript Questions
  {
    id: "127",
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {
        answer: "<js>",
        isCorrect: false,
      },
      {
        answer: "<scripting>",
        isCorrect: false,
      },
      {
        answer: "<script>",
        isCorrect: true,
      },
      {
        answer: "<javascript>",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "128",
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      {
        answer: "The <head> section",
        isCorrect: false,
      },
      {
        answer: "The <body> section",
        isCorrect: true,
      },
      {
        answer: "Both the <head> section and the <body> section are correct",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "129",
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      {
        answer: "<script href='xxx.js'>",
        isCorrect: false,
      },
      {
        answer: "<script name='xxx.js'>",
        isCorrect: false,
      },
      {
        answer: "<script src='xxx.js'>",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "130",
    question: "The external JavaScript file must contain the <script> tag.",
    answers: [
      {
        answer: "True",
        isCorrect: false,
      },
      {
        answer: "False",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "131",
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {
        answer: "alertBox('Hello World');",
        isCorrect: false,
      },
      {
        answer: "msg('Hello World');",
        isCorrect: false,
      },
      {
        answer: "alert('Hello World');",
        isCorrect: true,
      },
      {
        answer: "msgBox('Hello World');",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "132",
    question: "How do you create a function in JavaScript?",
    answers: [
      {
        answer: "function = myFunction()",
        isCorrect: false,
      },
      {
        answer: "function:myFunction()",
        isCorrect: false,
      },
      {
        answer: "function myFunction()",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "133",
    question: "How do you call a function named 'myFunction'?",
    answers: [
      {
        answer: "call function myFunction()",
        isCorrect: false,
      },
      {
        answer: "myFunction()",
        isCorrect: true,
      },
      {
        answer: "call myFunction()",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "134",
    question: "How to write an IF statement in JavaScript?",
    answers: [
      {
        answer: "if i = 5",
        isCorrect: false,
      },
      {
        answer: "if i == 5 then",
        isCorrect: false,
      },
      {
        answer: "if (i == 5)",
        isCorrect: true,
      },
      {
        answer: "if i = 5 then",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "135",
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: [
      {
        answer: "if i <> 5",
        isCorrect: false,
      },
      {
        answer: "if (i != 5)",
        isCorrect: true,
      },
      {
        answer: "if (i <> 5)",
        isCorrect: false,
      },
      {
        answer: "if i =! 5 then",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "136",
    question: "How does a WHILE loop start?",
    answers: [
      {
        answer: "while (i <= 10; i++)",
        isCorrect: false,
      },
      {
        answer: "while (i <= 10)",
        isCorrect: true,
      },
      {
        answer: "while i = 1 to 10",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "137",
    question: "How does a FOR loop start?",
    answers: [
      {
        answer: "for (i = 0; i <= 5)",
        isCorrect: true,
      },
      {
        answer: "for (i = 0; i <= 5; i++)",
        isCorrect: false,
      },
      {
        answer: "for i = 1 to 5",
        isCorrect: false,
      },
      {
        answer: "for (i <= 5; i++)",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "138",
    question: "How can you add a comment in a JavaScript?",
    answers: [
      {
        answer: "'This is a comment",
        isCorrect: false,
      },
      {
        answer: "//This is a comment",
        isCorrect: true,
      },
      {
        answer: "<!--This is a comment-->",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "139",
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      {
        answer: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        isCorrect: false,
      },
      {
        answer: "var colors = 'red', 'green', 'blue'",
        isCorrect: false,
      },
      {
        answer: "var colors = ['red', 'green', 'blue']",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "140",
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      {
        answer: "rnd(7.25)",
        isCorrect: false,
      },
      {
        answer: "Math.rnd(7.25)",
        isCorrect: false,
      },
      {
        answer: "round(7.25)",
        isCorrect: false,
      },
      {
        answer: "Math.round(7.25)",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "141",
    question: "How do you find the number with the highest value of x and y?",
    answers: [
      {
        answer: "ceil(x, y)",
        isCorrect: false,
      },
      {
        answer: "Math.ceil(x, y)",
        isCorrect: false,
      },
      {
        answer: "top(x, y)",
        isCorrect: false,
      },
      {
        answer: "Math.max(x, y)",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "142",
    question: "JavaScript is the same as Java.",
    answers: [
      {
        answer: "False",
        isCorrect: true,
      },
      {
        answer: "True",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "143",
    question: "How can you detect the client's browser name?",
    answers: [
      {
        answer: "navigator.appName",
        isCorrect: true,
      },
      {
        answer: "client.navName",
        isCorrect: false,
      },
      {
        answer: "browser.name",
        isCorrect: false,
      },
      {
        answer: "web.BrowserName",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
  {
    id: "144",
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      {
        answer: "onmouseover",
        isCorrect: false,
      },
      {
        answer: "onmouseclick",
        isCorrect: false,
      },
      {
        answer: "onchange",
        isCorrect: false,
      },
      {
        answer: "onclick",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "145",
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      {
        answer: "x",
        isCorrect: false,
      },
      {
        answer: "*",
        isCorrect: false,
      },
      {
        answer: "-",
        isCorrect: false,
      },
      {
        answer: "=",
        isCorrect: true,
      },
    ],
    category: "javascript",
  },
  {
    id: "146",
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      {
        answer: "true",
        isCorrect: true,
      },
      {
        answer: "false",
        isCorrect: false,
      },
      {
        answer: "NaN",
        isCorrect: false,
      },
      {
        answer: "unknown",
        isCorrect: false,
      },
    ],
    category: "javascript",
  },
];

export default QuizItems;
