import React, { Component } from "react";
import NewsItem from './newsItem';


const NewsList = (props) => {


    // const goingThroughTheTitle = (searchWord, title, index) => {
    //     const lowercaseTitle = title.title.toLowerCase()
    //     const lowercaseSearchWord = searchWord.toLowerCase()
    //     const wordsInSentence = lowercaseTitle.split(' ')
    //     wordsInSentence.forEach(banana => {
    //         if(lowercaseSearchWord === banana){
    //             return <NewsItem
    //             key = {index}
    //             title = {title.title}
    //             url = {title.url}
    //             />
    //         }
    //     })
    //     return
    // };



    const options = props.newsItems.map((newsItem, index) => {


        const lowercaseTitle = newsItem.title.toLowerCase()
        const lowercaseSearchWord = props.searchWord.toLowerCase()
        const wordsInSentence = lowercaseTitle.split(' ')

        console.log(wordsInSentence);
        if (props.searchWord === ''){
            return <NewsItem
            key = {index}
            title = {newsItem.title}
            url = {newsItem.url}
            />
        }

        if(props.searchWord !== ''){
            for(let i=0; i< wordsInSentence.length; i++){
                // console.log(banana);
                if(lowercaseSearchWord === wordsInSentence[i]){
                    return <NewsItem
                    key = {index}
                    title = {newsItem.title}
                    url = {newsItem.url}
                    />
                }
                }

        }
    })

    return(<ol>{options}</ol>)
}


export default NewsList;
