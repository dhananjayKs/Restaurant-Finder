import React from 'react';
import './App.css';
import {BusinessList} from './../BusinessList/BusinessList'
import {SearchBar} from './../SearchBar/SearchBar'
import Yelp from './../../util/Yelp'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      url:'https://api.yelp.com/v3/businesses/search',
      queryType:'',
      term:"?term=",
      where:"&location=",
      businesses:[]
    }
    this.searchYelp=this.searchYelp.bind(this)
  }
  
  async searchYelp(type,term,place){
    Yelp.search(type,term,place).then(business=>{
      this.setState({
        businesses:business
      })
      console.log(business)
    })

  }
  render(){
    return(<div className="App">
    <h1>Restaurant Finder</h1>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses}/>
  </div>)
  }
}
export default App;
