import React from 'react'
import { FaHome, FaCog, FaShapes, FaGraduationCap } from 'react-icons/fa'
import { IoMdText } from 'react-icons/io'
import { Link } from 'gatsby'

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
          <Link to={'/'}><FaHome /> Home&nbsp;</Link>
          <Link to={'/skills'}><FaCog /> Skills&nbsp;</Link>
          <Link to={'/projects'}><FaShapes /> Projects&nbsp;</Link>
          <Link to={'/education'}><FaGraduationCap /> Education&nbsp;</Link>
          {/* <Link to={'/blog'}><IoMdText /> Blog&nbsp;</Link> */}
        </nav>
      </header>
    )
  }
}

export default Navbar
