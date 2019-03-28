import React from 'react'
import './MenuBarItem.css'
export default function MenuBarItem (props) {
  if (!props.url) {
    return (
      <span className='MenuBarItem MenuBarItem--disabled'>
        {props.children}
      </span>
    )
  }
  return (
    <a className='MenuBarItem MenuBarItem--enabled' href={props.url} >
      {props.children}
    </a>
  )
}
