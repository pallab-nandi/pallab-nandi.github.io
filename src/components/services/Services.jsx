import React, { useState } from "react";
import './services.css'

export const Services = () => {
  const [ToggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Backend <br /> Developement</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={ToggleState === 1 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Backend Development</h3>
              <p className="services__model-description">Providing Quality work on Backend Development</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Designing and developing RESTful APIs that communicate with front-end clients and databases</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Optimizing the performance, scalability, and reliability of the backend systems</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Deploying and maintaining backend applications on cloud platforms or servers</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Documenting the backend code and API specifications</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Server Side <br /> Code</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={ToggleState === 2 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Server Side Code</h3>
              <p className="services__model-description">Providing user-friendly and practical solution</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Implemente authentication, authorization, and security features for user accounts and data</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">create and maintain APIs using Node.js and Express.js</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Develope microservice for an application</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Deploy and maintain backend applications</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Database <br /> Service</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={ToggleState === 3 ? "services__model active-model" : "services__model"}>
            <div className="services__model-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

              <h3 className="services__model-title">Database Service</h3>
              <p className="services__model-description">I can manage and design database with the knowledge of MySQL, MongoDB, Mongoose, Sequelize etc I know</p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Database Design and Manage</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Database Querying</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Database Administration</p>
                </li>

                {/* <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I develop the Backend System</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">I develop the Backend System</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}