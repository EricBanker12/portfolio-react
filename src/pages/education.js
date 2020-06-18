import React from 'react'

import Layout from '../components/Layout'
import educationData from './../data/education'
import SEO from '../components/SEO'
import Header from '../components/Header'

class Education extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout>

        <SEO title='Education'/>
        <Header title='Education'/>

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
