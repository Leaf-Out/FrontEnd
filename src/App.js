import React from 'react';
import Home from "./components/views/Home";
import Catalog from "./components/views/Catalog";
import Park from './components/views/Park';
import Plan from './components/views/Plan';
import SignIn from "./components/views/SignIn";
import SignUp from "./components/views/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Activity from './components/views/Activity';
import HomeAdmin from './components/views/HomeAdmin';
import jwt from 'jsonwebtoken';
import ShoppingCart from './components/views/ShoppingCart';
import Checkout from './components/views/Checkout';
import Transactions from './components/views/Transactions';
import RemovePlans from './components/views/RemovePlans';
import RemovePark from './components/views/RemovePark';
import RemoveActivity from './components/views/RemoveActivity';
import NewPark from './components/views/NewPark';
import NewPlan from './components/views/NewPlan';
import NewActivity from './components/views/NewActivity'
import UpdatePark from './components/views/UpdatePark';
import UpdateViewPark from './components/views/UpdateViewPark';
import UpdateViewPlans from './components/views/UpdateViewPlans';
import UpdatePlan from './components/views/UpdatePlan';
import UpdateActivity from './components/views/UpdateActivity';
import UpdateViewActivities from './components/views/UpdateViewActivities';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e2f1f8',
      main: '#b0bec5',
      dark: '#808e95',
      contrastText: '#000000',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />              
            </Route>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route path="/park/:name">
              <Park />
            </Route>
            <Route exact path="/activity/:name">
              <Activity />
            </Route>
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/plan/:name">
              <Plan />
            </Route>
            <Route exact path="/shoppingcart">
              <ShoppingCart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
            <Route exact path="/removePark">
              <RemovePark />
            </Route>
            <Route exact path="/removePlan">
              <RemovePlans />
            </Route>
            <Route exact path="/removeActivity">
              <RemoveActivity />
            </Route>
            <Route exact path="/newPark">
              <NewPark />
            </Route>
            <Route exact path="/newPlan">
              <NewPlan />
            </Route>
            <Route exact path="/newActivity">
              <NewActivity />
            </Route>
            <Route exact path="/updatePark/:name">
              <UpdatePark />
            </Route>
            <Route exact path="/updateViewPark">
              <UpdateViewPark />
            </Route>
            <Route exact path="/updatePlan/:name">
              <UpdatePlan />
            </Route>
            <Route exact path="/updateViewPlans">
              <UpdateViewPlans />
            </Route>
            <Route exact path="/updateActivity/:name">
              <UpdateActivity />
            </Route>
            <Route exact path="/updateViewActivities">
              <UpdateViewActivities />
            </Route>


            
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App