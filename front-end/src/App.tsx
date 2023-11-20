import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipesPage from "./pages/AllRecipesPage";
import IndividualRecipePage from "./pages/IndividualRecipePage";
import SavedRecipesPage from "./pages/SavedRecipesPage";
import Navbar from "./components/NavBar";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App bg-gray-200 min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<AllRecipesPage />} />
          <Route path="/recipe/:id" element={<IndividualRecipePage />} />
          <Route path="/saved-recipes" element={<SavedRecipesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
