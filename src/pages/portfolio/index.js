import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaArrowRight } from 'react-icons/fa'

import Layout from '../../components/Layout'
import portfolioData from './../../data/portfolio'

class portfolioIndex extends React.Component {
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
          title={`Portfolio | ${siteTitle}`}
        />
        <h2>Portfolio</h2>
        <p>Click on a project to view details.</p>

        <div style={{textAlign: 'center'}}>
          <Grid fluid>
            <Row>
              {portfolioData.map((p, i) => (
                <Col xs={12} sm={12} md={6} lg={6} key={p.title}>
                  <Link to={`/portfolio/view?id=${i}`} state={p} key={p.title}>
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
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>

        <p style={{textAlign:'right'}}>
          <Link to={'/education'}>&nbsp;Education <FaArrowRight/></Link>
        </p>
      </Layout>
    )
  }
}

export default portfolioIndex

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
