import React from 'react';
import ArticleCard from './articleCard';
import Data from './data.json';



function Catalogue(props){
    return(
                <div className="d-flex justify-content-center flex-wrap w-75 m-auto my-5 gap-3">
                    {Data.map(({id, name, img, genre, price, trending})=>{
                        
                        if(genre === props.genreprop && trending === props.trendingprop){

                            return( <a href={`/DressCode/product/${id}`}key={id}><ArticleCard name={name} img={img} price={price} /></a>)
                            
                        }
                    })}
                </div>
        
        
    )
}

export default Catalogue;