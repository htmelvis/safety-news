import React from 'react';
import Nav from '../components/navigation';
import Footer from '../components/footer';

const AppContainer = (props) => (
  <div className="application container">
    <Nav />
    <div className="main main-content">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default AppContainer;