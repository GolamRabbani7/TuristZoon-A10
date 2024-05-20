import { useLoaderData,  } from "react-router-dom";


const viewdetails = () => {
    const addTurist=useLoaderData()

    console.log(addTurist)
    return (
        <div>
        viewdetails    

        </div>
    );
};

export default viewdetails;