"use client"
import React from 'react';

const Scroll = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/dec23atf/unrec/mfd/WA_WW_3000._CB571190800_.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/WRS23/MFD-Heros-PC._CB571155873_.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/Dec/Unrec-PC-3000-Deals._CB571190788_.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Scroll;