import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { FaArrowRight } from 'react-icons/fa'

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
          title={`Education | ${siteTitle}`}
        />

        <h2>Education</h2>

        {educationData.map((data, index) => (
          <div key={index}>
            <h4>{data.title}</h4>
            {data.paragraphs.map((paragraphs, i) => (
              <p key={i}>{paragraphs}</p>
            ))}
            <ul>
              {data.bullets.map((bullet, i) => {
                if (typeof bullet === 'string') return <li key={i}>{bullet}</li>
                else return <li key={i}><a href={bullet.link}>{bullet.text}</a></li>
              })}
            </ul>
          </div>
        ))}

        <p style={{textAlign:'right'}}>
          <Link to={'/blog'}>&nbsp;Blog <FaArrowRight/></Link>
        </p>

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
