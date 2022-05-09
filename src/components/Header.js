import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + "/images/troll-face.png"}
        alt="meme-face"
      />
      <h3>Meme Generator</h3>
    </header>
  );
}
