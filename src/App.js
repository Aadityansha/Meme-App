import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [meme, setMeme] = useState([])

  useEffect(() => {
    const fetchMeme = async (api) => {
      let response = await fetch(api)
      let data = await response.json()
      setMeme(data)
    }
    fetchMeme("https://meme-api.herokuapp.com/gimme")
  }, [])

  const nextMeme = async () => {
    let response = await fetch("https://meme-api.herokuapp.com/gimme")
    let data = await response.json()
    setMeme(data)
  }

  const shareMeme = () => {
    let url = meme.postLink
    navigator.clipboard.writeText(url);
    alert("Link Copied! Share among your friends")
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h3 className="text-2xl font-bold mb-2">Memes for Timepass</h3>
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={meme.url} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{meme.title}</h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={shareMeme}>Share</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={nextMeme}>Next</button>
            </div>
          </div>
          <br />
          <p>a <a href='https://github.com/Aadityansha' target="_blank" rel="noreferrer"><b>Aadityansha Patel</b></a> Production</p>
        </div>
      </section>
    </>
  );
}

export default App;
