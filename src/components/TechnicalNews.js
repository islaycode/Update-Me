import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loader from './Loader';
import { fetchTechnicalData } from './actions/actions'

export class TechnicalNews extends Component {
   
    componentDidMount(){
        this.props.fetchTechnicalData()
    }
    renderNews(){
        return this.props.reducer.technicalData.map(post =>{
            return (
                <div className="ui segment" key={post.title}>
                    
                    <img className="ui centered medium image" src={post.urlToImage} alt="Not availabale"/>
                        <h3 className="ui brown header centered">{post.title}</h3>
                        <div className="ui divider"></div>
                        <div className="ui red ribbon label"><i className="ui newspaper icon"/>Breaking News:</div>
                        <br/>
                        <span><h4><a className="ui blue mini empty circular label"/> {post.description}</h4></span>
                        <div className="ui divideder"></div>
                        <br/>
                        <a href={post.url} target="_blank" className="ui fluid inverted violet button">Read Full Story</a>
                </div>
            )
        })
    }
    render() {
        //console.log(this.props.reducer)
        return (
            <div className="ui container">
            <br/>
            <h3 className="ui centered red header"><span><i className="ui newspaper outline icon"/></span>TOP HEADLINES OF TODAY!</h3>
            <hr/>
           {this.props.reducer.loading ? this.renderNews() : <Loader/>}
             
        </div>
        )
    }
}
const mapStateToProps =state=>{
    return { reducer: state }
}
export default connect(mapStateToProps,{fetchTechnicalData})(TechnicalNews)
