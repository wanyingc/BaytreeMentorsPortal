import React from 'react';
import './Messages.css';
import logo from '../../assets/logo192.png';



function message() {
  return (
  <div id="boxes">
	  <h1 id="title">Messages</h1>
	  <hr id="line"/>
    <div id="message-list">
      <button id="message">
        <div>
          <div>
          <img src={logo} id="logo" alt="logo"></img>

          </div>
          <div>
            <h1 id="messageTitle">Message Title</h1>
            <p id="messageBody">This is the body of the message.</p>
          </div>
          <div>
            <h2 id="time">{new Date().toLocaleDateString()}</h2>
            <p id="name">by Sender Name</p>
          </div>
        </div>
      </button>
    </div>
  </div>
  );
}

export default message;
