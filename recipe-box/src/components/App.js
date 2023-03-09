import '../App.css';
import Header from './Header';
import Footer from './Footer';
import RecipeContainer from './RecipeContainer';

import {useState} from "react";

function App() {

  const [showDarkMode, setShowDarkMode] = useState(false)

  function onDarkModeClick () {
    setShowDarkMode(!showDarkMode)
  }

  return (
    <div className={showDarkMode? "App dark" : "App"}>
      <Header onDarkModeClick={onDarkModeClick} buttonText={showDarkMode ? "Light": "Dark" } />
      <RecipeContainer />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
