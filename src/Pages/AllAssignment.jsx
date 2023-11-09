import { Link } from "react-router-dom";


const AllAssignment = ({assignment}) => {
    console.log(assignment);

    const deleted=()=>{

      fetch(`http://localhost:5001/assignment/${assignment._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
  
  
  
  
  
  
  }



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
    <button onClick={deleted} class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>

	Delete
  </button>
    

  </div>

</div>
</div>    
    );
};

export default AllAssignment;