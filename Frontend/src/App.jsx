import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
