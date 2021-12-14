import React from "react";

function Header({ children }) {

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        {children}
      </nav>
    </header>
  );
}

export default Header;
