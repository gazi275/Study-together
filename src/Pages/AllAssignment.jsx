import { Link } from "react-router-dom";


const AllAssignment = ({assignment}) => {
    console.log(assignment);
    return (
        <div className="flex mx-auto items-center my-10" >


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
    <a href="#">
        <img className="rounded-t-lg w-full h-[250px]" src={assignment.image} alt="" />
    </a>
    <div className="p-5">
        <p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{assignment.title}</h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{assignment.description}</p>
        
    </div>









  <div className="p-6  pt-0 flex gap-2">
    <Link to={`/details/${assignment._id}`}>
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      View Assignment
    </button></Link>
    <Link to={`/update/${assignment._id}`}>
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      update Assignment
    </button>
    </Link>

    

  </div>
</div>
</div>    
    );
};

export default AllAssignment;