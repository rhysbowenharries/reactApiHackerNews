import React, { Component } from "react";
import NewsItem from './newsItem';


const NewsList = (props) => {

    const options = props.newsItems.map((newsItem, index) => {
        return <NewsItem
        key = {index}
        title = {newsItem.title}
        url = {newsItem.url}
        />
    })

    return(<ol>{options}</ol>)
}


export default NewsList;