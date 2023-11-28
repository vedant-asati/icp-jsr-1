import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import  Header  from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Router>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;