import React, { Component } from 'react'
import Header from './Header'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import GeneralNews from './GeneralNews'
import TechnicalNews from './TechnicalNews'
import SportNews from './SportNews';
import { connect } from 'react-redux'

class App extends Component {
  
  render(){
    //let apikey = '859ff048ac6d4f71b92214e4fee2e854'
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props) =>(
        <GeneralNews {...props} />
      )} />
      <Route path="/technical" render={(props)=>(
        <TechnicalNews {...props} />
      )} />
      <Route path="/sports" render={(props)=>(
        <SportNews {...props} />
      )} />
      </Switch>
      </BrowserRouter>    
        
    </div>
  )
  }
}

export default connect()(App)
//API KEY
//