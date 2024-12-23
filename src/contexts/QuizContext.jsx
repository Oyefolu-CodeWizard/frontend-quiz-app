import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],

  // 'ready', 'error', 'finished'
  status: "ready",
  index: 0,
  answer: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: [...state.answer] };
    case "newAnswer": {
      const updatedAnswers = [...state.answer];
      updatedAnswers[state.index] = action.payload;
      return { ...state, answer: updatedAnswers };
    }
    case "finish":
      return { ...state, status: "finished" };
    case "playAgain":
      return { ...initialState, questions: state.questions, status: "ready" };

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/quizzes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{ questions, status, index, answer, points, highscore, dispatch }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
