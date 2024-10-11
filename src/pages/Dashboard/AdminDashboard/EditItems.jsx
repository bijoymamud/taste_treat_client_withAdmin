import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FaTrash } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";

const fileTypes = ["JPG", "PNG", "GIF"];

const EditItems = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://semantic-ui.com/images/wireframe/image.png"); // Default image before upload

  const handleChange = (file) => {
    setFile(file);
    setImageUrl(URL.createObjectURL(file)); // Set the uploaded image
  };

  const handleDelete = () => {
    setFile(null);
    setImageUrl("https://semantic-ui.com/images/wireframe/image.png"); // Reset to default image
  };

  return (
      <section className="pt-10 ">
          <h2 className=" text-2xl font-bold pb-5">Update Items</h2>
      <div className="flex justify-center items-center mb-8">
        {/* Left side with image, file name, and delete button */}
        <div className="relative w-64 mr-8">
          {/* Image container */}
          <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
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
          {/* {file && (
            <p className="mt-2 text-gray-700 text-center">{file.name}</p>
          )} */}
        </div>

        {/* Right side for file upload */}
        <div className="drop-shadow-lg rounded-lg p-5 w-full max-w-lg flex-shrink-0">
          <h1 className="py-2 bg-gray-100 mb-3 px-2 rounded-sm">Re-Select Item Photo</h1>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            multiple={false}
          >
            <div className="text-center cursor-pointer p-6 bg-gray-100 border-x-2 border-orange-500 rounded-lg hover:bg-gray-200">
              <ImFolderUpload className="mx-auto text-5xl mb-3 text-orange-500" />
              
              {/* Conditionally render upload message or success message */}
              {file ? (
                <p className="text-green-600 text-lg">
                  Successfully uploaded!
                </p>
              ) : (
                <>
                  <p className="text-gray-600">
                    Drop your images here or{" "}
                    <span className="text-blue-500">click to browse</span>
                  </p>
                  <p className="text-gray-400 text-xs">
                    1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
                    allowed.
                  </p>
                </>
              )}
            </div>
          </FileUploader>
        </div>
          </div>
          
          <div className="p-5 py-10 bg-base-100">
      {/* Product Name and Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input
            type="text"
            placeholder="Name of Dish or Drinks"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Categories</span>
          </label>
          <select className="select select-bordered w-full ">
                <option disabled selected >Select Category</option>
                <option>Pizza</option>
                <option>Dessert</option>
                <option>Salad</option>
                <option>Soup</option>
                <option>Drinks</option>
        </select>
        </div>
      </div>

      {/* Brand */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="Larkon Fashion"
            className="input input-bordered w-full"
          />
        </div>
      </div> */}

    
      

      {/* Description */}
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Enter description about selected food..."
        ></textarea>
      </div>


      {/* Price, Discount, and Tax */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="$ Price"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount</span>
          </label>
          <input
            type="number"
            placeholder="$ Discount"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tax</span>
          </label>
          <input
            type="number"
            placeholder="$ Tax"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>

          
    </section>
  );
};

export default EditItems;

