import React from 'react';
import './InputBar.css';


class InputBar extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            term: ''
        };
        this.handleTermChange = this.handleTermChange.bind(this); //bind methods to be able to use this
        this.handleArabicToRoman = this.handleArabicToRoman.bind(this);
        this.handleRomanToArabic = this.handleRomanToArabic.bind(this);
    }

    handleTermChange(event){ //term change handler
        let newTerm = event.target.value;
        this.setState({term: newTerm});
    }

    handleArabicToRoman(event){
        this.props.arabicToRoman(this.state.term);
        event.preventDefault();
    }

    handleRomanToArabic(event){
        this.props.romanToArabic(this.state.term);
        event.preventDefault();
    }

    render(){
        return(
            <div className = "Inputbar">
                <div className = "Inputbar-field">
                    <input placeholder="Put in roman numerals or arabic numerals" onChange={this.handleTermChange} />
                </div>
                <div className="Inputbar-Conversion">
                    <a onClick={this.handleArabicToRoman}>Arabic to Roman</a>
                    <div class="divider"/>
                    <a onClick={this.handleRomanToArabic}>Roman to Arabic</a>
                </div>
            </div>
        );
    }
}


export default InputBar;