import React, {Component} from 'react';
import ListItem from './ListItem'




export default class List extends Component {
  contructor(props){
    super(props)
    this.state = {
      item:["learn","to code","React"]
    }
  }
  render() {
    return (
      <ul>
      this.state.item.map((task,index) => {
        <ListItem itemtext={task} index={index} />
      })
      </ul>
    )
  }
}




function MyInfo() {
  return (
    <div>
      <h1>Sam Cunningham</h1>
      <p>These are things I need to do.</p>
      <ul>
        <li>1. Learn</li>
        <li>2. To Code</li>
        <li>3. React</li>
      </ul>
    </div>
    )
  }
export default MyInfo