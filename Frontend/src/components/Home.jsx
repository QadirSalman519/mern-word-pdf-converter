import { useState } from "react";
import { FaFile } from "react-icons/fa";

export default function Home() {
    
    const [selectedFile,setSelectedFile] = useState(null)

    const handleFileChange = (e)=>{
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40">
            <div className="flex h-screen items-center justify-center">
                <div className="border-2 border-dashed px-2 py-4 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-4">Convert Word to Pdf Online</h1>
                    <p>Easily convert word documents to PDF online. without having to install any software</p>
                    <div className="flex flex-col items-center space-y-4">
                        <input type="file" accept=".doc,.docx" className="hidden" id="FileInput" onChange={handleFileChange} />
                        <label htmlFor="FileInput" className="w-full flex items-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 hover:text-white">
                            <FaFile className="text-3xl mr-3" />
                            <span className="text-3xl mr-2">{selectedFile?selectedFile.name : "Choose File"}</span>
                        </label>
                        <button disabled={!selectedFile} className="text-white bg-blue-500 hover:bg-blue-700 duration-300 disabled:bg-gray-400 disabled:pointer-events-none font-bold px-4 py-2 rounded-lg">Convert File</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
