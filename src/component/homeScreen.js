import React from 'react';
import MainCarousel from './common/carousel'
import summer from './img/summer-season-slider.jpg'
import beach from './img/beach-season-slider.jpg'
import Trending from './specific/trending';




function HomeScreen(){
    return(
        <div>
            <MainCarousel 
                img1={summer} 
                img2={beach}
            />
            <div className="d-flex w-75 m-auto gap-4 my-5">
                <div className="container">
                    <img 
                        className={(window.innerWidth > 414)? "w-100 d-block genre-select" : "w-100 h-75 d-block genre-select"}
                        src="https://i.pinimg.com/736x/dc/01/3d/dc013dc46c933fc1c4565a3db808ac86.jpg"
                        alt="Women Pic" 
                    />
                    <div className={(window.innerWidth > 414)? "overlay" : "d-none"}>
                        <div className="text">
                            <h4 className="border p-4">
                                show catalogue 
                            </h4>
                        </div>
                    </div>
                    <div className="text-center mb-1">
                        <p className="m-1">
                            for
                        </p>
                        <h4 className="border">
                            WOMEN
                        </h4>
                    </div>
                </div>
                <div className="container">
                    <img 
                        className={(window.innerWidth > 414)? "w-100 d-block genre-select" : "w-100 h-75 d-block genre-select"}
                        src="https://i.pinimg.com/originals/b8/58/9f/b8589f583e4f4174ecdd3bf171c21c1b.jpg"
                        alt="Men Pic" 
                    />
                    <div className={(window.innerWidth > 414)? "overlay" : "d-none"}>
                        <div className="text">
                            <h4 className="border p-4">
                                show catalogue 
                            </h4>
                        </div>
                    </div>
                    <div className=" text-center mb-1">
                        <p className=" m-1">
                            for
                        </p>
                        <h4 className="border">
                            MEN
                        </h4>
                    </div>
                </div>
            </div>
            <h3 className="border text-center w-75 m-auto subtitle">TRENDING</h3>
            <Trending/>

        </div>
    )
}

export default HomeScreen;