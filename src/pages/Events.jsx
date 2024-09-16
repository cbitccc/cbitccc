import {React,useEffect} from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsPage from "../components/EventsPage"
import "./Events.css";

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className='events'>
      <Navbar/>
      <EventsPage/>
      <Footer />
    </div>
  )
}

export default Events
