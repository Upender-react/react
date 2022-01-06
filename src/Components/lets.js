import './Content.css';
import React, { Component, useState } from 'react'

function Lets() {
    return <>
        <div className="content">
            <div className="column">
                <div id="form_1" className="srt_2">
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
                                        <button type="submit" className="btn">Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon_1.png" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Lets;