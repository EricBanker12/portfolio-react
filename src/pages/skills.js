import React from 'react'
import Highlight from 'react-highlight-words'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableSortLabel,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'

import Layout from '../components/Layout'
import skillsData from './../data/skills'
import SEO from '../components/SEO'
import Header from '../components/Header'
import TableRowMobile from '../components/TableRowMobile'

const categories = ['Technology', 'Description']

class Skills extends React.Component {
  state = {
    activeLabel: 'Technology',
    activeDirection: 'desc',
    filter: '',
    filterRegExp: new RegExp(''),
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

  filterHandler = (event) => {
    try {
      const filter = event.target.value.replace(/(\\|\^|\$|\*|\+|\?|\.|\(|\)|\{|\}|\[|\])/g, '\\$1')
      const filterRegExp = new RegExp(filter, this.state.filterIgnoreCase ? 'i' : '')
      this.setState({filter: event.target.value, filterRegExp})
    }
    catch (err) {
      console.error(err.message)
      this.setState({filter: event.target.value})
    }
  }

  filterIgnoreCaseHandler = (event) => {
    try {
      const filter = this.state.filter.replace(/(\\|\^|\$|\*|\+|\?|\.|\(|\)|\{|\}|\[|\])/g, '\\$1')
      const filterRegExp = new RegExp(filter, event.target.checked ? 'i' : '')
      this.setState({filterIgnoreCase: event.target.checked, filterRegExp})
    }
    catch (err) {
      console.error(err.message)
      this.setState({filterIgnoreCase: event.target.checked})
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

    for (let category of categories) {
      if (!this.state.filterExclude[category] && this.state.filterRegExp.test(skill[category])) return true
    }
    
    return false
  }

  render() {
    return (
      <Layout>

        <SEO title='Skills' path='/skills'/>
        <Header title='Skills' next='Projects'/>

        <TextField
          label='Filter'
          placeholder='Use | to multi-filter: C++|Python'
          style={{width: '100%'}}
          value={this.state.filter}
          onChange={this.filterHandler}
        />
        
        <FormControlLabel label='Ignore Case' control={
          <Checkbox
            style={{color: '#4078c0'}}
            color='primary'
            checked={this.state.filterIgnoreCase}
            onChange={this.filterIgnoreCaseHandler}
          />
        }/>

        {categories.map(category => (
          <FormControlLabel key={category} label={`Apply to ${category}`} control={
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

        <Table style={{width: '100%'}} size='small'>
          <TableHead>
            <TableRowMobile>
              {categories.map(category => (
                <TableCell key={category}>
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
            </TableRowMobile>
          </TableHead>

          <TableBody>
            {skillsData
              .filter(this.filterTableHandler)
              .sort(this.sortTableHandler)
              .map((skill) => (
              <TableRowMobile key={skill.Technology}>
                <TableCell>
                  <a href={skill.Website} target="_blank" rel="external nofollow">
                    <Highlight
                      caseSensitive={!this.state.filterIgnoreCase}
                      searchWords={[!this.state.filterExclude.Technology ? this.state.filterRegExp : '']}
                      textToHighlight={skill.Technology}
                    />
                  </a>
                </TableCell>
                <TableCell>
                  <ul style={{paddingLeft: '1rem'}}>
                    {skill.Description.map((bullet, i) => (
                      <li key={i}>
                        <Highlight
                          caseSensitive={!this.state.filterIgnoreCase}
                          searchWords={[!this.state.filterExclude.Description ? this.state.filterRegExp : '']}
                          textToHighlight={bullet}
                        />
                      </li>
                    ))}
                  </ul>
                </TableCell>
              </TableRowMobile>
            ))}
          </TableBody>
        </Table>

      </Layout>
    )
  }
}

export default Skills
