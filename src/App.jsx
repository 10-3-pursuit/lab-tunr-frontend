import { Route, Routes } from "react-router-dom";
import Header from "./Components/Static/Header";
import NavBar from "./Components/Static/NavBar";
import Footer from "./Components/Static/Footer";
import "./App.css";
import Songs from "./Components/Songs";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import SongDetails from "./Components/SongDetails";
import SongEditForm from "./Components/SongEditForm";
import SongNewForm from "./Components/SongNewForm";

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
          {<SongNewForm/>}/>
        <Route path="/songs/:id" element=
          {<SongDetails/>}/>
        <Route path="/songs/:id/edit" element=
          {<SongEditForm/>}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
};

export default App;
