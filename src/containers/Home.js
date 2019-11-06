import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import axios from 'axios'



class Home extends Component {

  constructor(props){
      super(props)
      this.state = {products : ""}

  }

  componentDidMount(){

    axios.get("http://localhost:9000/products").then( res =>{

          // console.log(res.data)
          {this.setState({ products : res.data})}

    })

    

  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer company="hp" email="night@hp.com" />
      </div>
    )
  }
}

export default Home

