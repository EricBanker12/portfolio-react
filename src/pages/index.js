import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import GatsbyImage from 'gatsby-image'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'
import homeData from '../data/home'

function SiteIndex() {

  const data = useStaticQuery(graphql`
    query {
      me: file( relativePath: { eq: "main_image.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 760) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const fluid = data.me.childImageSharp.fluid
  const fluidUrl = data.site.siteMetadata.siteUrl + fluid.src

  return (
    <Layout>

      <SEO
        title='Home'
        meta={[
          {property: `og:image`, content: fluidUrl},
          {name: `twitter:image`, content: fluidUrl},
        ]}
      />
      
      <Header title='Home' next='Skills'/>

      {homeData.map((str, i) => <p key={i}>{str}</p>)}

      <GatsbyImage
        style={{marginTop: '1rem'}}
        fluid={fluid}
        alt='Eric Banker'
      />

    </Layout>
  )
}

export default SiteIndex
