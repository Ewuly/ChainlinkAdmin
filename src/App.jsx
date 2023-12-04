import { useState } from 'react'
import './App.css'
import Facebook from './assets/Facebook.svg'
import twitter from './assets/twitter.svg'
import LinkedIn from './assets/Linkedin.svg'
import Image from './assets/Image.svg'
import RectangleBet from './assets/RectangleBet.svg'
import RectangleConnect from './assets/RectangleConnect.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="slide-169-4">
      <div className="slide-169-4-child" />
      <div className="slide-169-4-item" />
      <div className="slide-169-4-inner" />
      <b className="admin">Admin</b>
      <div className="bottom">
        <div className="denigma">denigma</div>
        <div className="my-account">My account</div>
        <div className="play-lotterie">play lotterie</div>
        <img className="facebook-icon" alt="" src={Facebook} />
        <img className="twitter-icon" alt="" src={twitter} />
        <img className="group-icon" alt="" src={LinkedIn} />
      </div>
      <div className="enigma">
        <b className="create-raffle">Create raffle</b>
      </div>
      <div className="email-grou">
        <div className="email-grou-child" />
        <input
          className="entrance-fee"
          placeholder="Entrance Fee"
          type="text"
        />
      </div>
      <div className="email-grou1">
        <div className="email-grou-child" />
        <input
          className="entrance-fee"
          placeholder="Entrance Fee"
          type="text"
        />
      </div>
      <div className="email-grou2">
        <div className="email-grou-child" />
        <input className="entrance-fee" placeholder="Interval" type="text" />
      </div>
      <div className="email-grou3">
        <div className="email-grou-child" />
        <input className="entrance-fee" placeholder="Interval" type="text" />
      </div>
      <b className="create-bet">Create Bet</b>
      <button className="button">
        <img className="button-child" alt="" src={RectangleBet} />
        <b className="bet">Create Raf</b>
      </button>
      <button className="button1">
        <img className="button-child" alt="" src={RectangleBet} />
        <button className="bet1">Create BET</button>
      </button>
      <img
        className="unsplashpvoepplw818-icon"
        alt=""
        src={Image}
      />
      <div className="top">
        <button className="denignma">Denignma</button>
        <button className="button2">
          <img className="button-inner" alt="" src={RectangleConnect} />
          <button className="connect">Connect</button>
        </button>
      </div>
    </div>
    </>
  )
}

export default App
