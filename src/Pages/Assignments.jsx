

const Assignments = () => {
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-11">
  <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    <img src="https://i.ibb.co/48dS2Dd/2c0832e9-d89f-441c-9613-2b7e1acecf17-adobestock-100210543.jpg" alt="" className="h-96" />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Tailwind card
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
        </div>
    );
};

export default Assignments;