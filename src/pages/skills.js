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
  TextField,
  ThemeProvider,
} from '@material-ui/core'

import Layout from '../components/Layout'
import skillsData from './../data/skills'

const theme = createMuiTheme({
  typography: {
    font: 'inherit',
  },
})

class Skills extends React.Component {
  state = {activeLabel: 'technology', activeDirection: 'desc', filter: ''}

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
    // sorts strings alphabetically and numbers numerically
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

  filterTableHandler = (skill) => {
    if (!this.state.filter) return true
    
    try {
      const filter = new RegExp(this.state.filter, 'i')
      if (filter.test(skill.technology)) return true
      if (filter.test(skill.category)) return true
      if (filter.test(skill.field)) return true
      return false
    }
    catch (err) {
      return true
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
            <Link to={'/projects'}>&nbsp;Projects <FaArrowRight/></Link>
          </p>
        </header>


        <ThemeProvider theme={theme}>
          <TextField
            label='Filter'
            placeholder='Type a Technology, Category, or Field. Separate multiple filters with a | character.'
            style={{width: '100%'}}
            value={this.state.filter}
            onChange={(e) => {this.setState({filter: e.target.value})}} />
          <div style={{maxWidth: '100%', overflow: 'auto'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel
                      name='technology'
                      style={{fontSize: '0.875rem', fontWeight: 'bold'}}
                      onClick={this.labelClickHandler}
                      active={this.state.activeLabel === 'technology'}
                      direction={this.state.activeLabel === 'technology' ? this.state.activeDirection : 'desc'}>
                      Technology
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      name='category'
                      style={{fontSize: '0.875rem', fontWeight: 'bold'}}
                      onClick={this.labelClickHandler}
                      active={this.state.activeLabel === 'category'}
                      direction={this.state.activeLabel === 'category' ? this.state.activeDirection : 'desc'}>
                      Category
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      name='field'
                      style={{fontSize: '0.875rem', fontWeight: 'bold'}}
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
                  .filter(this.filterTableHandler)
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
          </div>
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
