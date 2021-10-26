import React ,{useState}from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AddTransaction from "./AddTransaction";
import  List  from "./List"

// import useSession from "./useSession";

const Container = (props) => {
const {component:Component}=props;
const [isLogin,setIsLogin]=useState(false);
const userDetails= localStorage.getItem('userDetail');
console.log('naman');
  return (
    <>
      <Header isLogin={isLogin} userDetails={userDetails} />
      <Component setIsLogin={setIsLogin} userDetails={userDetails} />
      <Footer />
    </>
  );
};
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={()=> <Container component={Home}/>} />
      <Route exact path="/about" render={()=> <Container component={About}/>} />
      <Route exact path="/contact" render={()=> <Container component={Contact}/>} />
      <Route exact path="/login" render={()=> <Container component={Login}/>}/>
      <Route exact path="/signup" render={()=> <Container component={SignUp}/>} />
      <Route exact path="/accounts/addtransaction" render={()=> <Container component={AddTransaction}/>} />
      <Route exact path="/accounts/list" render={()=> <Container component={List}/>} />
    </Switch>
  );
};

export default Routes;
