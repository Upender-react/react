import './Content.css';
import React, { Component, useState } from 'react'
function Content() {
 return <>
    <div className="content">
      <div className="column">
        <div id="consultation_1">
          <img src="consultation.png" />
          <h2 className="title">Give your sidekick <br />something good.</h2>
          <p>Superior pet health kicks off with our two-minute quiz.</p>
          <div className="button">
            <button type="submit" className="btn">Get Started <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon.png"/></button>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Content;