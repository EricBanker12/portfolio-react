import React, { Component } from 'react'
import { FaPhoneSquare, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import contactData from './../data/contact'

class Footer extends Component {
  render() {
    return (
      <footer>
        <h4>Eric Banker | Full-Stack Web Developer</h4>
        <p>I am always open to email, text message, and voicemail.</p>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href={`tel:${contactData.phone}`}><FaPhoneSquare/> {contactData.phone}&nbsp;</a>
          <a href={`mailto:${contactData.email}`}><FaEnvelope/> {contactData.email}&nbsp;</a>
          <a href={contactData.github}><FaGithub/> GitHub&nbsp;</a>
          <a href={contactData.linkedin}><FaLinkedin/> LinkedIn&nbsp;</a>
        </div>
      </footer>
    )
  }
}

export default Footer
