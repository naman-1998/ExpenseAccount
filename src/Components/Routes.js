import React from 'react'
import Login  from './Login';
import SignUp from './SignUp';
import About from './About';
import Contact from './Contact';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';

const Routes = () => {
    return (
         
          
          <Switch>         
                <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path ="/contact" component={Contact}/>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/signup" component={SignUp}/>
               
          </Switch>
          
    )
}

export default Routes
