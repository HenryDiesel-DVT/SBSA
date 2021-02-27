import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Note extends Component{

  componentWillReceiveProps(nextProps) {

  const newProps = nextProps
  this.textInput.value = newProps.note.title
  this.textAreaInput.value = newProps.note.content
}

save = (note) => {
  note.title = this.textInput.value
  note.content = this.textAreaInput.value
  this.props.savenote(note)
}


  render(){

    const { note } = this.props

    return(
      <div className='note-wrapper-single'>
      <input defaultValue={ note.title } type='text' placeholder='Untitled' ref={(input) => { this.textInput = input }} onChange={(event)=>this.save(note) }/>
      <textarea defaultValue={ note.content } ref={(input) => { this.textAreaInput = input}} onChange={()=>this.save(note) }/>
      <Button variant="contained" color="primary" style={{    float: 'right', margin: '5px'}} onClick={this.props.updateApi} > UPDATE NOTE </Button>
      </div>
    )
  }
}

export default Note
