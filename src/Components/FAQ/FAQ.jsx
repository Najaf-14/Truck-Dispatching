import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      id: 1,
      question: 'How much do you charge for dispatch services?',
      answer: 'We offer a flat rate starting at $200/week per truck or a 5% percentage plan based on gross load revenue. Fleet owners with 3+ trucks get custom pricing. There are no hidden charges or setup fees.'
    },
    {
      id: 2,
      question: 'Do you work 24/7?',
      answer: 'Yes! Our dispatch team is available 24 hours a day, 7 days a week including weekends and holidays. Whether it\'s a load emergency or a route question, we\'re always just a call away.'
    },
    {
      id: 3,
      question: 'Can owner operators join Loadify?',
      answer: 'Absolutely. We work with solo owner-operators, small carriers and large fleets alike. Our flat rate and percentage plans are specifically designed to be profitable for independent drivers running a single truck.'
    },
    {
      id: 4,
      question: 'How fast can I start getting loads?',
      answer: 'Most clients are up and running within 24–48 hours of signing up. Once we receive your MC number, carrier packet and truck details, we start searching for loads that match your equipment and lanes immediately.'
    },
    {
      id: 5,
      question: 'Do I need to sign a long-term contract?',
      answer: 'No long-term commitment required. We operate on a flexible week-to-week basis. You can pause or cancel at any time without penalties — we earn your business every week through results.'
    },
    {
      id: 6,
      question: 'What truck types do you support?',
      answer: 'We work with dry van, reefer, flatbed, step-deck, lowboy, power-only and more. Tell us your equipment type and authority during registration and we\'ll match you with appropriate loads.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(id)) {
        // Remove id if already open
        return prevOpenItems.filter(itemId => itemId !== id);
      } else {
        // Add id if closed
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <section className="section-wrap" id="faq">
      <div className="section-card">
        
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accent-bar"></div>
          <p>Have questions? We've got answers. If you don't find what you're looking for, reach out anytime.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <div className="faq-toggle">+</div>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;