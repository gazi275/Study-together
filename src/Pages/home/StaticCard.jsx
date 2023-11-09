

const StaticCard = () => {
    return (
        <div>
           <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg h-[400px]"
        src="https://i.ibb.co/h7Y5Tc5/240-F-186305220-qztqlolv3-QVM5-RNq-Mbv-YPd4r-EH4-G5-OAl.jpg"
        alt="Skyscrapers" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
    <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg h-[400px]"
        src="https://i.ibb.co/yhm17K2/wrtiting-tools.jpg"
        alt="Los Angeles Skyscrapers" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This card has supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>
    <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg h-[400px]"
        src="https://i.ibb.co/5vNcchy/glasses-1052010-640.jpg"
        alt="Palm Springs Road" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first to show that equal height action.
      </p>
    </div>
    <div
      className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
</div> 
        </div>
    );
};

export default StaticCard;