import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
function App(){
    return <>
    <Header/>
    <Content/>
    <Footer/>
    </>;
}
export default App;