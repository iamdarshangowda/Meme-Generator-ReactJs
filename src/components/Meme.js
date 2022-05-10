import React from "react";
import memeData from "../data";

export default function Meme() {
  const [meme, setMeme] = React.useState("");

  function generate() {
    const urlObj = memeData["data"]["memes"];
    const image = urlObj[Math.floor(Math.random() * urlObj.length)].url;
    setMeme(image);
  }

  return (
    <main>
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
        <button className="button" onClick={generate}>
          Generate Meme 🖼
        </button>
      </div>
      <img src={meme} className="memeImage" />
    </main>
  );
}
