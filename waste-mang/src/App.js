

import './App.css';
import { MyContext } from './MyContext';
import { useEffect, useState } from 'react';
import { makePayment } from './stripe/stripedata';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';
import Sell from './components/Sell';
import Donation from './components/Donation';

function App() {
  const [loggedInUser, setloggedInUser] = useState(null);
 useEffect(() => {
  (async function()  {
    // await makePayment([{
    //   name : "sample", 
    //   images : ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2aK0DMdxTRW8nebSSottLs&ust=1711964109888000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj007eZnoUDFQAAAAAdAAAAABAE'],
    //   price : 20,
    //   quantity: 1
    // }])
  })()
 },[])
  return (
    <MyContext.Provider value={{ loggedInUser, setloggedInUser }}>
      {/* Components start here */}
      <Router>
      <Switch>
      
      <Route path="/register" component={Register} />    
      <Route path="/login" component={Login} />    
         
      <Route path="/sell" component={Sell} />    
      <Route path="/donate" component={Donation} />    
      <Route path="/" component={Home} /> 
      {/* <Route path="/home" component={Home} />
      <Route path="/" component={Login} /> */}
      
      
        
     
      </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
