import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

import Layout from './../../components/Layout'

export class view extends Component {
  render() {
    const passedData = this.props.location.state || {
      title: 'default title',
      description: 'default description',
      image: 'https://via.placeholder.com/350',
      website: 'https://via.placeholder.com',
    }
    const { title, description, image, website } = passedData
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | Eric Banker's Portfolio`}</title>
        </Helmet>
        <Link to="/portfolio"><FaArrowLeft/> Back&nbsp;</Link>
        <h2>{title}</h2>
        <img src={image} />
        <div>
          {description}
          <br /> <br />
          {website && (
            <div>
              Website:{' '}
              <a href={website} target="_new">
                {website}
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default view
