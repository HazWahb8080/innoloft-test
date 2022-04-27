import React from 'react'
import Header from './Header';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
    <Header/>
    <NavBar/>
    </div>
  )
}

export default Home