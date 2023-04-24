import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Quick from './components/Quick';
import Percent from './components/Percent';
import Meet from './components/Meet';
import Revenue from './components/Revenue';
// import Tax from './components/Tax';
import Chad from './components/Chad';
import Roadmap from './components/Roadmap';



function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div id="body">
        <Body/>
      </div>
      <div id="quick">
        <Quick/>
      </div>
      <div id="percent">
        <Percent/>
      </div>
      <div id="meet">
        <Meet/>
      </div>
      <div id="how">
        <Revenue/>
      </div>
      {/* <div id="tax">
        <Tax/>
      </div> */}
      <div id='chad'>
        <Chad/>
      </div>
      <div id='roadmap'> 
        <Roadmap/>
      </div>
    </div>
  );
}

export default App;
