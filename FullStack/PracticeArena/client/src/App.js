import './App.css';
import axios from 'axios';
import React, { Component } from 'react'

const api = axios.create({
  baseURL: `https://opentdb.com/api.php?amount=10`
})

export default class App extends Component {

  constructor(){
    super();
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
