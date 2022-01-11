import './Content.css';
import React, { Component, useState } from 'react'

function Teating() {
    return <>
        <div className="content">
            <div className="column">
                <div id="form_3" className="srt_2">
                    <div className="row">
                        <div className="col-md-12">
                            <h5><span>Is </span><span color="#FF7F00">testing</span><span> a good boy or a good girl?</span></h5>
                            <form action="/action_page.php" className="needs-validation form-inline" autoComplete="off">
                                <div className="form-group form">
                                    <input type="text" className="form-control" id="uname" placeholder="Fido, Snoopy, Wishbone, etc." name="uname" required="" />
                                </div>
                                {/* <div className="form-group">
                                    <div className="button_1">
                                        <button type="submit" className="btn">Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon_1.png" /></button>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Teating;