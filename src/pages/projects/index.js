import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'
import GatsbyImage from 'gatsby-image'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Header from '../../components/Header'

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
            fixed(width: 320, quality: 90) {
              originalName
              ...GatsbyImageSharpFixed
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

      <div style={{textAlign: 'center'}}>
        <Grid fluid>
          <Row>
            {data.json.nodes
              .sort((a, b) => a.id - b.id)
              .reverse()
              .map(p => (
                <Col xs={12} sm={12} md={6} lg={6} key={p.id}>
                  <Link to={`/projects/${p.id}`}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}>
                      <h4>{p.title}</h4>
                      <GatsbyImage
                        fixed={data.image.nodes.find(node => p.image == node.childImageSharp.fixed.originalName).childImageSharp.fixed}
                        alt={p.title}
                      />
                      <p>{`${p.paragraphs[0].slice(0,60)}...`}</p>
                    </div>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Grid>
      </div>
    </Layout>
  )
}

export default projectIndex

