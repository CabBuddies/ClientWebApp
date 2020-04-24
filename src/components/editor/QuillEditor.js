import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import './css/quill-editor.css';

class QuillEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } 
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    console.log(value);
    
    this.setState({ text: value })
  }
 
 componentDidMount(){
    const script = document.createElement("script");

    script.src = "/quill-resize.js";
    script.async = false;

    document.body.appendChild(script);
 }

  render() {

    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]

    const modules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      }
    }

    return (
        <table border="1">
            <tbody>
                <tr>
                    <td>
                        <ReactQuill 
                            id="editor-container" 
                            value={this.state.text} 
                            theme="snow" 
                            formats={formats}
                            modules={modules}
                            onChange={this.handleChange} />
                    </td>
                    <td>
                        <div className="html-rendering" dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
                    </td>
                </tr>
            </tbody>
        </table>
      
    )
  }
}

export default QuillEditor;