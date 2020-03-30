import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, ThemeProvider, createMuiTheme } from '@material-ui/core'
import { FaStar, FaArrowRight } from 'react-icons/fa'

import Layout from '../components/Layout'
import skillsData from './../data/skills'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit'
  }
})

function BlueStar() {
  return <FaStar style={{color: '#4078c0'}} />
}

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
    // equal
    if (a[this.state.activeLabel] === b[this.state.activeLabel]) return 0
    // less than
    if (a[this.state.activeLabel] < b[this.state.activeLabel]) {
      if (this.state.activeDirection === 'asc') {
        return 1
      }
      else {
        return -1
      }
    }
    // greater than
    if (a[this.state.activeLabel] > b[this.state.activeLabel]) {
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

        <h2>Skills</h2>
        <span>
          Proficiency:&nbsp;
          <BlueStar/>-Some,&nbsp;
          <BlueStar/><BlueStar/>-Good,&nbsp;
          <BlueStar/><BlueStar/><BlueStar/>-Excellent
        </span>

        <ThemeProvider theme={theme}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    name='technology'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'technology'}
                    direction={this.state.activeLabel === 'technology' ? this.state.activeDirection : 'desc'}
                  >
                    Technology
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    name='category'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'category'}
                    direction={this.state.activeLabel === 'category' ? this.state.activeDirection : 'desc'}
                  >
                    Category
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                <TableSortLabel
                    name='proficiency'
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === 'proficiency'}
                    direction={this.state.activeLabel === 'proficiency' ? this.state.activeDirection : 'desc'}
                  >
                    Proficiency
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
                    {
                      Array.from({length: skill.proficiency})
                        .map((_, i) => <BlueStar key={i}/>)
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ThemeProvider>
        
        <p style={{textAlign:'right'}}>
          <Link to={'/portfolio'}>&nbsp;Portfolio <FaArrowRight/></Link>
        </p>

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
