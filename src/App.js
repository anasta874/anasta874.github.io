
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-container">
        <Header />
        <Section title="Area of Interest" content="Development of bioinformatics tools and packages, data analysis and biostatistics, molecular biology, proteomics, genomics, and the use of computational methods in biomedical research." />
        <Section title="Technical Skills" content={<ul className="technical-skills-list">
          <li>Linux, Windows, HPC</li>
          <li>Python, R, C/С++, Java(basic)</li>
          <li>HTML, CSS, JS</li>
          <li>Bioinformatics Analysis Tools</li>
          <li>Molecular Dynamics and Structural Protein Analysis</li>
          <li>SQL, Git, Docker etc.</li>
        </ul>} />
        {/* Add more sections as needed */}
        <Footer />
      </div>
    </div>
  );
}

export default App;