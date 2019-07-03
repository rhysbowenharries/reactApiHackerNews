import React, { Component } from "react";

class NewsSearchForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchWord: ''
        }

        this.handleTyping = this.handleTyping.bind(this)
        this.handleSearchWordForm = this.handleSearchWordForm.bind(this)
    }

    handleTyping(event){
        this.setState({searchWord:event.target.value}, this.handleSearchWordForm)
        // this.handleSearchWordForm()
    }

    handleSearchWordForm(){
        console.log(this.state.searchWord);
        this.props.search(this.state.searchWord)
    }


    render(){
        return (
        <input type="text"  onChange = {this.handleTyping}  placeholder = "serach for Lionel Ritchie, is he on the ceiling?"></input>
        )
    }



}


export default NewsSearchForm;
