

const Single = ({single}) => {
    return (
        <div className="flex mt-5 mx-auto">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
    <a href="#">
        <img className="rounded-t-lg w-full h-[250px]" src={single.image} alt="" />
    </a>
    <div className="p-5">
        <p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{single.title}</h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{single.description}</p>
        
    </div>









  <div className="p-6  pt-0 flex gap-2">
    
  <div className="w-full">
                  <label for="marks" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Marks</label>
                  <input type="number" min={0} max={100} name="marks" id="marks" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="99" required=""/>
              </div>
   
    <p data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    Date : {single.date}
    </p>
    
    
    

  </div>

</div>
        </div>
    );
};

export default Single;