import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import NavLink from './NavLink'

const Header = ({title, next, path}) => {
  path = path || next && `/${next.toLowerCase()}`

  return (
    <header style={{position: 'relative'}}>
      <h1>{title}</h1>
      {next && (
        <NavLink
          to={path}
          style={{position: 'absolute', top:'0.5rem', right:0}}
        >
          &nbsp;{next} <FaArrowRight/>
        </NavLink>
      )}
    </header>
  )
}

export default Header
