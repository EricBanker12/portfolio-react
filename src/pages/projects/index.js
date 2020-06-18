import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import projectData from './../../data/projects'
import SEO from '../../components/SEO'
import Header from '../../components/Header'
import Preview from '../../components/Preview'

function projectIndex() {

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
                  <Preview project={p} />
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

