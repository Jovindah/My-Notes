import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <p>Made by Umer Naseer</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
