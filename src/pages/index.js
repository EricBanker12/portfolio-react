import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import GatsbyImage from 'gatsby-image'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/SEO'

function SiteIndex() {

  const data = useStaticQuery(graphql`
    query {
      me: file( relativePath: { eq: "main_image.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 760) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>

      <SEO title='Home'/>
      <Header title='Home' next='Skills'/>

      <p>
        I am Eric Banker, a Full-Stack Web Developer, with interests in biology
        and healthcare. I boast a strong background in HTML, CSS, JavaScript,
        React.js, Node.js, Express.js, and Jest, in addition to extra background in R,
        Python, Java, and C/C++ from university and self-study.
      </p>
      <p>
        Initially, I earned a degree in biology to pursue a career in medical
        research; however, I am now working in web and software development.
        Prior to 2018, most of my programming experience came from creating
        utilities and modifications for video games. Nearing my graduation from
        Southern Illinois University Edwardsville, I shifted my focus toward data
        science in R and Python and supplemented my studies with extra online coursework.
      </p>
      <p>
        But after losing my brother to cancer and feeling frustrations with the slow
        progression of research to available treatments, I decided to pursue a career
        in the fast-paced tech industry. This led me to attending Lambda School
        training in full-stack web development. I want to use my array of technical
        skills and biology background to improve people's lives in a fast-paced
        environment where I can see my efforts take shape.
      </p>

      <GatsbyImage
        fluid={data.me.childImageSharp.fluid}
        alt='Eric Banker' />

    </Layout>
  )
}

export default SiteIndex
