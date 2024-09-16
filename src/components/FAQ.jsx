import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CBIT Cyber Security Club?",
      answer: "The CCC-CBIT Cyber Security Club is a club of  dedicated and passionate Cyber Security enthusiasts .We educate and empower students in the field of cyber security."
    },
    {
      question: "How can we join the club?",
      answer: "The recuritments for the executive board 2024-2025 are completed and recruitments for 2025-2026 will be notified within the website."
    },
    {
      question: "What activities does the club offer?",
      answer: "We offer CTF's, workshops, seminars, hackathons, and collaborative projects focused on various aspects of cyber security."
    },
    {
      question: "How can we register for CCC events?",
      answer: "Check out our websites events page.Upcoming events of CCC will be notified."
    }
  
  ];

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
