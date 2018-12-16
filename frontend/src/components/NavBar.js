import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar' 
import {Tabs, Tab } from '@material-ui/core'


export default class NavBar extends Component {
    state = {
        value: 0,
    }   
    
    handleChange =(evt, value)=>{
        console.log(evt.currentTarget)
        const {dataset:{store, sale}} = evt.currentTarget
        this.setState({value})
        this.props.onChange({store, sale})
    }


  render() {
      const {value} = this.state

    return (
      <AppBar position='static' style={{marginBottom:20}}>
          <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label = 'CU 1+1' data-store='CU' data-sale='OPO'/>
              <Tab label = 'CU 2+1' data-store='CU' data-sale='TPO'/>
              <Tab label = 'CU 기타' data-store='CU' data-sale='OTR'/>
              <Tab label = 'GS 1+1' data-store='GS' data-sale='OPO'/>
              <Tab label = 'GS 2+1' data-store='GS' data-sale='TPO'/>
              <Tab label = 'GS 기타' data-store='GS' data-sale='OTR'/>
              <Tab label = 'Seven 1+1' data-store='SV' data-sale='OPO'/>
              <Tab label = 'Seven 2+1' data-store='SV' data-sale='TPO'/>
              <Tab label = 'Seven 기타' data-store='SV' data-sale='OTR'/>
          </Tabs>
      </AppBar>
    )
  }
}
