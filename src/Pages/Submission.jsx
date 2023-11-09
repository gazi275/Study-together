import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const Submission = () => {
    const id = useParams()
    const [assignmentData, setAssignmentData] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:5001/assignment/${id.id}`).then(res => {
            console.log(res.data);
            setAssignmentData(res.data)
        })
    }, [])


    console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.file.value;
        const email = e.target.email.value;
        console.log(file, email);

        const submitData = {
            submiterEmail: email,
            submitFile: file,
            assignmentID: id.id,
            title: assignmentData?.title || '',
            email: assignmentData?.email || '',
            level: assignmentData?.level || '',
            marks: assignmentData?.marks || '',
            image: assignmentData?.image || '',
            date: assignmentData?.date || '',
            description: assignmentData?.description || ''
        }

        axios.post("http://localhost:5001/submit",submitData).then(res=>{
            console.log(res);
            toast.success('succesfully submited');
        })

        
        // fetch("http://localhost:5001/submit", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(submit),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             toast.success('this is selected for myCart');
        //         }
        //     });
    }






    return (
        <div>


            <div className=" min-h-screen flex  justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/tBvVpMm/images-1.jpg")' }}>
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-5 text-3xl font-bold text-gray-900">
                            File Upload!
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-3" action="#" method="POST">
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Email</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="email" name="email" placeholder="mail@gmail.com" required="" />
                        </div>
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className=" text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img className="has-mask h-36 object-center" src="htztps://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                        </div>

                                        <div className="w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">submit your Google Drive Link</label>
                                            <input type="text" name="file" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="your google drive link" required="" />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                            <textarea id="description" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                        </div>


                                    </div>


                                </label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300">
                            <span>File type: pdf</span>
                        </p>
                        <div>
                            <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <style>
	{.has-mask {
		position: absolute;
		clip: rect(10px, 150px, 130px, 10px);
	}}
</style>  */}
        </div>
    );
};

export default Submission;