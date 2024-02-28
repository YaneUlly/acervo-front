import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/howtotaste'>How to taste</Link>
      <Link to='coffeequiz'>Coffee Quiz</Link>
    </nav>
  );
}

export default Navbar;
