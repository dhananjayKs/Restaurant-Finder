import React from 'react'
import './SearchBar.css'


export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sort:"best_match",
            term:"",
            place:""
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
          };
        
        this.handleTermChange=this.handleTermChange.bind(this)
        this.handleLocationChange=this.handleLocationChange.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
    }
    getSortByClass(sortByOption){
        if (sortByOption){
            return 'active'
        }else{
            return ""
        }
    }
   handleSortByChange(sortByOption){
        console.log(sortByOption)
        this.setState({
            sort:sortByOption
        })
        
    }
    handleTermChange(e){
        this.setState({
            term:e.target.value
        })
        
    }
    handleLocationChange(e){
        this.setState({
            place:e.target.value
        })
        
    }
    renderSortByOptions(){
        let list=[]
        for(let i in this.sortByOptions){
            list.push(i)
        }
        return list.map(ele=>{
            let sortByOptionValue = this.sortByOptions[ele];
            return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={sortByOptionValue} key={sortByOptionValue}>{ele}</li>
        })
    }
    handleSearch(e){
        this.props.searchYelp(this.state.sort,this.state.term,this.state.place)
        e.preventDefault()
    }
    render(){
        
        return (<div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input value={this.state.term} onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input value={this.state.place} onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} href>Let's Go</a>
        </div>
      </div>)
    }
}