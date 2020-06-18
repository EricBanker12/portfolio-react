import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import '../styles/layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const importedStyle = this.props.style
    const defaultStyle = {
      maxWidth: '50rem',
      padding: '2rem',
      backgroundColor: 'white',
      flex: 1,
    }

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    }
    return (
      <div style={finalStyle}>
        {/* <Header /> */}
        <Navbar />
        <section>
          {children}
        </section>
        <Footer />
      </div>
    )
  }
}

export default Layout
