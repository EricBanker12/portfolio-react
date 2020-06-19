import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'
import GatsbyImage from 'gatsby-image'

import Layout from '../../components/Layout'
import projectData from './../../data/projects'
import SEO from '../../components/SEO'
import Header from '../../components/Header'

function projectIndex() {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/image\\d\\.jpg/"}}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 320, quality: 90) {
                ...GatsbyImageSharpFixed
              }
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
            {projectData.map((p, i) => (
              <Col xs={12} sm={12} md={6} lg={6} key={p.title}>
                
                <Link to={`/projects/${i}`} key={p.title}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <GatsbyImage fixed={data.allFile.edges[i].node.childImageSharp.fixed} />
                    <h4>{p.title}</h4>
                    <p>{`${p.paragraphs[0].slice(0,80)}...`}</p>
                  </div>
                </Link>
              
              </Col>
            )).reverse()}
          </Row>
        </Grid>
      </div>
    </Layout>
  )
}

export default projectIndex

