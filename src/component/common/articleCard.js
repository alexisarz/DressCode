
import React from 'react';


function ArticleCard(props){
    return(
        
        <div className="bg-light rounded pb-0 article-container">
            <img className="rounded article-card-img" alt={props.name} src={props.img}></img>
            <h5 className="px-1 mt-2">{props.name}</h5>
            <p className="px-1">{props.price}</p>
        </div>
    )
}


export default ArticleCard;