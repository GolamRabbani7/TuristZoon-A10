import { Link, useLoaderData, } from "react-router-dom";


const Viewdetails = () => {
    const addTurist = useLoaderData()
    const { _id, photo, UserName,desctiopion,location, Useremail, soprtName, averagecost, totaVisitorsPerYear, travelTime, seasonality } = addTurist

    console.log(addTurist)
    return (
        <div>
            <div className=" border-2 mt-5 border-blue-600 max-w-6xl   mx-auto   shadow-xl  p-6 overflow-hidden rounded-lg  dark:bg-gray-50 dark:text-gray-800">

                <div className="  ">
                    <img src={photo} alt="" className="object-cover rounded-md w-full h-[485px]  mb-4 dark:bg-gray-500" />


                        <h2 className="mb-1 ml-1 text-2xl text-black font-bold"> {soprtName}</h2>
                    <div className="text-gray-500 font-semibold ml-3">
                        <div className="font-medium">
                            <p>Name: {UserName}</p>
                            <p>Email: {Useremail}</p>
                        </div>
                        <p>Average Cost: {averagecost} TK</p>
                        <p>Per Year Visitor: {totaVisitorsPerYear}</p>
                        <p>Travel Times: {travelTime} 90 days</p>
                        <p>Seasonality: {seasonality}</p>
                        <p>Location: {location}</p>
                        <p>Description: <span className="font-normal">{desctiopion}</span></p>
                        <div>
                   
                </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Viewdetails;