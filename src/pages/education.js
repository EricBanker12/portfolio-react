import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import educationData from './../data/education'

class Education extends React.Component {
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
          title={`Contact | ${siteTitle}`}
        />

        <h2>Education</h2>
        <br />

        {Object.keys(educationData).map(key => {
          if (educationData[key]) {
            return (
              <p>{key}: {educationData[key]}</p>
            )
          }
        })}
      </Layout>
    )
  }
}

export default Education

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
