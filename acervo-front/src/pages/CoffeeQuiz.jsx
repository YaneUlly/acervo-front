import { useState } from 'react';
import { addCoffeeQuiz } from '../api/coffees.api';

function CoffeeQuiz() {
  const [answers, setAnswers] = useState({
    method: '',
    region: '',
    roast: '',
    caffeine: '',
    flavor: [],
  });
  const [recommendedCoffee, setRecommendedCoffee] = useState(null);

  const handleAnswer = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await addCoffeeQuiz(answers);
      setRecommendedCoffee(response.data.recommendedCoffee);
    } catch (error) {
      console.error('Failed to fetch coffee recommendation');
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <h3>How do you take your coffee?</h3>
        <button onClick={() => handleAnswer('caffeine', 'regular')}>
          Regular
        </button>
        <button onClick={() => handleAnswer('caffeine', 'decaf')}>Decaf</button>
        <button onClick={() => handleAnswer('caffeine', 'regular', 'decaf')}>
          Varies
        </button>
      </div>
      <div>
        <h3>Which method you user to brew your coffee?</h3>
        <button onClick={() => handleAnswer('method', 'espresso')}>
          Espresso Machine
        </button>
        <button onClick={() => handleAnswer('method', 'aeropress')}>
          Aeropress
        </button>
        <button onClick={() => handleAnswer('method', 'moka pot')}>
          Moka Pot
        </button>
        <button onClick={() => handleAnswer('method', 'V60')}>V60</button>
        <button onClick={() => handleAnswer('method', 'chemex')}>Chemex</button>
        <button onClick={() => handleAnswer('method', 'mocchamaster')}>
          Mocchamaster
        </button>
        <button
          onClick={() =>
            handleAnswer(
              'method',
              'espresso',
              'aeropress',
              'moka pot',
              'V60',
              'chemex',
              'mocchamaster'
            )
          }
        >
          Others
        </button>
      </div>
      <div>
        <h3>Are you used to buy a specific coffee region?</h3>
        <button onClick={() => handleAnswer('region', 'central america')}>
          Central America
        </button>
        <button onClick={() => handleAnswer('region', 'south america')}>
          South America
        </button>
        <button onClick={() => handleAnswer('region', 'asia')}>Asia</button>
        <button onClick={() => handleAnswer('region', 'africa')}>Africa</button>
        <button onClick={() => handleAnswer('region', 'arabia')}>Arabia</button>
      </div>
      <div>
        <h3>What kind of flavor would you go for?</h3>
        <button onClick={() => handleAnswer('flavor', 'fruity')}>Fruity</button>
        <button onClick={() => handleAnswer('flavor', 'spicy', 'floral')}>
          Spicy and Floral
        </button>
        <button onClick={() => handleAnswer('flavor', 'chocolate', 'sweet')}>
          Chocolate and sweets
        </button>
      </div>
      <div>
        <h3>Waht roasts do you typically buy?</h3>
        <button onClick={() => handleAnswer('roast', 'light roast')}>
          Light Roast
        </button>
        <button onClick={() => handleAnswer('roast', 'medium roast')}>
          Medium Roast
        </button>
        <button onClick={() => handleAnswer('roast', 'dark roast')}>
          Dark Roast
        </button>
      </div>
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
