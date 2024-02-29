import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HowToTaste from './pages/HowToTaste';
import CoffeeQuiz from './pages/CoffeeQuiz';
import CoffeeTaste from './pages/CoffeeTaste';
import CoffeeHub from './pages/CoffeeHub';
import CoffeeHubDetails from './pages/CoffeeHubDetails';
import CreateCoffee from './pages/CreateCoffee';
import CoffeeTasteDetails from './pages/CoffeeTasteDetails';
import EditCoffeeTaste from './pages/EditCoffeeTaste';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/howtotaste' element={<HowToTaste />} />
        <Route path='/coffeequiz' element={<CoffeeQuiz />} />
        <Route path='/coffeetaste' element={<CoffeeTaste />} />
        <Route path='/coffeehub' element={<CoffeeHub />} />
        <Route path='/coffeehub/:coffeeId' element={<CoffeeHubDetails />} />
        <Route path='/coffeetaste/create' element={<CreateCoffee />} />
        <Route path='/coffeetaste/:coffeeId' element={<CoffeeTasteDetails />} />
        <Route
          path='/coffeetaste/edit/:coffeeId'
          element={<EditCoffeeTaste />}
        />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
