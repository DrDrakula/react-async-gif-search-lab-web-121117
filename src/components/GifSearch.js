import React from 'react';
import GifList from './GifList'

export default class GifSearch extends React.Component{
  state = {
    inputVal: ''
  }

  handleInput = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.func(this.state.inputVal)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Input search term:</label>
          <input type='text' onChange={this.handleInput} />
          <input type='submit' />
        </form>
        <br/>
        <GifList giphs={this.props.giphs}/>
      </div>
    )
  }
}
