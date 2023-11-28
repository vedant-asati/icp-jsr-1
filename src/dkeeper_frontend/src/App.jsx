import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import  Header  from "./components/Header";
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;