import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import { connect } from 'react-redux'
import { productsFetch } from '../actions/methodAction'



class Home extends Component {

  constructor(props){
      super(props)

  }

  componentDidMount(){

      this.props.productsFetch()

  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="hp" email="night@hp.com" />
      </div>
    )
  }
}

const mapStateToProps = ( { products }) =>{

     return { products }

}


export default connect(mapStateToProps,{productsFetch})(Home)

