import { Link, useLoaderData } from "react-router-dom";




const TouristsSpots = () => {

const touristSports=useLoaderData()
console.log(touristSports)
    return (
        <div>
            <h1 className="font-semibold">  Tourists Spot :</h1>

{/* 
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">

                {
                    touristSports.map(tourist => <div key={tourist._id}>


                        <div className="flex border-2 border-blue-600   transition duration-500 hover:scale-105 transform-gpu flex-col shadow-xl max-w-lg p-6 space-y-6 overflow-hidden rounded-lg  dark:bg-gray-50 dark:text-gray-800">
                           
                            <div className="">
                                <img src={tourist.photo} alt="" className="object-cover h-44 rounded-md w-full bg-cover  mb-4 dark:bg-gray-500" />
                                <h2 className="mb-1 ml-1 text-xl font-semibold"> {tourist.soprtName}</h2>
                                <div className="text-gray-500 ml-3">
                                <p>Average Cost: {tourist.averagecost} TK</p>
                                <p>Per Year Visitor: {tourist. totaVisitorsPerYear}</p>
                                <p>Travel Times: {tourist.travelTime} 90 days</p>
                                <p>Seasonality: {tourist.seasonality}</p>
                                </div>
                            </div>
                            <div>
                               <Link to={`/viewdetails/${tourist._id}`}> <button className="btn bg-blue-700 btn-primary">View Details</button></Link>
                            </div>
                        </div>


                    </div>)
                }

            </div> */}

        </div>
    );
};

export default TouristsSpots;