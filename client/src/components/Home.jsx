import React from 'react'
// import homeImage from './assets/homeImage.jpeg'
import homeImage from '../assets/homeImage.png'

const Home = () => {
  return (
    <div className='home-div'>
      <div>
     <h1>Welcome to our E-learning page</h1>
     <h3>where you will learn UI/UX Designing, <br/>website development
         and Mobile Application Development </h3>
         <button className='start'>Start Learning</button>
      </div>
      <div>
      <img src={homeImage} alt="Description of my image" width={500} height={450} />
      </div>
    </div>
  )
}

export default Home
