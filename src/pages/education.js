import React from 'react'

import Layout from '../components/Layout'
import educationData from './../data/education'
import SEO from '../components/SEO'
import Header from '../components/Header'

class Education extends React.Component {
  render() {
    return (
      <Layout>

        <SEO title='Education' path='/education'/>
        <Header title='Education' next='Home' path='/' />

        {educationData.map((data, index) => (
          <div key={index} style={{paddingBottom: '1rem'}}>
            <div style={{display: 'flex'}}>
              <h2>{data.title}</h2>
              <span>&nbsp;| {data.time}</span>
            </div>
            {data.paragraphs.map((paragraphs, i) => (
              <p key={i}>{paragraphs}</p>
            ))}
            <ul>
              {data.bullets.map((bullet, i) => {
                if (typeof bullet === 'string') return <li key={i}>{bullet}</li>
                else return <li key={i}><a href={bullet.link} target="_blank" rel="external nofollow">{bullet.text}</a></li>
              })}
            </ul>
          </div>
        ))}

      </Layout>
    )
  }
}

export default Education
