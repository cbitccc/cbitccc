import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import "./Teams.css"
import Footer from '../components/Footer'

function Teams() {
  return (
    <div className='teams'>
      <Navbar/>
      <h1>Team 2023-2024</h1>
      
      <div className="OurTeam">
      <h2>Core Comittee</h2>
      <div className="Cards">
        <ProfileCard
          name="Manobhiram Reddy"
          position="President"
          imageUrl="assets/2024/president.jpg"
        />
        <ProfileCard
          name="Gayatri K"
          position="Vice President"
          imageUrl="assets/2024/vicepresident.jpg"
        />
        <ProfileCard
          name="Raghupathi A"
          position="General Secretary"
          imageUrl="assets/2024/generalsecretary.jpg"
        />
        <ProfileCard
          name="Kolli Harshitha"
          position="Joint Secretary"
          imageUrl="assets/2024/jointsecretary.jpg"
        />
        <ProfileCard
          name="Bhawdeep"
          position="Joint Secretary"
          imageUrl="assets/2024/jointsecretary2.jpg"
        />
        <ProfileCard
          name="Iruvanti Shravani"
          position="Treasurer"
          imageUrl="assets/2024/treasurer.jpg"
        />
        
      </div>
      <h2>Heads of Departments</h2>
      <div className="Cards">
        <ProfileCard
          name="Abhiram Pagilla"
          position="Technical Head"
          imageUrl="assets/2024/Thead.jpg"
        />
        <ProfileCard
          name="Ayam Ahmed"
          position="Design Head"
          imageUrl="assets/2024/Dhead.jpg"
        />
        <ProfileCard
          name="Sampujya"
          position="Documentation Head"
          imageUrl="assets/2024/Dohead.jpg"
        />
        <ProfileCard
          name="Karthik K"
          position="Events Head"
          imageUrl="assets/2024/Ehead.jpg"
        />
        <ProfileCard
          name="Sai Deepthi"
          position="Publicity Head"
          imageUrl="assets/2024/Phead.jpg"
        />
        <ProfileCard
          name="Divya"
          position="External Affairs Head"
          imageUrl="assets/2024/EAhead.jpg"
        />
        
      </div>
    </div>
      

      <Footer/>

      
    </div>
  )
}

export default Teams
