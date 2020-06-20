import React from 'react'
import { graphql } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'
import GatsbyImage from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'
import NavLink from '../components/NavLink'

function Project({ pageContext, data }) {
  
  const { title, website, video, paragraphs, bullets, links } = pageContext
  const fluid = data.file.childImageSharp.fluid
  const site = data.site.siteMetadata.siteUrl
  const seoImage = site + fluid.src

  return (
    <Layout>
      
      <SEO
        title={title}
        description={paragraphs[0]}
        meta={[
          {property: `og:image`, content: seoImage},
          {name: `twitter:image`, content: seoImage},
        ]}
      />
      <NavLink to="/projects" style={{display: 'inline-block', marginTop: '1em'}}><FaArrowLeft/> Back&nbsp;</NavLink>
      <Header title={<a href={website}>{title}</a>} />

      {!video && (
        <a href={website}><GatsbyImage fluid={fluid} alt={title} /></a>
      )}
      
      {video && (
        <video controls style={{width: '100%'}}>
          <source src={`/videos/${video}`} />
          <a href={website}><GatsbyImage fluid={fluid} alt={title} /></a>
        </video>
      )}
      
      {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      
      <ul>
        {bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
        {links.map((link, i) => <li key={i}><a href={link.link}>{link.text}</a></li>)}
      </ul>
    
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($image: String, $color: String, $background: String) {
    file(relativePath: {eq: $image}) {
      childImageSharp {
        fluid(maxWidth: 760, quality: 90, traceSVG: {color: $color, background: $background}) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`