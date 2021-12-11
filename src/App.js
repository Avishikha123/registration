
import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Sitemap from './Sitemap';

function App() {
  return (
    
     <React.Fragment>
       <Header />
       <Content />
       <Footer />
       
       
     

    </React.Fragment>
  );
}

export default App;
