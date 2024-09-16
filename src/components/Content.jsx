import React, { useEffect, useRef } from 'react';
import './Content.css';

function Content() {
  const aboutUsRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1 
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); 
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutUsRef.current) observer.observe(aboutUsRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <div className="container">
      <div className="About-Us" ref={aboutUsRef}>
        <h1>About Us</h1>
        <p>
        The CBIT Cyber Security Club is a community of passionate students dedicated to the exploration and understanding of cybersecurity. Established with the goal of nurturing talent and fostering a culture of security awareness, our club serves as a platform for students to learn, collaborate, and innovate in the field of cybersecurity.





     </p>
      </div>
      <div className="Our-Mission" ref={missionRef}>
        <h1>Our Mission</h1>
        <p>
        Our mission at the CBIT Cyber Security Club is to empower students with the knowledge, skills, and ethical mindset required to navigate and secure the digital landscape. We strive to create an inclusive and dynamic learning environment where members can engage with cutting-edge technologies, understand the intricacies of cybersecurity, and contribute to the safety of the digital community.
        </p>
      </div>
    </div>
  );
}

export default Content;
