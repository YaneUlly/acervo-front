import { useCoffeeQuiz } from '../context/coffeequiz.context';
import CaffeineQuestion from '../components/CaffeineQuestion';
import MethodQuestion from '../components/MethodQuestion';
import RoastQuestion from '../components/RoastQuestion';
import RegionQuestion from '../components/RegionQuestion';
import FlavorQuestion from '../components/FlavorQuestion';

function CoffeeQuiz() {
  const { step, recommendedCoffee, handleSubmit, nextStep, prevStep } =
    useCoffeeQuiz();

  return (
    <div>
      {step === 1 && (
        <div>
          <h1>Quiz - Step 1</h1>
          <CaffeineQuestion />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1>Quiz - Step 2</h1>
          <MethodQuestion />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1>Quiz - Step 3</h1>
          <RoastQuestion />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h1>Quiz - Step 4</h1>
          <RegionQuestion />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 5 && (
        <div>
          <h1>Quiz - Step 4</h1>
          <FlavorQuestion />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
      {recommendedCoffee && (
        <div>
          <h2>Recommended Coffee</h2>
          <p>{recommendedCoffee.coffeeName}</p>
          <p>{recommendedCoffee.description}</p>
        </div>
      )}
    </div>
  );
}

export default CoffeeQuiz;
