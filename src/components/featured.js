import React from 'react';
import '../css/featured.css'





export default function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/11474603.jpg?k=e080a498ad66fc1181c360046b494647f787ba4639d4ed4d073d4621a9b2d541&o=&hp=1"
                    alt=""
                    className="featuredImg"
                    
                />
                <div className="featuredTitles">
                    <h1>Protea Hotel</h1>
                    <h2>Marriott Polokwane Ranch Resort</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/71099714.jpg?k=8d6e644ae3a89692a1c882fca7c80a95ad383b6e03003fa9824930d7647115e2&o=&hp=1"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Town Lodge Polokwane</h1>
                    <h2>Meropa Entertainment</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/232846301.jpg?k=49a32144f22e4c173518eede5a3baca583f7d65e758bd042c905afec9f62bcad&o=&hp=1"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Park Inn</h1>
                    <h2>Radisson Polokwane</h2>
                </div>
            </div>
        </div>

    );
}
