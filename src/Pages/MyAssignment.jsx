import { useLoaderData } from "react-router-dom";
import Single from "./single";


const MysubmitAssignment = () => {

const submitAssignment=useLoaderData();
console.log(submitAssignment);






    return (
        <div>
          <div>
          <div className="grid grid-cols-1  gap-2    md:grid-cols-3 lg:grid-cols-4" style={{ backgroundImage: 'url("https://i.ibb.co/vhtY2fV/images-2.jpg")' }}>
            {
   submitAssignment?.map(single=> <Single key={single.id} single={single}></Single>)
}
            </div> 
            </div>  

        </div>
    );
};

export default MysubmitAssignment;