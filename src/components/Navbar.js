import React, { Component } from 'react'
import { FaHome, FaCog, FaShapes, FaGraduationCap } from 'react-icons/fa'
import { IoMdMail, IoMdText } from 'react-icons/io'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Link to={'/'}><FaHome /> Home&nbsp;</Link>
          <Link to={'/skills'}><FaCog /> Skills&nbsp;</Link>
          <Link to={'/portfolio'}><FaShapes /> Portfolio&nbsp;</Link>
          <Link to={'/education'}><FaGraduationCap /> Education&nbsp;</Link>
          {/* <Link to={'/journey'}>Journey</Link> */}
          <Link to={'/contact'}><IoMdMail /> Contact&nbsp;</Link>
          <Link to={'/blog'}><IoMdText /> Blog&nbsp;</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
