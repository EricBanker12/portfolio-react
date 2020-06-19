import React from 'react'
import { Link } from 'gatsby'
import { FaArrowRight } from 'react-icons/fa'

const Header = ({title, next, path}) => {
  path = path || next && `/${next.toLowerCase()}`

  return (
    <header style={{position: 'relative'}}>
      <h2>{title}</h2>
      {next && (
        <p style={{position: 'absolute', top:0, right:0}}>
          <Link to={path}>&nbsp;{next} <FaArrowRight/></Link>
        </p>
      )}
    </header>
  )
}

export default Header
