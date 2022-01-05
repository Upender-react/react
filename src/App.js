import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Content";
import lets from "./Components/lets";
import testing  from "./Components/testing";
import dog from "./Components/dog";
import Footer from "./Components/Footer";
function App(){
    return <>
    <Header/>
    <Content/>
    <lets/>
    <testing/>
    <dog/>
    <Footer/>
    </>;
}
export default App;