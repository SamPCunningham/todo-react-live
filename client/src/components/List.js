import React, {Component} from 'react';
import ListItem from './ListItem'




export default class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:["learn","to code","React"],
      value: ''
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: '',
      items: [...this.state.items, this.state.value]
    })
  }

  handleCheck(itemtext) {
    let originalItems = this.state.items
    let newItems = originalItems.filter((item) =>{
      return item !== itemtext
    })
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <ul>
          {this.state.items.map((task,index) => (
          <ListItem itemtext={task} index={index} handleCheck={this.handleCheck} />
          ))}
        </ul>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

