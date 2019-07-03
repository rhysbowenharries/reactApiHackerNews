import React, { Component, Fragment } from "react";
import NewsList from '../components/newsList'
import NewsSearchForm from '../components/newsSearchForm'

class NewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            newsItems: [],
            newWord:''

        }

        this.handleSearchWord = this.handleSearchWord.bind(this)
    }

    componentDidMount(){

        let newsArray = []
        const urlNewsId = "https://hacker-news.firebaseio.com/v0/topstories.json"

        fetch(urlNewsId)
        .then(res => res.json())
        .then(newsIds => newsIds.slice(0,5))
        .then(newsIdsArray =>
            Promise.all(newsIdsArray.map(newsId => fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json `)))
            .then(responses => responses.forEach(res => {
                res.json()
                .then(newsItems => newsArray.push(newsItems))
                .then(newsItems => this.setState({newsItems: newsArray}))
            })

        ))

    }

    handleSearchWord(newWord){
        console.log(newWord);
        this.setState({newWord:newWord})
    }


    render(){
        return(
            <Fragment>
            <header><h1> hello is it news youre  gellar looking for </h1> </header>
            <NewsSearchForm search ={this.handleSearchWord}/>
            <NewsList
            newsItems= {this.state.newsItems} searchWord = {this.state.newWord}
            />
            </Fragment>
        )

    };
}

export default NewsContainer;
