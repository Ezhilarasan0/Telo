import React from "react";
import Images from "./Images";

const Content = () => {
    return (
        <main className="pictures">
             <div className="lineOne">
                <div className="books">
                    <img 
                        src={Images.imgOne} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Books</p>
                </div>

                <div className="news">
                    <img 
                        src={Images.imgTwo} 
                        alt="" 
                        width="350" 
                        height="200"
                    />
                    <p>News</p>
                </div>
            </div>
            <div className="lineTwo">
                <div className="education">
                    <img 
                        src={Images.imgThree} 
                        alt=""
                        width="350" 
                        height="200" />
                    <p>Education</p>
                </div>

                <div className="technology">
                    <img 
                        src={Images.imgFour} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Technology</p>
                </div>
            </div>
            <div className="lineThree">
                <div className="music">
                    <img 
                        src={Images.imgFive} 
                        alt=""
                        width="350" 
                        height="200" />
                    <p>Music</p>
                </div>

                <div className="technology">
                    <img 
                        src={Images.imgSix} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Technology</p>
                </div>
            </div>
            <div className="lineFour">
                <div className="business">
                    <img 
                        src={Images.imgSeven} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Business</p>
                </div>

                <div className="food">
                    <img 
                        src={Images.imgEight} 
                        alt=""
                        width="350" 
                        height="200" />
                    <p>Food</p>
                </div>
            </div>
            <div className="lineFive">
                <div className="art">
                    <img 
                        src={Images.imgNine} 
                        alt=""
                        width="350" 
                        height="200" />
                    <p>Art & Photos</p>
                </div>
                
                <div className="crypto">
                    <img 
                        src={Images.imgTen} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Cryptocurrencies</p>
                </div>
            </div>
            <div className="lineSix">
                <div className="sales">
                    <img 
                        src={Images.imgEleven} 
                        alt=""
                        width="350" 
                        height="200" />
                    <p>Sales</p>
                </div>

                <div className="other">
                    <img 
                        src={Images.imgTwelve} 
                        alt="" 
                        width="350" 
                        height="200"/>
                    <p>Other</p>
                </div>
            </div>

        </main>
    )
}

export default Content;