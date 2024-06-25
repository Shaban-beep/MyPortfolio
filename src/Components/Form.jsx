import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form-container">
        <label>Name</label>
        <input type="text" placeholder="Enter your name"/>
        <label>Email</label>
        <input type="email" placeholder="Enter your email"/>
        <label>Subject</label>
        <input type="text" placeholder="Enter your subject"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
    </div>
  )
}

export default Form
