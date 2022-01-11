import React from 'react';
import { BrowserRouter as Routes, Route, Link, Router } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

function App() { 
    return(
     <> 
             
        <Header />
        <Form />  
        {/* <Content />
        <Lets />
        <Testing />
        <Dog /> */}
        <Footer />  
    </>
    );
}
export default App;