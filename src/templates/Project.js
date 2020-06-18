import React from 'react'
import { graphql, Link } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

import Layout from './../../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'

export class Project extends React.Component {
  render() {
    const passedData = this.props.pageContext
    
    if (!passedData) return <Layout>Error</Layout>
    
    const { title, image, video, paragraphs, bullets, website } = passedData

    return (
      <Layout>
        
        <SEO title={title} />
        <Link to="/projects"><FaArrowLeft/> Back&nbsp;</Link>
        <Header title={<a href={website}>{title}</a>} />

        {/* {!video && <a href={website}><img src={image} alt={title} /></a>}
        {video && (
          <video controls style={{width: '100%'}}>
            <source src={video} />
            <img src={image} />
          </video>
        )} */}
        
        {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        
        <ul>
          {bullets.map((bullet, i) => {
            if (typeof bullet === 'string') return <li key={i}>{bullet}</li>
            else return <li key={i}><a href={bullet.link}>{bullet.text}</a></li>
          })}
        </ul>
      
      </Layout>
    )
  }
}

export default Project