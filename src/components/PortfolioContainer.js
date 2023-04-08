import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import '../styles/main.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
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

      <nav>
        <a href="#about-me">About Me</a>
        <a href="#roles-intro">Roles</a>
        <a href="#contact-form">Contact</a>
      </nav>
  

      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
