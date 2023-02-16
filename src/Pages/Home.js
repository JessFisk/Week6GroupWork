import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { faker } from '@faker-js/faker';

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

const Home = () => {

  let subtitle;
  const [catData, setCatData] = useState([]);
  const [error, setError] = useState(null);
  const [openCatInfo, setOpenCatInfo] = useState(false);
  const [selectedCatInfo, setSelectedCatInfo] = useState();
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        setError(null);
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&size=small");
        
        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setCatData(data.splice(0, 9));
        console.log(data)

        const tempCats = []
        for (let i = 0; i < 9; i++) {
          // console.log(i + 1)
          tempCats.push({
            name: faker.name.fullName(),
            birthdate: faker.date.birthdate(),
            gender: faker.name.sex(),
            cattype: faker.animal.cat(),
            price: faker.finance.amount()
          })
        }
        setCatInfo(tempCats)

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
      {error !== null && <h3>{error}</h3>}
      <div id="catBox">
        <div id="catGrid">
          {catData.map((cat, index) => {
            return (
              <div className="catButtonBoxes">
                <button className="catButtons" key={index}
                  onClick={() => {
                    setSelectedCatInfo(catInfo [index])
                    openModal()
                    console.log("click")
                  }}>
                  <img id="catImages" src={cat.url} alt="catImage" />
                  <p>{catInfo[index].name}</p>
                </button>
              </div>
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
          >
            <div id="modalXFlexBox">
              <button id="closeModalBtn" onClick={closeModal}>&times;</button>
            </div>

            <div id="ModalTextInfo">
              <h2>Am I your Puuurfect Pet?</h2>
              <p>{selectedCatInfo.name}</p>
              <p>{selectedCatInfo.birthdate.toString()}</p>
              <p>{selectedCatInfo.gender}</p>
              <p>{selectedCatInfo.cattype}</p>
              <p>{selectedCatInfo.price}</p>
              <button>Add to Cart</button>
            </div>
          </Modal>
        }
      </div>
    </div>
  )


}
export default Home;




