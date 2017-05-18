import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Previewer from './components/Previewer'
import Header from './components/Header'

const initialText = `# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------`

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: initialText
    }

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (event) {
    const text = event.currentTarget.value
    this.setState(() => {
      return {
        text: text
      }
    })
  }
  render() {
    return (
      <div className='main-container'>
        <Header />
        <div className='input-preview-container'>
          <Input
            onChange={this.handleTextChange}
            value={this.state.text} />
          <Previewer
            text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
