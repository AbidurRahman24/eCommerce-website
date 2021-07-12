import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div >

      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Shop />
          </Route>
          <Route path="/home">
            <Shop />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
