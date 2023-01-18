import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Software from './components/Software/Software';
import Support from './components/SupportNote/SupportNote';
import Aboutus from './components/AboutUs/Aboutus';
import Footer from './Footer';
import SupportVideo from './components/SupportVideo/SupportVideo';
import SupportNote from './components/SupportNote/SupportNote';
import Cart from './components/Cart/Cart';
import CheckoutInfo from './components/CheckoutInfo/CheckoutInfo';
import CheckoutShipping from './components/CheckoutShipping/CheckoutShipping'
import CheckoutPayment from './components/CheckoutPayment/CheckoutPayment'
import Psggrant from './components/Psggrant/Psggrant';
import AddProducts from './components/Software/AddProducts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Aboutus' exact component={Aboutus} />
          <Route path='/Blog' component={Blog} />
          <Route path='/Software' component={Software} />
          <Route path='/Support' component={Support} />
          <Route path='/SupportNote' component={SupportNote} />
          <Route path='/SupportVideo' component={SupportVideo} />
          <Route path='/Cart' component={Cart}/>
          <Route path='/CheckoutInfo' component={CheckoutInfo}/>
          <Route path='/CheckoutShipping' component={CheckoutShipping}/>
          <Route path='/CheckoutPayment' component={CheckoutPayment}/>
          <Route path='/Psggrant' component={Psggrant} />
          <Route path='/AddProducts' component={AddProducts} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
