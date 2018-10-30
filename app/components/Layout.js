import Header from "./Header";

import React from "react";
import { hydrate, injectGlobal } from "react-emotion";

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  html, body {
    padding: 1rem 1rem;
    margin: 0;
    background: rebeccapurple;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
    color: white;

    a {
      color: yellow;
    }
  }
`;

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
