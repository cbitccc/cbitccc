import './App.css'
import Layout from './Layouts/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Events from "./pages/Events"
import LearningResources from "./pages/LearningResources"
import Contactus from "./pages/Contactus"

function App() {

  return (
    <>
     <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
 <Route
          path="/teams"
          element={
            <Layout>
              <Teams />
            </Layout>
          }
        />



        <Route
          path="/Events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/learning-resources"
          element={
            <Layout>
              <LearningResources />
            </Layout>
          }
        />

<Route
          path="/contact-us"
          element={
            <Layout>
              <Contactus/>
            </Layout>
          }
        />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
