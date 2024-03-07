import { useCoffeeQuiz } from '../context/coffeequiz.context';

function FlavorQuestion() {
  const { handleAnswer } = useCoffeeQuiz();

  return (
    <div>
      <h3>What type of flavors do you enjoy in your drink?</h3>
      <button onClick={() => handleAnswer('flavor', 'sweet')}>Sweet</button>
      <button onClick={() => handleAnswer('flavor', 'floral')}>Floral</button>
      <button onClick={() => handleAnswer('flavor', 'fruity')}>Fruity</button>
      <button onClick={() => handleAnswer('flavor', 'spices')}>Spices</button>
      <button onClick={() => handleAnswer('flavor', 'nutty-cocoa')}>
        Nutty/Cocoa
      </button>
      <button onClick={() => handleAnswer('flavor', 'nutty-cocoa')}>
        I dont have a preference
      </button>
    </div>
  );
}

export default FlavorQuestion;
