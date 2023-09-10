import React from 'react'
import Arrow1 from '../imgs/Arrow 1.png'
import Arrow2 from '../imgs/Arrow 2.png'
import '../css/main.css'

function Main() {
  return (
    <div className='main'>
      <div className="container">
        {/* <!-- white wala --> */}
        <div id="upper">
          <i id="icon" className="fab fa-instagram"></i>
          <div>
            <p id="user">@username</p>
            <p id="option">I am waiting for a pickup line!!</p>
          </div>
          <span className="emoji">&#x1F609;</span>
        </div>
        {/* <!-- input text --> */}
        <div id="lower">
          <textarea
            type="text"
            rows="4"
            id="msg"
            placeholder="Send your message anonymously"
          ></textarea>
        </div>
      </div>

      <div id="buttons">
        <button type="submit" className="btn" id="sugg">Suggestions</button>
        <button type="submit" className="btn" id="go">
          Go <img id="white_arrow" src={Arrow1} />
          <img id="black_arrow" src={Arrow2} /> </button>
        <br />
      </div>
    </div>
  )
}

export default Main