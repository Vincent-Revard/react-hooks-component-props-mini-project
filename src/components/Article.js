import React from "react";

// const Article = ( { title, date='January 1, 1970', preview } ) => {
const Article = ( postObj ) => {
    
    const { title, date='January 1, 1970', preview } = postObj

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article> 
    )
}

export default Article