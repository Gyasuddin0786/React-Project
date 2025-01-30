import Car from "./Basic/classComponent";
import ES6 from "./Basic/ES6";
import FunctionComponet from "./Basic/functionComponent";
import HelloWorld from "./Basic/helloWorld";
import ReactCompo from "./Basic/reactComponent";
import ReactJSX from "./Basic/reactJSX";
import ReactLogo from "./Basic/reactLogo";
import Props from "./Basic/reactProps";
import RendarHTML from "./Basic/reactRendarHTML";
import Event from "./Basic/reactEvent";
import FunctionEvent from "./Basic/functionEvent";
import CondRender from "./Basic/condtionalRendring";
import List from "./Basic/reactList";
import ReactFrom from "./Basic/reactForm";
// import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';
// import Home from "./Basic/Router/Home";
// import About from "./Basic/Router/About";
// import Contact from "./Basic/Router/Contact";

function App() {
  return (
    <>
    <ReactLogo/>
    <HelloWorld/>
    <ES6/>
    <RendarHTML/>
    <ReactJSX/>
    <ReactCompo/>
    <Car/>
    <FunctionComponet/>
    <Props/>
    <Event/>
    <FunctionEvent/>
    <CondRender/>
    <List/>
    <ReactFrom/>
    {/* <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Layout" element={<Home/>}/>
      </Routes>
    </Router>
    </BrowserRouter> */}
    </>
  );
}

export default App;
