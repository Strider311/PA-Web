import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Session from "./pages/sessions";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DetailsPage from "./pages/details";
import path from "path";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main
          style={{
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            padding: "10",
            // height: "100vh",
          }}
        >
          <Routes>
            {/* {" "} */}
            {/* Updated from Switch to Routes */}
            <Route path="/" element={<Session />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
