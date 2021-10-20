import React, { Component } from 'react'
import Home from  './Home'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux' 
import NewQuestion from './NewQuestion'
import Container from 'react-bootstrap/Container'
import ShowQuestion from  './ShowQuestion'
import LeaderBoard from './LeaderBoard'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        {this.props.loading?null
        :<Container style={{width: "50%",}}>
            <UnansweredQuestion id = "8xf0y6ziyjabvozdd253nd"/>
          </Container>
        }
      </div>
    ) 
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser == null
  }
}

export default connect(mapStateToProps)(App)
