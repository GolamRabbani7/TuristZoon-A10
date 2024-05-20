

const Banner = () => {
    return (
        <div>
            <div className="relative ">
            <div className="carousel  mt-16 rounded-lg w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/2t5BM71/amjad-rana-Mr-KPi-yaj-C0-unsplash.jpg" className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full h-96" />
                </div>
                
            </div>
            <div className="flex absolute bottom-0 justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
        </div>
        </div>
    );
};

export default Banner;