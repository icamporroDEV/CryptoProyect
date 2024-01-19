import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark navbar-vertical ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isExpanded ? "show" : ""}`}>
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="icon-with-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                  </svg>
                  <span className="hover-text">Home</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="icon-with-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                  </svg>
                  <span className="hover-text">Graph</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                <span className="icon-with-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                  </svg>
                  <span className="hover-text">Arrow</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <span className="icon-with-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                  <span className="hover-text">Wallet</span>
                </span>
              </a>
            </li>
          </ul>
          <ul>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
