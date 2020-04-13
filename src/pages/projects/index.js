import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaArrowRight } from 'react-icons/fa'

import Layout from '../../components/Layout'
import projectData from './../../data/projects'

class projectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Projects | ${siteTitle}`}
        />
        <header style={{position: 'relative'}}>
          <h2>Projects</h2>
          <p style={{position: 'absolute', top:0, right:0}}>
            <Link to={'/education'}>&nbsp;Education <FaArrowRight/></Link>
          </p>
        </header>
        <p>Click on a project to view details.</p>

        <div style={{textAlign: 'center'}}>
          <Grid fluid>
            <Row>
              {projectData.map((p, i) => (
                <Col xs={12} sm={12} md={6} lg={6} key={p.title}>
                  <Link to={`/projects/view?id=${i}`} state={p} key={p.title}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 320,
                          height: 180,
                          margin: 10,
                          background: `url(${p.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                        }}
                      />
                      <p>{p.title}</p>
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
}

export default projectIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
