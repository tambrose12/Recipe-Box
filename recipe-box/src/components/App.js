import '../App.css';
import Header from './Header';
import Footer from './Footer';
// import Home from './Home';
import RecipeContainer from './RecipeContainer';
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipe-box" > */}
          <RecipeContainer />
        {/* </Route>
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
