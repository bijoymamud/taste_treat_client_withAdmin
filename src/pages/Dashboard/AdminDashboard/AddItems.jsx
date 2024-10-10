import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const AddItems = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    setFile(file);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="max-w-full h-auto object-cover"
        />
      </div>

      {/* Drag and Drop + Input Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center p-4 bg-gray-100 rounded-lg">
        <FileUploader
          handleChange={handleFileChange}
          name="file"
          types={fileTypes}
          multiple={false}
        />
        <p className="mt-2 text-sm text-gray-600">
          {file ? `File: ${file.name}` : "Drag & drop or click to upload"}
        </p>

        {/* Input Fields */}
        <div className="mt-4 w-full">
          <input
            type="text"
            placeholder="Item Name"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="number"
            placeholder="Item Quantity"
            className="w-full p-2 border border-gray-300 rounded-md mb-3"
          />
          <input
            type="text"
            placeholder="Item Description"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default AddItems;
