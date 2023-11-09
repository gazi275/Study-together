import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const details=useLoaderData()
    console.log(details);
    return (
        <div>
          
<div className="min-h-screen bg-gray-100 flex flex-col justify-center  " style={{ backgroundImage: 'url("https://i.ibb.co/HhLBwyh/images-3.jpg")' }} >
  <div className="relative m-3 flex flex-wrap mx-auto justify-center  " >
                        <div className="min-w-[500px]flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <img src={details.image}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>

                                <div
                                    className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>

                            </div>
                            <p 
                                className=" block text-black text-center font-bold hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                               {details.title}</p>
<div className="flex justify-around items-center"><p className="mb-1  font-semibold block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl ">Number :{details.marks}</p>
                            <p className="mb-1  font-semibold  block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl ">Due DAte :{details.date}</p>
</div>
<p  className=" block text-black text-center font-semibold hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-2 ">
                             Created Assignment :  {details.email}</p>

                             <p 
                                className=" block text-black text-center font-normal  hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-2">
                               {details.description}</p>

                            
                            <div className="flex justify-center gap-x-3">
                                <Link to="/submission">
                                <button
                                    className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
                                    Take Assignment</button></Link>
                                
                            </div>

                        </div>
  </div>
    </div>
        </div>
    );
};

export default Details;