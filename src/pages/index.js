import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'
import { FaArrowRight } from 'react-icons/fa'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>

        <header style={{position: 'relative'}}>
          <h2>Home</h2>
          <p style={{position: 'absolute', top:0, right:0}}>
            <Link to={'/skills'}>&nbsp;Skills <FaArrowRight/></Link>
          </p>
        </header>

        <p>
          Initially, I earned a degree in biology to pursue a career in medical
          research. However, I am now working in web and software development.
        </p>
        <p>
          Prior to 2018, most of my programming experience came from creating
          utilities and modifications for video games. Nearing my graduation from
          Southern Illinois University Edwardsville, I shifted my focus toward
          data science in R and python and supplemented my studies with extra
          online coursework.
        </p>
        <p>
          But after losing my brother to cancer and feeling frustrations with the slow
          progression of research to available treatments, I decided to pursue a career
          in the fast-paced tech industry. This led me to attending Lambda School training
          in full-stack web development.
        </p>
        <p>
          Today I boast a wide range of technical skills such as my strong background
          in HTML, CSS, JavaScript, React, Node, Express, and Jest. I have additional
          background in R, Python, Java, C/C++, and more from university and self-study.
          I want to use my array of technical skills and biology background to improve
          people's lives in a fast-paced environment where I can see my efforts take shape.
        </p>

        <img src={DisplayImage} alt={siteTitle} />

      </Layout>
    )
  }
}

export default SiteIndex

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
