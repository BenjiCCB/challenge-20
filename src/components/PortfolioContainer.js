import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/main.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header class="header-main">
        <h1>Benji Decker</h1>
        <p>Entrepreneur. Investor. General trouble maker || CEO, Bridge-X & Principal @ Bridge Capital</p>
      </header>

    <div class="divider"></div>

      {/* <nav>
        <a href="#about-me">About Me</a>
        <a href="#roles-intro">Roles</a>
        <a href="#contact-form">Contact</a>
      </nav> */}
  

      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}

      <footer>
      <h5>
        Contact Benji: bensdecker@gmail.com
      </h5>
      <p class="social">
        <i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/benjidecker/">LinkedIn</a>
        <i class="fa-brands fa-github"></i><a href="https://github.com/BenjiCCB">Github</a>
        <i class="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/benji_decker/">Instagram</a>
      </p>
    </footer>

    </div>
  );
}
