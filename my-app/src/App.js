import React from "react";
import {LanguageContext} from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";
import Title from "./Title";

export default class App extends React.Component {
  state = {
    language: 'eng'
  }

  handleLanguage = (event) => {
    this.setState((state) => {
      return { language: (state.language = event.target.value) }
    })
  }
  render() {
    return (
      <div className="App">
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value="eng">ENGLISH</option>
          <option value="it">ITALIAN</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage>
              <Title />
          </DisplayLanguage>
        </LanguageContext.Provider>
        
      </div>
    );
  }
}
