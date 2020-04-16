import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';

class PageEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }



  render() {
    return (
      <div className="editorContainer">
        <button onClick={this.onUnderlineClick}>Underline</button>
        <button onClick={this.onBoldClick}><b>Bold</b></button>
        <div className="buttoneditors">
        <Editor 
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange= { this.onChange }
          />
          </div>
      </div>
    )
  }
}

export default PageEditor
