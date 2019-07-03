import React, { Component } from "react";

const NewsItem = (props) => {

    
        return (
        <a href = {props.url}>
            <li>
                {props.title}
            </li>
        </a>
        
        )

}


export default NewsItem;