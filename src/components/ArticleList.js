import React from "react";
import Article from "./Article";

const ArticleList = ( {posts} ) => {
    console.log(posts)
    const blogMapped = posts.map(postObj => <Article {...postObj} key={postObj.id}/> )
    
    return (
        <main>{blogMapped}</main>
    )
}

export default ArticleList