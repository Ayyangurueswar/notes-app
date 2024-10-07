import React from 'react'
import "@theme-toggles/react/css/Expand.css"
import {Expand} from "@theme-toggles/react"

const ThemeToggleButton = ({handleLightMode, lightMode}) => {
  return (
    <Expand duration={750} toggle={handleLightMode} toggled={lightMode === 'dark'} style={{
      width: '40px',
      height: '40px'
    }}/>
  )
}

export default ThemeToggleButton