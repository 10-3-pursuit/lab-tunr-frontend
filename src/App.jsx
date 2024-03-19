import { Route, Routes } from "react-router-dom";
import Header from "./Components/Static/Header";
import NavBar from "./Components/Static/NavBar";
import Footer from "./Components/Static/Footer";
import "./App.css";
import Songs from "./Components/Songs";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="*" element=
          {<Error404/>}/>
        <Route path="/" element=
          {<Home/>}/>
        <Route path="/songs" element=
          {<Songs/>}/>
        <Route path="/songs/new" element=
          {<h1>New - Create Form</h1>}/>
        <Route path="/songs/:id" element=
          {<h1>Show One</h1>}/>
        <Route path="/songs/:id/edit" element=
          {<h1>Edit Form</h1>}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
};

export default App;
