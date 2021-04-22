import {Component} from 'react'
import Link from 'next/head'
import Header from '../components/ui/header'
import Layout from '../components/layout'
export default class App 
extends Component {
  constructor(){
    super()
    this.state= {
      name: 'joe'
    }
  }
  render(){
      return(
        <Layout>
          <div className="container">
          <Header />
          </div>
          
        </Layout>
      )
  }
}