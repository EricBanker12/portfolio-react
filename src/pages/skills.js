import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'

import Layout from '../components/Layout'
import skillsData from './../data/skills'
import SEO from '../components/SEO'
import Header from '../components/Header'

const categories = ['Technology', 'Description']

class Skills extends React.Component {
  state = {
    activeLabel: 'Technology',
    activeDirection: 'desc',
    filter: '',
    filterIgnoreCase: true,
    filterExclude: {},
  }

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

    if (Array.isArray(a)) {
      a = a.join('\n').length
      b = b.join('\n').length
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
      const input = this.state.filter.replace(/(\\|\^|\$|\*|\+|\?|\.|\(|\)|\{|\}|\[|\])/g, '\\$1')
      const filter = new RegExp(input, this.state.filterIgnoreCase ? 'i' : '')
      
      for (let category of categories) {
        if (!this.state.filterExclude[category] && filter.test(skill[category])) return true
      }
      
      return false
    }
    
    catch (err) {
      console.error(err.message)
      return true
    }
  }

  render() {
    return (
      <Layout>

        <SEO title='Skills'/>
        <Header title='Skills' next='Projects'/>

        <TextField
          label='Filter'
          placeholder='Use | to multi-filter: C++|Python'
          style={{width: '100%'}}
          value={this.state.filter}
          onChange={(e) => {this.setState({filter: e.target.value})}}
        />
        
        <FormControlLabel label='Ignore Case' control={
          <Checkbox
            style={{color: '#4078c0'}}
            color='primary'
            checked={this.state.filterIgnoreCase}
            onChange={(e) => {this.setState({filterIgnoreCase: e.target.checked})}}
          />
        }/>

        {categories.map(category => (
          <FormControlLabel label={`Apply to ${category}`} control={
            <Checkbox
              style={{color: '#4078c0'}}
              color='primary'
              checked={!this.state.filterExclude[category]}
              onChange={(e) => {
                this.state.filterExclude[category] = !e.target.checked
                this.setState({filterExclude: this.state.filterExclude})
              }}
            />
          }/>
        ))}

        <Table style={{width: '100%'}}>
          <TableHead>
            <TableRow>
              {categories.map(category => (
                <TableCell>
                  <TableSortLabel
                    name={category}
                    style={{fontWeight: 'bold'}}
                    onClick={this.labelClickHandler}
                    active={this.state.activeLabel === category}
                    direction={this.state.activeLabel === category ? this.state.activeDirection : 'desc'}>
                    {category}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {skillsData
              .filter(this.filterTableHandler)
              .sort(this.sortTableHandler)
              .map((skill) => (
              <TableRow key={skill.Technology}>
                <TableCell>
                  <a href={skill.Website}>{skill.Technology}</a>
                </TableCell>
                <TableCell>
                  <ul style={{marginLeft: '1rem'}}>
                    {skill.Description.map(bullet => <li>{bullet}</li>)}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Layout>
    )
  }
}

export default Skills
