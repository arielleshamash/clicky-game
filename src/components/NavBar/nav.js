import React from "react";
import "./nav.css";

const Nav = props => (
  <nav>
    <span className = "header">{props.title}</span>
      
    <ul class="nav justify-content-end">
      
      {/* <li id="message">{props.message}</li> */}

      <li id="gameScore">Current Score: {props.score}</li>

      <li id="highScore">Top Score: {props.highScore}</li>
    </ul>
  </nav>
);

export default Nav;
