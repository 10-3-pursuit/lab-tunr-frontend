import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return ( 
    <div className="App"> 
      <Router>
        <Header />
        <main>
          <Routes>

          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
