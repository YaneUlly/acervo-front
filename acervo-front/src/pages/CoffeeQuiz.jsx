import { useCoffeeQuiz } from '../context/coffeequiz.context';
import QuizHome from '../components/QuizQuestions/QuizHome';
import CaffeineQuestion from '../components/QuizQuestions/CaffeineQuestion';
import MethodQuestion from '../components/QuizQuestions/MethodQuestion';
import RoastQuestion from '../components/QuizQuestions/RoastQuestion';
import RegionQuestion from '../components/QuizQuestions/RegionQuestion';
import FlavorQuestion from '../components/QuizQuestions/FlavorQuestion';
import RecommendedCoffee from '../components/QuizQuestions/RecommendedCoffee';

function CoffeeQuiz() {
  const { step, recommendedCoffee, resetQuiz, showRecommendation } =
    useCoffeeQuiz();

  return (
    <div>
      {showRecommendation ? (
        <div>
          <RecommendedCoffee
            recommendedCoffee={recommendedCoffee}
            resetQuiz={resetQuiz}
          />
        </div>
      ) : (
        <div>
          {step === 1 && (
            <div>
              <QuizHome />
            </div>
          )}
          {step === 2 && (
            <div>
              <CaffeineQuestion />
            </div>
          )}
          {step === 3 && (
            <div>
              <MethodQuestion />
            </div>
          )}
          {step === 4 && (
            <div>
              <RoastQuestion />
            </div>
          )}
          {step === 5 && (
            <div>
              <RegionQuestion />
            </div>
          )}
          {step === 6 && (
            <div>
              <FlavorQuestion />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CoffeeQuiz;
