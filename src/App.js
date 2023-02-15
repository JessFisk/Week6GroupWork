import { useState, useEffect } from 'react';
// import Modal from 'react-modal';
import './App.css';
import Header from "./components/Header"

const App = () => {
  const [catData, setCatData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setErrorMsg(null);
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setCatData(data.splice(0,9));
        console.log(data)

      } catch (error) {
        setErrorMsg("We're not Puurrrrfect-Something went wrong...");
      }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header />
      {errorMsg !== null && <h3>{errorMsg}</h3>}
      <div id="catBox">
        <div id="catGrid">
          {catData.map((cat, index) => {
            return (
              <div key={index}>
                <img id="catImages" src={cat.url} alt="catImage"/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;