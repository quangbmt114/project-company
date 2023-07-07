import React, { useState } from 'react';
import "../Technologies/style.css"
import { Link } from 'react-router-dom';

import JS_Logo from '../Technologies/img/js-logo.png'
import React_Logo from '../Technologies/img/react-logo.png'
import VueJS_Logo from '../Technologies/img/vuejs-logo.png'
import E_Logo from '../Technologies/img/e-icon.png'
import HTML_Logo from '../Technologies/img/html-logo.png'
import CSS_Logo from '../Technologies/img/css-logo.png'
import NodeJs_Logo from '../Technologies/img/nodejs-logo.png'
import Java_Logo from '../Technologies/img/Java-logo.png'
import Python_Logo from '../Technologies/img/python-logo.png'
import PHP_Logo from '../Technologies/img/php-logo.png'
import Csharp_Logo from '../Technologies/img/csharp-logo.png'
import Cplusplus_Logo from '../Technologies/img/cplusplus-logo.png'
import Laravel_Logo from '../Technologies/img/laravel-logo.png'
import Symfony_Logo from '../Technologies/img/symfony-logo.png'
import Django_Logo from '../Technologies/img/django-logo.png'
import ExpressJs_Logo from '../Technologies/img/expressJs-logo.png'
import Spring_Logo from '../Technologies/img/spring-logo.png'
import IOS_Logo from '../Technologies/img/ios-logo.png'
import ReactNative_Logo from '../Technologies/img/react-native.png'
import Flutter_Logo from '../Technologies/img/flutter-logo.png'
import Kotlin_Logo from '../Technologies/img/kotlin-logo 1.png'
import Lonic_Logo from '../Technologies/img/lonic_logo.png'
import Mysql_Logo from '../Technologies/img/mysql-logo.png'
import Sqlsever_Logo from '../Technologies/img/sql-server-logo.png'
import Postgresql_Logo from '../Technologies/img/postgresql-icon.png'
import Mariadb_Logo from '../Technologies/img/mariadb-logo.png'
import Mongodb_Logo from '../Technologies/img/mongodb_logo.png'
import Redis_Logo from '../Technologies/img/redis-Logo.png'
import Oracle_Logo from '../Technologies/img/oracle-logo.png'
import Go_Logo from '../Technologies/img/go-logo.png'
import Angular_Logo from '../Technologies/img/angular-logo.png'
import Android_Logo from '../Technologies/img/android-logo.png'
import Studio_Logo from '../Technologies/img/studio-logo.png'
import Hadoop_Logo from '../Technologies/img/hadoop-logo.png'
import PowerBi_Logo from '../Technologies/img/powerBi-logo.png'
import OpenCv_Logo from '../Technologies/img/openCV-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Img from "../Technologies/img/img.png";

function ButtonContainer({ onCategoryClick }) {
    const [category, setCategory] = useState('All');

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        onCategoryClick(selectedCategory); // Gọi hàm onCategoryClick
    };

  return (
    <div className="button-container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="col d-flex flex-wrap">
            <button
              className={`btn btn-default ${
                category === "All" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>
            <button
              className={`btn btn-default ${
                category === "Frontend" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Frontend")}
            >
              Frontend
            </button>
            <button
              className={`btn btn-default ${
                category === "Backend" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Backend")}
            >
              Backend
            </button>
            <button
              className={`btn btn-default ${
                category === "Frameworks" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Frameworks")}
            >
              Frameworks
            </button>
            <button
              className={`btn btn-default ${
                category === "MobileApp" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("MobileApp")}
            >
              Mobile App
            </button>
            <button
              className={`btn btn-default ${
                category === "DataBase" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("DataBase")}
            >
              DataBase
            </button>
            <button
              className={`btn btn-default ${
                category === "Google" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Google")}
            >
              Google
            </button>
            <button
              className={`btn btn-default ${
                category === "DataScience" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Data Science")}
            >
              Data Science
            </button>
            <button
              className={`btn btn-default ${
                category === "MachineLearning" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Machine Learning")}
            >
              Machine Learning
            </button>
            <button
              className={`btn btn-default ${
                category === "DevOps" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("DevOps")}
            >
              DevOps
            </button>
            <button
              className={`btn btn-default ${
                category === "CMS" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("CMS")}
            >
              CMS
            </button>
            <button
              className={`btn btn-default ${
                category === "ECommerce" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("ECommerce")}
            >
              ECommerce
            </button>
            <button
              className={`btn btn-default ${
                category === "Security" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Security")}
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function ButtonList({ category }) {
  const buttonData = {
    All: [
      { id: 1, src: JS_Logo },
      { id: 2, src: React_Logo },
      { id: 3, src: VueJS_Logo },
      { id: 4, src: E_Logo },
      { id: 5, src: HTML_Logo },
      { id: 6, src: CSS_Logo },
      { id: 7, src: NodeJs_Logo },
      { id: 8, src: Java_Logo },
      { id: 9, src: Python_Logo },
      { id: 10, src: PHP_Logo },
      { id: 11, src: Csharp_Logo },
      { id: 12, src: Cplusplus_Logo },
      { id: 13, src: Laravel_Logo },
      { id: 14, src: Symfony_Logo },
      { id: 15, src: Django_Logo },
      { id: 16, src: ExpressJs_Logo },
      { id: 17, src: Spring_Logo },
      { id: 18, src: IOS_Logo },
      { id: 19, src: ReactNative_Logo },
      { id: 20, src: Flutter_Logo },
      { id: 21, src: Kotlin_Logo },
      { id: 22, src: Lonic_Logo },
      { id: 23, src: Mysql_Logo },
      { id: 24, src: Sqlsever_Logo },
      { id: 25, src: Postgresql_Logo },
      { id: 26, src: Mariadb_Logo },
      { id: 27, src: Mongodb_Logo },
      { id: 28, src: Redis_Logo },
      { id: 29, src: Oracle_Logo },
      { id: 30, src: Go_Logo },
      { id: 31, src: Angular_Logo },
      { id: 32, src: Android_Logo },
      { id: 33, src: Studio_Logo },
      { id: 34, src: Hadoop_Logo },
      { id: 35, src: PowerBi_Logo },
      { id: 36, src: OpenCv_Logo },
    ],
    Frontend: [
      { id: 1, src: JS_Logo },
      { id: 2, src: React_Logo },
      { id: 3, src: VueJS_Logo },
      { id: 5, src: HTML_Logo },
      { id: 6, src: CSS_Logo },
      { id: 18, src: IOS_Logo },
      { id: 19, src: ReactNative_Logo },
      { id: 20, src: Flutter_Logo },
      { id: 21, src: Kotlin_Logo },
      { id: 22, src: Lonic_Logo },
      { id: 31, src: Angular_Logo },
      { id: 32, src: Android_Logo },
      { id: 33, src: Studio_Logo },
    ],
    Backend: [
      { id: 1, src: JS_Logo },
      { id: 7, src: NodeJs_Logo },
      { id: 8, src: Java_Logo },
      { id: 9, src: Python_Logo },
      { id: 10, src: PHP_Logo },
      { id: 11, src: Csharp_Logo },
      { id: 13, src: Laravel_Logo },
      { id: 16, src: ExpressJs_Logo },
      { id: 17, src: Spring_Logo },
      { id: 15, src: Django_Logo },
      { id: 21, src: Kotlin_Logo },
      { id: 30, src: Go_Logo },
    ],
    Frameworks: [],
    MobileApp: [],
  };

  const buttons = buttonData[category] || [];

  return (
    <div className="buttons py-5">
      <div className="row justify-content-center">
        {buttons.map((button) => (
          <div
            className="col-6 col-md-4 col-lg-2 d-flex align-items-center"
            key={button.id}
          >
            <Link
              to="#"
              className="d-flex justify-content-center align-items-center flex-grow-1"
            >
              <button type="button" className="btn btn-link">
                <img src={button.src} alt="" className="img-fluid" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
function Technologies() {
  const [category, setCategory] = useState("All");

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <>
      <div className="hero-banner-technologies">
        <div className="technologies-banner">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <h1 className="title mb-3 fw-bold">Technologies</h1>
              <p className="content">
                We specialize in helping you build a team of expert developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row" style={{ color: "#16205F" }}>
          <div className="col col-md-4 text-start">
            <h1 className="fw-bold">Technologies</h1>
            <p>
              Using the right technology for the right problem is our mantra. We
              are agile about learning new processes and tools to save time and
              reduce complexity
            </p>
          </div>
        </div>
        <ButtonContainer
          category={category}
          onCategoryClick={handleCategoryClick}
        />
        <ButtonList category={category} />

        <div className="row custom-group position-relative">
          <div className="col">
            <div className="d-flex">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="custom-group-overlay">
              <div className="custom-group-content">
                <h1 className="fw-bold text-start">
                  Connect With Your Next Great Hire Today!
                </h1>
                <form
                  className="py-3"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  <div className="row">
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Company</label>
                      <input
                        className="form-control"
                        placeholder="Enter company"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Your Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Phone Number</label>
                      <input
                        className="form-control"
                        placeholder="Enter phone number"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Email</label>
                      <input
                        className="form-control"
                        placeholder="Enter email"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 form-group text-start mb-3">
                      <label htmlFor="">Project Detail</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Enter project detail"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group form-check py-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-start"
                      htmlFor="exampleCheck1"
                      style={{ fontSize: "16px", lineHeight: "24px" }}
                    >
                      By sending this form I confirm that I have read and accept
                      the
                      <span className="fw-bold"> Privacy Policy</span>
                    </label>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button
                      className="btn btn-warning"
                      style={{ borderRadius: "8px" }}
                    >
                      GET CONSULTATION <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
