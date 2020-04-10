import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { FaArrowRight } from 'react-icons/fa'
import {
  createMuiTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  ThemeProvider,
} from '@material-ui/core'

import Layout from '../components/Layout'
import skillsData from './../data/skills'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit'
  }
})

class Skills extends React.Component {
  state = {activeLabel: 'technology', activeDirection: 'desc'}

  labelClickHandler = (event) => {
    const name = event.currentTarget.getAttribute('name')
    if (this.state.activeLabel === name) {
      const activeDirection = this.state.activeDirection === 'asc' ? 'desc' : 'asc'
      this.setState({activeDirection})
    }
    else {
      const activeLabel = name
      const activeDirection = 'desc'
      this.setState({activeLabel, activeDirection})
    }
  }

  sortTableHandler = (a, b) => {
    a = a[this.state.activeLabel]
    b = b[this.state.activeLabel]

    if (typeof a === 'string') {
      a = a.toLowerCase()
      b = b.toLowerCase()
    }

    if (a === b) return 0

    if (a < b) {
      if (this.state.activeDirection === 'asc') {
        return 1
      }
      else {
        return -1
      }
    }

    if (a > b) {
      if (this.state.activeDirection === 'asc') {
        return -1
      }
      else {
        return 1
      }
    }
  }

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
          title={`Skills | ${siteTitle}`}
        />

        <header style={{position: 'relative'}}>
          <h2>Skills</h2>
          <p style={{position: 'absolute', top:0, right:0}}>
            <Link to={'/portfolio'}>&nbsp;Portfolio <FaArrowRight/></Link>
          </p>
        </header>


        <ThemeProvider theme={theme}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    name='technology'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'technology'}
                    direction={this.state.activeLabel === 'technology' ? this.state.activeDirection : 'desc'}>
                    Technology
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    name='category'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'category'}
                    direction={this.state.activeLabel === 'category' ? this.state.activeDirection : 'desc'}>
                    Category
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    name='field'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'field'}
                    direction={this.state.activeLabel === 'field' ? this.state.activeDirection : 'desc'}>
                    Field
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillsData
                .sort(this.sortTableHandler)
                .map((skill) => (
                <TableRow key={skill.technology}>
                  <TableCell>
                    {skill.technology}
                  </TableCell>
                  <TableCell>
                    {skill.category}
                  </TableCell>
                  <TableCell>
                    {skill.field}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ThemeProvider>

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
