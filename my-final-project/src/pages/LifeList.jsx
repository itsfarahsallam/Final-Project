import React from 'react';

const LifeList = () => {
  return (
    <>
      <div id="flex">
        <main>
          <div className="wrapper">
            <div className="title">My Life List</div>
            <div className="content">
              <h3>Birds I've Seen</h3>
              <div className="grid-container">
                <div className="grid-item">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img src="https://varmentguard.com/uploads/permanent/f8f2098da824b77447887be569c8990d" alt="Seagull" width="300px" height="200px"/>
                      </div>
                      <div className="flip-box-back">
                        <h3>Glacous-Winged Gull</h3>
                        <p>Since Childhood</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Sterna-caspia-010.jpg" alt="Caspian Tern" width="300px" height="200px" />
                      </div>
                      <div className="flip-box-back">
                        <h3>Caspian Tern</h3>
                        <p>June 8th, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img src="https://www.allaboutbirds.org/guide/assets/photo/66026051-480px.jpg" alt="Pelagic Cormorant" width="300px" height="200px" />
                      </div>
                      <div className="flip-box-back">
                        <h3>Pelagic Cormorant</h3>
                        <p>June 8th, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LifeList;
