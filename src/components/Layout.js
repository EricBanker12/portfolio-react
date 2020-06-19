import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Typography from 'typography'
import githubTheme from 'typography-theme-github'
import BackgroundImage from 'gatsby-background-image'

import Navbar from './Navbar'
import Footer from './Footer'

import '../styles/layout.css'

const typography = new Typography(githubTheme)

typography.injectStyles()

function Layout({children}) {

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "olivier-collet-bjkxueiXP3w-unsplash.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag='div'
      fluid={data.bg.childImageSharp.fluid}
      style={{
        width: '100%',
        minHeight: '100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '52.5rem',
        padding: '2.5rem',
        backgroundColor: 'white',
      }}>
      
      <Navbar />
      
      <section>
        {children}
      </section>
      
      <Footer />
      
      </div>
    </BackgroundImage>
  )
}

export default Layout
