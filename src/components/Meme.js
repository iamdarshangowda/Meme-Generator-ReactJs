import React from "react";

export default function Meme() {
  return (
    <div className="main">
      <input
        type="text"
        id="top"
        name="top"
        placeholder="Top text"
        className="input"
      />
      <input
        type="text"
        id="bottom"
        name="bottom"
        placeholder="Bottom text"
        className="input"
      />
      <button className="button">Generate Meme 🖼</button>
    </div>
  );
}
