import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ShowProduct from './components/ShowProduct';
import { Grid, CircularProgress } from '@material-ui/core';
import axios from 'axios'

//const API_URL = 'http://localhost:8000/api'
const API_URL = 'http://Redix8.pythonanywhere.com/api'

class App extends Component {
  state={
    store:'CU',
    sale:'OPO',
    products:[],
    loading: true
  }

  componentDidMount=()=>{
    const {store, sale} = this.state
    this.getProducts(store, sale)    
  }
  
  getProducts=(store, sale)=>{
    const url = `${API_URL}/${store}/${sale}`
    axios.get(url).then(response=> {
      this.setState({
        products: response.data,
        store: store,
        sale: sale,
        loading: false
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange = (data) => {
    const {store, sale} = data
    this.setState({loading: true})   
    this.getProducts(store, sale)
  }

  render() {
    return (
      <div className="App">
        <NavBar onChange={this.handleChange}>
        </NavBar>
        {this.state.loading 
        ? (<Grid container justify='center' alignItems='center' style={{height:'100%'}}>
             <Grid item>
               <CircularProgress size={document.documentElement.clientWidth/20}/>
             </Grid>            
          </Grid>) 
        : (<Grid container spacing={8} style={{padding:20}}>
            {this.state.products.map((p,idx)=>(
              <ShowProduct key={idx} name={p.product_name} price={p.price} url={p.img_url} />
            ))}            
          </Grid>
        )}       
        
      </div>
    );
  }
}

export default App;
