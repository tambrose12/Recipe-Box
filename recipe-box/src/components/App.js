import '../App.css';
import Header from './Header';
import Footer from './Footer';
import RecipeContainer from './RecipeContainer';



function App() {

  return (
    <div className="App">
      <Header />
      <RecipeContainer />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
