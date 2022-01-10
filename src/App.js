import React from 'react';
import { BrowserRouter as Routes, Route, Link, Router } from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Lets from "./Components/Lets";
import Testing from "./Components/Testing";
import Dog from "./Components/Dog";
import Footer from "./Components/Footer";
function App() { 

    return(
         <>
            <Header />
            <Content />
            <Lets />
            <Testing />
            <Dog />
            <Footer />  
    </>
    );
}
export default App;