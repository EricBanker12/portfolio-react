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

        <header style={{position: 'relative'}}>
          <h2>Education</h2>
          <p style={{position: 'absolute', top:0, right:0}}>
            {/* <Link to={'/blog'}>&nbsp;Blog <FaArrowRight/></Link> */}
          </p>
        </header>

        {educationData.map((data, index) => (
          <div key={index}>
            <div style={{display: 'flex'}}>
              <h4>{data.title}</h4>
              <span style={{marginTop: '1.375rem'}}>&nbsp;| {data.time}</span>
            </div>
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
