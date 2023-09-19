import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Bodoni Moda', serif;
  }
`;

const Header = () => {
  return (
    <header className="bg-yellow-0 text-black px-10 py-10 flex justify-between items-center">
      <GlobalStyle/>
      <div className="font-bold text-2xl" >My Website</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline text-lg">Home</a></li>
          <li><a href="#about" className="hover:underline text-lg">About</a></li>
          <li><a href="#project" className="hover:underline text-lg">Projects</a></li>
          <li><a href="#skills" className="hover:underline text-lg">Skills</a></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
