import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Login from './Login';
import Community from './CommunityPage';
import ShopPage from './ShopPage';
import StartSelling from './StartSelling';
import PreLoved from './PreLoved';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-page-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/pre-loved" component={PreLoved} />
          <Route exact path="/disability-shop" component={StartSelling} />
          <Route exact path="/my-account" component={Login} />
        </Switch>
        {/*footer component*/}
      </div>
    </div>
  );
}

export default App;
