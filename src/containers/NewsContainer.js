import React, { Component } from "react";
import NewsList from '../components/newsList'

class NewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            newsItems: []
        }
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


    render(){
        return(
            <NewsList
            newsItems= {this.state.newsItems}
            />
        )

    };
}

export default NewsContainer;