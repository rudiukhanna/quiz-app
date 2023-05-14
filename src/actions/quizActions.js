export const handleAnswerOptionClick = (isCorrect) => {
    return {
      type: 'HANDLE_ANSWER_OPTION_CLICK',
      payload: { isCorrect }
    };
  };
  
  export const resetQuiz = () => {
    return {
      type: 'RESET_QUIZ'
    };
  };