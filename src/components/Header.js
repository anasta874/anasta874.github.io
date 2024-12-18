
import React from 'react';

function Header() {
  return (
    <header className="header-container">
      <div className="info-container">
        <h1><span style={{ color: 'maroon' }}>Anastasia Poluzerova</span></h1>
        <p><strong><em>Computational Biologist, IT Specialist</em></strong></p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:anasta874@gmail.com">anasta874@gmail.com</a></li>
          <li><strong>Phone:</strong> <span className="contact-info">+47 40594290 </span><img src="assets/images/nor.png" alt="Norway flag" className="flag-icon" /><span className="contact-info"></span></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/anasta874">anasta874</a></li>
        </ul>
      </div>
      <div className="image-container">
        <img src="assets/images/photo_2024-10-28_11-39-40.jpg" alt="Anastasia Poluzerova" />
      </div>
    </header>
  );
}

export default Header;