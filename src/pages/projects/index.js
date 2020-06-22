import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Header from '../../components/Header'
import NavLink from '../../components/NavLink'

function projectIndex() {
  
  const data = useStaticQuery(graphql`
    query {
      json: allProjectsJson {
        nodes {
          id
          title
          image
          paragraphs
        }
      }
      image: allFile(filter: {relativePath: {regex: "/image\\d\\.jpg/"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 384, quality: 90) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      
      <SEO title='Projects'/>
      <Header title='Projects' next='Education'/>

      <p>Click on a project to view details.</p>

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center'}}>
        {data.json.nodes
          .sort((a, b) => a.id - b.id)
          .reverse()
          .map(p => (
              <NavLink to={`/projects/${p.id}`} key={p.id}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <h4>{p.title}</h4>
                  <GatsbyImage
                    fluid={data.image.nodes.find(node => p.image == node.childImageSharp.fluid.originalName).childImageSharp.fluid}
                    alt={p.title}
                    style={{width: '20rem'}}
                  />
                  <p style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '20rem'
                  }}>
                    {p.paragraphs[0]}
                  </p>
                </div>
              </NavLink>
          ))
        }
      </div>
    </Layout>
  )
}

export default projectIndex

