import './App.css';
import axios from 'axios';
import React, { Component } from 'react'

const api = axios.create({
  baseURL:""
})

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
