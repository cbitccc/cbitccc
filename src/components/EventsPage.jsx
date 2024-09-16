import React from 'react';
import EventCard from './EventCard';
import './EventsPage.css';

function EventsPage() {
    return (
        <div className="events-page">
            <h1>Events</h1>

            <section className="events-section">
                <h2>Upcoming Events</h2>
                <div className="section-separator"></div>
                <div className="events-page-container upcoming-events">
                    <EventCard
                        imageUrl="assets/Events/quiz.png"
                        altText="Ethical Hacking Event"
                        link="https://www.instagram.com/ccc_cbit/" 
                        overlayText="Coming Soon"
                    />
                </div>
            </section>

            <section className="events-section">
                <h2>Past Events</h2>
                <div className="section-separator"></div>
                <div className="events-page-container past-events">
                    <EventCard
                    imageUrl="assets/Events/EthicalHacking.png"
                    altText="Ethical Hacking Event"
                    link="https://www.instagram.com/p/C5n1ENkhWQG/?img_index=1" 
                    overlayText="Ethical Hacking Workshop"
                    />
                    <EventCard
                    imageUrl="assets/Events/InformationSecurity.png"
                    altText="Another Event"
                    link="https://www.instagram.com/p/CyYl6rgBd5m/" 
                    overlayText="Information Security Workshop"
                    />
                    <EventCard
                    imageUrl="assets/Events/Tectasy.png"
                    altText="Another Event"
                    link="https://www.instagram.com/p/C3T9ZwkhS7J/" 
                    overlayText="Tectasy"
                    />
                    <EventCard
                    imageUrl="assets/Events/IDCSS.png"
                    altText="Another Event"
                    link="https://www.instagram.com/p/Cw5KSGTI3wH/?img_index=1" 
                    overlayText="IDCSS"
                    />
                    <EventCard
                    imageUrl="assets/Events/IDCSS.png"
                    altText="Another Event"
                    link="https://www.instagram.com/p/C3xfh_KPi88/" 
                    overlayText="Sheildathon"
                    />
                    <EventCard
                        imageUrl="assets/Events/InauagralEvent.png"
                        altText="Inaugural Event"
                        link="https://www.instagram.com/p/Cumks3hyDUo/" 
                        overlayText="Inaugral Event"
                    />
                    <EventCard
                        imageUrl="assets/Events/LogoDesignContest.png"
                        altText="Logo Design Contest"
                        link="https://www.instagram.com/p/CuCZa6bslwI/" 
                        overlayText="Logo Design Contest"
                    />
                </div>
            </section>
        </div>
    );
}

export default EventsPage;
