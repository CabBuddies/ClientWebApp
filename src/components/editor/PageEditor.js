import React from 'react';
import '../../App.css';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil, convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

function keyBindingFunction(event) {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  return getDefaultKeyBinding(event);
}

class PageEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
    /*this.state = {
      editorState: EditorState.createEmpty()
    };*/

    const content = window.localStorage.getItem('content');

  if (content) {
    this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } else {
    this.state.editorState = EditorState.createEmpty();
  }

    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
  }

  saveContent = (content) => {
  window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
}

  onChange (editorState) {
   const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log('content state', convertToRaw(contentState));
    console.log('content state - without raw', contentState);
    this.saveContent(contentState);
    //this.setState({rawContentState});
    this.setState({editorState});

    const richToHtml = draftToHtml(
        rawContentState, 
        {
          trigger: '#',
          separator: ' ',
        }, 
        true 
        //,customEntityTransform
    );
    this.setState({richToHtml});
  }

  handleKeyCommand(command) {
    // inline formatting key commands handles bold, italic, code, underline
    var editorState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (!editorState && command === 'strikethrough') {
      editorState = RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH');
    }

    if (editorState) {
      this.setState({editorState});
      return 'handled';
    }

    return 'not-handled';
  }

  toggleInlineStyle (event) {
    event.preventDefault();

    let style = event.currentTarget.getAttribute('data-style');
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
    });
  }

  toggleBlockType (event) {
    event.preventDefault();

    let block = event.currentTarget.getAttribute('data-block');
    this.setState({
      editorState: RichUtils.toggleBlockType(this.state.editorState, block)
    });
  }

  renderBlockButton(value, block) {
    return (
      <input
        type="button"
        key={block}
        value={value}
        data-block={block}
        onMouseDown={this.toggleBlockType}
      />
    );
  }

  renderInlineStyleButton(value, style) {
    return (
      <input
        type="button"
        key={style}
        value={value}
        data-style={style}
        onMouseDown={this.toggleInlineStyle}
      />
    );
  }

  render() {
    const inlineStyleButtons = [
      {
        value: 'Bold',
        style: 'BOLD'
      },

      {
        value: 'Italic',
        style: 'ITALIC'
      },

      {
        value: 'Underline',
        style: 'UNDERLINE'
      },

      {
        value: 'Strikethrough',
        style: 'STRIKETHROUGH'
      },

      {
        value: 'Code',
        style: 'CODE'
      }
    ];

    const blockTypeButtons = [
      {
        value: 'Heading One',
        block: 'header-one'
      },

      {
        value: 'Heading Two',
        block: 'header-two'
      },

      {
        value: 'Heading Three',
        block: 'header-three'
      },

      {
        value: 'Blockquote',
        block: 'blockquote'
      },

      {
        value: 'Unordered List',
        block: 'unordered-list-item'
      },

      {
        value: 'Ordered List',
        block: 'ordered-list-item'
      }
    ];

    return (
      <div className="my-little-app">
        <div className="inline-style-options">
          {inlineStyleButtons.map((button) => {
            return this.renderInlineStyleButton(button.value, button.style);
          })}
        </div>

        <div className="block-style-options">
          {blockTypeButtons.map((button) => {
            return this.renderBlockButton(button.value, button.block);
          })}
        </div>
        <div className="draft-editor-wrapper">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={keyBindingFunction}
          />
        </div>
        <hr/>
        <div className="html-rendering" dangerouslySetInnerHTML={{ __html: this.state.richToHtml }}>
        </div>
      </div>
    );
  }
}

export default PageEditor;