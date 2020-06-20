import React from 'react'
import { FaHome, FaCog, FaShapes, FaGraduationCap } from 'react-icons/fa'

import NavLink from './NavLink'

class Navbar extends React.Component {
  render() {
    return (
      <header
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <nav
          style={{
            width: '100%',
            maxWidth: '35rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <NavLink to={'/'}><FaHome /> Home&nbsp;</NavLink>
          <NavLink to={'/skills'}><FaCog /> Skills&nbsp;</NavLink>
          <NavLink to={'/projects'}><FaShapes /> Projects&nbsp;</NavLink>
          <NavLink to={'/education'}><FaGraduationCap /> Education&nbsp;</NavLink>
        </nav>
      </header>
    )
  }
}

export default Navbar
