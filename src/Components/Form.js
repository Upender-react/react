import React, {useState} from "react"
import Content from "./Content"
import Lets from "./Lets"
import Testing from "./Testing"
import Dog from "./Dog"
import './Content.css'  

function Form (){
    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page === 0){
            return <Content />
        }
        else if (page === 1){
            return <Lets/>
        }
        else if (page === 2){
            return <Testing />
        }
        else {
            return <Dog />
        }  
    };
    
    return (
        <div class="form">
        <div className="progressbar"></div>
            <div className="from-conatiner">
                <div className="header"></div>
                <div className="body">
                    <div className="column">
                        {PageDisplay()}

                    <div className="button">
                    <button  className="btn" onClick={()=> {
                        setPage((currPage) => currPage + 1 );
                    }}>Next <img src="https://projectpet.org/wp-content/uploads/2021/12/arrow_icon.png" /></button>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
}
export default Form;