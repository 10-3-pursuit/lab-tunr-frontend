import { Route, Routes } from "react-router-dom";
import Header from "./Components/Static/Header";
import NavBar from "./Components/Static/NavBar";
import Footer from "./Components/Static/Footer";
import "./App.css";
import Songs from "./Components/Songs";

const App = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <main>
      <Routes>
        <Route path="*" element=
          {<h1>404: Page Not Found</h1>}/>
        <Route path="/" element=
          {<h1>Home Page</h1>}/>
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
