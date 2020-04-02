import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FaArrowLeft } from 'react-icons/fa'

import Layout from './../../components/Layout'
import portfolioData from './../../data/portfolio'

export class view extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const params = new URLSearchParams(this.props.location.search)
    const passedData = this.props.location.state || portfolioData[params.get('id')]
    const { title, image, paragraphs, bullets } = passedData

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${title} | ${siteTitle}`}
        />
        <Link to="/portfolio"><FaArrowLeft/> Back&nbsp;</Link>
        <h2>{title}</h2>
        <img src={image} />
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

export default view

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