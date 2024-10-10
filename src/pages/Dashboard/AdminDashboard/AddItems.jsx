import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FaTrash } from "react-icons/fa";

const fileTypes = ["JPG", "PNG", "GIF"];

const ImageUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://semantic-ui.com/images/wireframe/image.png"); // Default image before upload

  const handleChange = (file) => {
    setFile(file);
    setImageUrl(URL.createObjectURL(file)); // Set the uploaded image
  };

  const handleDelete = () => {
    setFile(null);
    setImageUrl("/default-image.png"); // Reset to default image
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* Left side with image, file name and delete button */}
      <div className="relative w-48">
        {/* Image container */}
        <div className="w-52 h-52 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="object-cover w-full h-full"
          />
          {file && (
            <button
              onClick={handleDelete}
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              <FaTrash size={14} />
            </button>
          )}
        </div>

        {/* File name */}
        {file && (
          <p className="mt-2 text-gray-700 text-center">{file.name}</p>
        )}
      </div>

      {/* Right side for file upload */}
      <div className="border border-dashed border-gray-400 rounded-lg p-5 w-full max-w-lg ml-8">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={false}
        >
          <div className="text-center cursor-pointer p-6 bg-gray-100 border border-dashed border-gray-300 rounded-lg hover:bg-gray-200">
            
            
            <p className="text-gray-600">
              Drop your images here, or{" "}
              <span className="text-blue-500">click to browse</span>
            </p>
            <p className="text-gray-400">
              1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
              allowed.
            </p>
          </div>
        </FileUploader>
      </div>
    </div>
  );
};

export default ImageUploadComponent;
