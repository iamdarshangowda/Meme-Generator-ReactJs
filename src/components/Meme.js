import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  function generate() {
    const urlObj = allMeme;
    const imageUrl = urlObj[Math.floor(Math.random() * urlObj.length)].url;
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: imageUrl,
    }));
  }

  const [memeText, setMemeText] = React.useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main>
      <div className="main">
        <input
          type="text"
          id="top"
          name="topText"
          placeholder="Top text"
          onChange={handleChange}
          value={memeText.topText}
          className="input"
        />
        <input
          type="text"
          id="bottom"
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleChange}
          value={memeText.bottomText}
          className="input"
        />
        <button className="button" onClick={generate}>
          Generate Meme 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="memeImage" />
        <h2 className="meme--text top">{memeText.topText}</h2>
        <h2 className="meme--text bottom">{memeText.bottomText}</h2>
      </div>
    </main>
  );
}
