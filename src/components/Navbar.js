import React from 'react'
import { FaHome, FaCog, FaShapes, FaGraduationCap, FaEnvelope } from 'react-icons/fa'

import NavLink from './NavLink'

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav
          style={{
            width: '100%',
            maxWidth: '35rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <NavLink to={'/'}><FaHome /> Home&nbsp;</NavLink>
          <NavLink to={'/skills'}><FaCog /> Skills&nbsp;</NavLink>
          <NavLink to={'/projects'}><FaShapes /> Projects&nbsp;</NavLink>
          <NavLink to={'/background'}><FaGraduationCap /> Background&nbsp;</NavLink>
          <NavLink to={'#contact'}><FaEnvelope /> Contact&nbsp;</NavLink>
        </nav>
      </header>
    )
  }
}

export default Navbar
