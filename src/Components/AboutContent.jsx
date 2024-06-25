import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>I'm a react front-end developer,I create responsive secure websites for my clients</p>
        <Link to="/contact">
        <button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img className="img" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="true" />
            </div>
            <div className="img-stack bottom">
                <img className="img" src="https://images.unsplash.com/photo-1546900703-cf06143d1239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
