import { useCoffeeQuiz } from '../context/coffeequiz.context';
import QuizHome from '../components/QuizHome';
import CaffeineQuestion from '../components/CaffeineQuestion';
import MethodQuestion from '../components/MethodQuestion';
import RoastQuestion from '../components/RoastQuestion';
import RegionQuestion from '../components/RegionQuestion';
import FlavorQuestion from '../components/FlavorQuestion';
import RecommendedCoffee from '../components/RecommendedCoffee';

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
