import React from 'react'
import SideBar from './components/SideBar'
import ASide from './components/ASide'
import Home from './components/pages/Home'

export default function App() {
  return (
    <div className="w-full bg-slate-600">
      <SideBar />

      <div className="pt-[5.5rem] md:pt-0 md:pl-[17rem] md:pr-[22rem]">
        <Home />

      </div>

      <ASide />
    </div>
  )
}

