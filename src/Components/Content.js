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
            <button type="submit" className="btn" onClick={ShowIt}>Get Started <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon.png"/></button>
          </div>
        </div>

        <div id="form_1" className="srt_2" style={{display:"none"}}>
          <div className="row">
            <div className="col-md-12">
              <h5>Lets get to know you! Whats your name and email?</h5>
              <form action="/action_page.php" className="needs-validation form-inline" autoComplete="off">
                <div className="form-group form">
                  <input type="text" className="form-control" id="uname" placeholder="Your First Name" name="uname" required="" />
                </div>
                <div className="form-group form">
                  <input type="text" className="form-control" id="uname" placeholder="Your Last Name" name="uname" required="" />
                </div>
                <div className="form-group form">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" required="" />
                </div>
                <div className="form-group">
                  <div className="button_1">
                    <button type="submit" className="btn" onClick={ShowIt}>Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon_1.png" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="form_2" className="srt_2" style={{display:"none"}}>
          <div className="row">
            <div className="col-md-12">
              <h5>Great to meet ya! Whats your dogs name?</h5>
              <form action="" className="needs-validation form-inline" autoComplete="off">
                <div className="form-group form">
                  <input type="text" className="form-control" id="uname" placeholder="Fido, Snoopy, Wishbone, etc." name="uname" required="" />
                </div>
                <div className="form-group">
                  <div className="button_1">
                    <button type="submit" className="btn" onClick={ShowIt}>Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon_1.png" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="form_3" className="srt_2" style={{display:"none"}}>
          <div className="row">
            <div className="col-md-12">
              <h5><span>Is </span><span color="#FF7F00">testing</span><span> a good boy or a good girl?</span></h5>
              <form action="/action_page.php" className="needs-validation form-inline" autoComplete="off">
                <div className="form-group form">
                  <input type="text" className="form-control" id="uname" placeholder="Fido, Snoopy, Wishbone, etc." name="uname" required="" />
                </div>
                <div className="form-group">
                  <div className="button_1">
                    <button type="submit" className="btn" onClick={ShowIt}>Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon_1.png" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  function ShowIt(){
    document.getElementById("consultation_1").style.display = "none";
  

    document.getElementById("form_1").style.display = "block";
 

    document.getElementById("form_2").style.display = "block";

   document.getElementById("form_3").style.display = "block";
 };
}
export default Content;