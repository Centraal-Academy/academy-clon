import React from 'react'
import MenuBar from '../MenuBar/MenuBar'
import MenuBarItem from '../MenuBarItem/MenuBarItem'
import './Page.css'
export default function Page (props) {
  return (
    <div className='Page'>
      <MenuBar>
        <MenuBarItem url='https://centraal.academy/about-us'>
          Nosotros
        </MenuBarItem>
        <MenuBarItem url=''>
         Programas
        </MenuBarItem>
        <MenuBarItem url='https://centraal.academy/open-class'>
          Open Class <span className='highlight--red'>Live</span>
        </MenuBarItem>
      </MenuBar>
      {props.children}
    </div>
  )
}
