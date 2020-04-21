import React from 'react'

import { rhythm } from '../utils/typography'
import Header from '../components/Header'
import Navbar from './Navbar'
import Footer from './Footer'

import '../styles/layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const importedStyle = this.props.style
    const defaultStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)}`,
      backgroundColor: 'white',
      minHeight: '100vh'
    }

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    }
    return (
      <div style={finalStyle}>
        <Header />
        <Navbar />
        <section aria-live="assertive">
          {children}
        </section>
        <Footer />
      </div>
    )
  }
}

export default Layout
