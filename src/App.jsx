import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element=
          {<h1>404: Page Not Found</h1>}/>
        <Route path="/" element=
          {<h1>Home Page</h1>}/>
        <Route path="/songs" element=
          {<h1>index</h1>}/>
        <Route path="/songs/new" element=
          {<h1>New - Create Form</h1>}/>
        <Route path="/songs/:id" element=
          {<h1>Show One</h1>}/>
        <Route path="/songs/:id/edit" element=
          {<h1>Edit Form</h1>}/>
      </Routes>
    </main>
  )
};

export default App;
