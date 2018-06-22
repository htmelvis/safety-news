import React from 'react';

const Nav = (props) => (
  <div className="navigation">
    <div className="container">
      <img src="/public/images/wsn.png" alt="Work Safety News" class="float-left brand" />
      <ul className="nav float-right">
        <li><a href="/">Account</a></li>
        <li><a href="#">Log Out</a></li>
      </ul>
    </div>
  </div>
);

export default Nav;