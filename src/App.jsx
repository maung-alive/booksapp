import React, { useState } from 'react'
import SideBar from './components/SideBar'
import ASide from './components/ASide'
import Home from './components/pages/Home'

export default function App() {

  let [ showAside, setShowAside ] = useState(false);

  return (
    <div className="w-full bg-slate-600">
      <SideBar showAside={showAside} setShowAside={setShowAside} />

      <div className="lg:pl-[17rem] md:pr-[22rem]">
        <Home />
      </div>

      <ASide setShowAside={setShowAside} showAside={showAside} />
    </div>
  )
}

