import {  useLoaderData } from "react-router-dom";
import AllAssignment from "./AllAssignment";


const Assignments = () => {

const assignments=useLoaderData();
console.log(assignments);




    return (
        <div>
            <div className="grid grid-cols-1 gap-5 mx-auto  md:grid-cols-3 lg:grid-cols-4" style={{ backgroundImage: 'url("https://i.ibb.co/vhtY2fV/images-2.jpg")' }}>
            {
   assignments?.map(assignment=> <AllAssignment key={assignment.id} assignment={assignment}></AllAssignment>)
}
            </div>
        </div>
    );
};

export default Assignments;