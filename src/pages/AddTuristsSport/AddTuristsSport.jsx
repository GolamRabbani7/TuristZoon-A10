
import { useForm } from "react-hook-form";


const AddTuristsSport = () => {

  const { register, handleSubmit, } = useForm()
  const onSubmit = (addTurist) => {
    console.log(addTurist)
    fetch('http://localhost:5000/addTurist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addTurist)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }

  return (
    <div>
      <section className="p-6  border-2 border-blue-700 bg-lime-200  ">
        <form onSubmit={handleSubmit(onSubmit)} className="container  flex flex-col mx-auto ">
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-lime-600">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Complite the input fields and post turist sport</p>
              <p className="text-xs"></p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User Name</label>
                <input {...register("UserName")} type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User Email</label>
                <input {...register("Useremail")} type="email" placeholder="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Sport Name</label>
                <input {...register("soprtName")} type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Country name</label>
                <input {...register("country")} type="text" placeholder="Country" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Photo URL</label>
                <input {...register("photo")} placeholder="photo" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">location</label>
                <input {...register("location")} type="text" placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Desctiopion</label>
                <input {...register("desctiopion")} type="text" placeholder="desctiopion" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tota Visitors Per Year</label>
                <input {...register("totaVisitorsPerYear")} type="text" placeholder="like- 10000" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm"> Average cost</label>
                <input {...register("averagecost")} type="text" placeholder="TK" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm"> Seasonality</label>
                <input {...register(" seasonality")} type="text" placeholder=" like summer, winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm"> Travel time</label>
                <input {...register(" travelTime")} type="text" placeholder=" like- 7 days" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
            </div>
          </div>
          <button className="btn   btn-primary">Add</button>

        </form>
      </section>
    </div>
  );
};

export default AddTuristsSport;