import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar' 
import {Tabs, Tab } from '@material-ui/core'
import axios from 'axios'

//const API_URL = 'http://localhost:8000/api'
const API_URL = 'http://Redix8.pythonanywhere.com/api'

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

    getProducts=(evt)=>{
        const {dataset: {store, sale}} = evt.currentTarget;
        const url = `${API_URL}/${store}/${sale}`
        axios.get(url).then(response=> {
            this.props.onChange(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
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
