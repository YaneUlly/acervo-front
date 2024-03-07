import { createContext, useContext, useState } from 'react';
import { addCoffeeQuiz } from '../api/coffees.api';

// Context
const CoffeeQuizContext = createContext();

// access the context
const useCoffeeQuiz = () => {
  return useContext(CoffeeQuizContext);
};

// Provide the context
const CoffeeQuizProvider = props => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    method: '',
    region: '',
    roast: '',
    caffeine: '',
    flavor: '',
  });
  const [recommendedCoffee, setRecommendedCoffee] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer,
    }));
    // console.log('Answers', answer);
  };

  const handleSubmit = async () => {
    try {
      // console.log('Submitting answers:', answers);
      const response = await addCoffeeQuiz(answers);
      setRecommendedCoffee(response.data.recommendedCoffee);
      setShowRecommendation(true);
    } catch (error) {
      console.error('Failed to fetch coffee recommendation');
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({
      method: '',
      region: '',
      roast: '',
      caffeine: '',
      flavor: '',
    });
    setRecommendedCoffee(null);
    setShowRecommendation(false);
  };

  return (
    <CoffeeQuizContext.Provider
      value={{
        step,
        answers,
        recommendedCoffee,
        handleAnswer,
        handleSubmit,
        nextStep,
        prevStep,
        resetQuiz,
        showRecommendation,
      }}
    >
      {props.children}
    </CoffeeQuizContext.Provider>
  );
};

export { useCoffeeQuiz, CoffeeQuizProvider };
