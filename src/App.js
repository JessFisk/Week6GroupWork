import { useState, useEffect } from 'react';
// import Modal from 'react-modal';
import './App.css';
import Header from "./components/Header"

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: `600px`,
    backgroundColor: `rgb(201, 200, 205)`,
    borderRadius: `20px`
  },
};

Modal.setAppElement(`#root`);

const App = () => {
  let subtitle;
  const [catData, setCatData] = useState([]);
  const [error, setError] = useState(null);
  const [openCatInfo, setOpenCatInfo] = useState(false);
  const [selectedCatInfo, setSelectedCatInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {

      try {
        setError(null);
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setCatData(data.splice(0, 9));
        console.log(data)

      } catch (error) {
        setError("We're not Puurrrrfect-Something went wrong...");
      }
    }
    fetchData();
  }, [])


  const openModal = () => {
    setOpenCatInfo(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setOpenCatInfo(false);
  }


  return (
    <div className="App">
      <Header />
      {errorMsg !== null && <h3>{errorMsg}</h3>}
      <div id="catBox">
        <div id="catGrid">
          {catData.map((cat, index) => {
            return (
              <button key={index}
                onClick={() => {
                  setSelectedCatInfo(cat)
                  openModal()
                  console.log("click")
                }}>
                <img id="catImages" src={cat.url} alt="catImage" />
              </button>
            )
          })}
        </div>
      </div>
      <div>
        {selectedCatInfo &&
          <Modal
            isOpen={openCatInfo}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div id="modalXFlexBox">
              <button id="closeModalBtn" onClick={closeModal}>&times;</button>
            </div>

            <div id="ModalTextInfo">
              <h2>Am I your Puuurfect Pet?</h2>
              {/* <h2> {selectedCatInfo["Species Name"]}</h2>
              <h5> {selectedCatInfo["Scientific Name"]}</h5>
              <p dangerouslySetInnerHTML={{ __html: selectedCatInfo["Location"] }} />
              <p dangerouslySetInnerHTML={{ __html: selectedCatInfo["Population"] }} />
              <p dangerouslySetInnerHTML={{ __html: selectedCatInfo["Color"] }} /> */}
            </div>

            {/* <img id="ModalImg"
              src={selectedCatInfo["Species Illustration Photo"].src}
              alt={selectedCatInfo["Species Illustration Photo"].alt}
              title={selectedCatInfo["Species Illustration Photo"].title}
            /> */}
          </Modal>
        }
      </div>
    </div>
  );
}

export default App;