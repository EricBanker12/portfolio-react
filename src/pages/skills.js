import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import skillsData from './../data/skills'

class Skills extends React.Component {
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

        <h2>Skills</h2>
        <br />

        {Object.keys(skillsData).map(key => {
          if (skillsData[key]) {
            return (
              <p>{key}: {skillsData[key]}</p>
            )
          }
        })}
      </Layout>
    )
  }
}

export default Skills

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
