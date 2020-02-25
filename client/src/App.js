import React from 'react';
import axios from 'axios';
import Players from './components/Players.js'
import { Grid } from 'semantic-ui-react'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      player: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({ player: res.data })
      // console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    return(
      <div>
        <Grid celled>
          <Players player={this.state.player}/>
        </Grid>
      </div>
    )
  }
}

export default App;