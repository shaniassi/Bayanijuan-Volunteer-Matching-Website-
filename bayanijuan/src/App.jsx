import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Opportunities1 from "./components/Opportunities/Opportunities1";
import Opportunities2 from "./components/Opportunities/Opportunities2";
import Blog1 from "./components/Blog/Blog1";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import Register1 from "./components/Register/Register1";
import Volunteer from "./components/Register/Volunteer";
import Organization from "./components/Register/Organization";
import Login from "./components/Register/Login";
import NewOpp from "./components/Volunteer Opportunities/NewOpp";
import PopularOpp from "./components/Volunteer Opportunities/PopularOpp";
import UpcomingOpp from "./components/Volunteer Opportunities/UpcomingOpp";
import FindOpportunities from "./FindOpportunities";
import Education from "./components/Opportunities/Education";
import Environment from './components/Opportunities/Environment'
import Healthcare from "./components/Opportunities/Healthcare";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Opportunities1 />
                <Opportunities2 />
                <Blog1 />
                <Stats />
              </>
            }
          />
          <Route path="/register" element={<Register1 />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-opportunities" element={<NewOpp />} />
          <Route path="/upcoming-events" element={<UpcomingOpp />} />
          <Route path="/popular-opportunities" element={<PopularOpp />} />
          <Route path="/opportunities2" element={<Opportunities2 />} />
          <Route path="/FindOpp" element={<FindOpportunities />} />
          <Route path="/" exact component={Opportunities1} />
          <Route path="/findopportunities" component={FindOpportunities} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Environment" element={<Environment />} />
          <Route path="/Healthcare" element={<Healthcare />} />
        </Routes>
        <div className="w-full h-10 bg-rose"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
