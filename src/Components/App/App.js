import React from 'react';
import './App.css';
import Converter from '../../util/Converter';
import InputBar from '../InputBar/InputBar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: ""
    }
    this.arabicToRoman = this.arabicToRoman.bind(this);
    this.romanToArabic = this.romanToArabic.bind(this);
  }

  arabicToRoman(s){
    let val = Converter.arabicToRoman(s);
    this.setState({display: val});
  };

  romanToArabic(s){
    let val = Converter.romanToArabic(s);
    this.setState({display: val});
  };

  render(){
    return(
      <div className="App">
        <h1>ROMAN TO ARABIC NUMERALS CONVERSION</h1>
        <InputBar arabicToRoman={this.arabicToRoman} romanToArabic={this.romanToArabic} />
        <h2>{this.state.display}</h2>
      </div>
    )
  }
}

export default App;
