import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FirstPage from "./Components/First-Page/FirstPage";
import SecondPage from "./Components/Second-Page/SecondPage";
import Thirdpage from "./Components/Third-Page/Thirdpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FirstPage />} />
            <Route path="secondpage" element={<SecondPage />} />
            <Route path="/Thirdpage" element={<Thirdpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
