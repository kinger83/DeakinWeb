import React from "react";
import Article from "./Article";
import articleData from "./articleData";

const style = {
    display:"flex",
    justifyContent:"center",
}

const ArticleComponents = (article, i) => {
    return(
            <Article 
                key = {i}
            avatar = {article.avatar}
            name = {article.name}
            desc = {article.desc}
            stars = {article.stars}
            author = {article.author}
            />
            
            
    )
}


const ArticleList = () => {
    return(
        <div style={style}>
            
            <br/>
            {articleData.map(ArticleComponents)}
        </div>
    )
}

export default ArticleList;