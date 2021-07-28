import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './common/data.json';
import ProductTemplate from './common/productDetails';

function ProductScreen(){
    
    var {_id} = useParams()
    var idn = parseInt(_id)
    
    return(
        <div>
            {Data.map(({id, name, img, price})=>{
                        
                        if(id === idn){

                            return(<ProductTemplate name={name} img={img} price={price} key={id}/>)

                        }})}
        </div>
    )
}

export default ProductScreen;

