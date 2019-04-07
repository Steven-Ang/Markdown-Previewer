import React, { Component } from "react";
import showdown from "showdown";

const placeholder =
  "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*";

export default class App extends Component {
  state = {
    editorText: placeholder
  };

  convertHtml = text => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);
    return html;
  };

  updateText = text => {
    this.setState({
      editorText: text
    });
  }

  render() {
    const { editorText } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <textarea id="editor" value={editorText} onChange={e => this.updateText(e.target.value)}>{editorText}</textarea>
          </div>
          <div id="preview" className="col-md-6">
            <div id="preview" dangerouslySetInnerHTML={{__html: this.convertHtml(editorText)}}></div>
          </div>
        </div>
      </div>
    );
  }
}
