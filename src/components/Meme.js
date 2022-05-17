import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function generate() {
    const urlObj = allMemeImages["data"]["memes"];
    const imageUrl = urlObj[Math.floor(Math.random() * urlObj.length)].url;
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: imageUrl,
    }));
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
      <img src={meme.randomImage} className="memeImage" />
    </main>
  );
}
