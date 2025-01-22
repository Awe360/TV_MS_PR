'use client';

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadSelector() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const[load,setLoad]=useState(false);
  const[isLoad,setIsLoad]=useState(false);

  const handleSelection = (choice) => {
    setSelectedOption(choice);
    if (choice === "upload") {
      router.push("/tvupload/uploadChoice/upload-from-computer");
    } else if (choice === "create") {
      router.push("/tvupload/uploadChoice/create-new-content");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 md:p-10 lg:p-12 w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] space-y-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">
          What would you like to do?
        </h1>
        <p className="text-base md:text-lg text-gray-600 text-center">
          Choose an option below to either upload your content or create something new!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={() => {handleSelection("upload"),setLoad((prev)=>!prev)}}
            className={`w-full md:w-1/2 py-4 text-lg md:text-xl font-semibold rounded-lg shadow-md transition-all duration-300 ${
              selectedOption === "upload"
                ? "bg-blue-600 text-white scale-105"
                : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
            }`}
          >
           { load? <Loader className='w-6 h-6 animate-spin  mx-auto' /> :"Upload from Computer"}
          </button>
          <button
            onClick={() => {handleSelection("create"),setIsLoad((prev)=>!prev)}}
            className={`w-full md:w-1/2 py-4 text-lg md:text-xl font-semibold rounded-lg shadow-md transition-all duration-300 ${
              selectedOption === "create"
                ? "bg-green-600 text-white scale-105"
                : "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
            }`}
          >
            { isLoad? <Loader className='w-6 h-6 animate-spin  mx-auto' /> :"Create New Content"}
          </button>
        </div>
      </div>
    </div>
  );
}
