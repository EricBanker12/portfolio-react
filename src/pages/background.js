import React from 'react'

import Layout from '../components/Layout'
import backgroundData from './../data/background'
import SEO from '../components/SEO'
import Header from '../components/Header'

class Background extends React.Component {
  render() {
    return (
      <Layout>

        <SEO title='Background' path='/background'/>
        <Header title='Background' next='Home' path='/' />

        <h2 className='section-head'>Employment</h2>
        {backgroundData.employment.map((data, index) => (
          <div key={index} style={{paddingBottom: '1rem'}}>
            <div style={{display: 'flex'}}>
              <h3>{data.title}</h3>
              <span>&nbsp;| {data.employer}</span>
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
        <h2 className='section-head'>Education</h2>
        {backgroundData.education.map((data, index) => (
          <div key={index} style={{paddingBottom: '1rem'}}>
            <div style={{display: 'flex'}}>
              <h3>{data.title}</h3>
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

export default Background
