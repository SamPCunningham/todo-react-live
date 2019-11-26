import React from 'react'

function ListItem(props) {
  return(
    <li><input onClick={() =>props.handleCheck(props.itemtext)} type="checkbox" />{props.itemtext}</li>
    )
}

export default ListItem