import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import { FaStar, FaArrowRight } from 'react-icons/fa'

import Layout from '../components/Layout'
import skillsData from './../data/skills'

function BlueStar() {
  return <FaStar style={{color: '#4078c0'}} />
}

class Skills extends React.Component {
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
          title={`Contact | ${siteTitle}`}
        />

        <h2>Skills</h2>
        <p>Proficiency: <BlueStar/>-Some, <BlueStar/><BlueStar/>-Good, <BlueStar/><BlueStar/><BlueStar/>-Excellent</p>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel active={true} direction='asc'>
                  Technology
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                  Category
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>
                  Proficiency
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skillsData.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>
                  {skill.technology}
                </TableCell>
                <TableCell>
                  {skill.category}
                </TableCell>
                <TableCell>
                  {Array.from({length: skill.proficiency}).map((_, i) => <BlueStar key={i}/>)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div style={{textAlign:'right'}}>
          <Link to={'/portfolio'}>Portfolio <FaArrowRight/></Link>
        </div>

      </Layout>
    )
  }
}

export default Skills

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
