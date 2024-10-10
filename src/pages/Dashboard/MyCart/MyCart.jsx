

import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const MyCart = () => {

  const [carts, refetch] = useCart();
  console.log(carts)
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Item has been removed from the cart.",
                  icon: "success",
                });
              }
            });
          }
        });
      };
    

 

  return (
    <div className="max-w-screen-lg w-[80%] mx-auto">
      <div className="flex items-center justify-between my-10">
        <div>
        <h2 className="text-lg font-semibold">Your Items: <span className="text-amber-600 ms-3"> {carts.length}</span></h2>
        <h2 className="text-lg font-semibold">Total Price: <span className="text-amber-600 ms-3">${carts.reduce((total, item) => total + item.price, 0).toFixed(2)}</span></h2>
        </div>

        {carts.length ? (
          <Link to="/dashboard/payment">
          <button className="relative font-semibold px-8 py-2 rounded-sm overflow-hidden group hover:text-white bg-gray-200 border-transparent hover:border-transparent transition-all duration-700">
  <span className="absolute inset-0 bg-green-600 -translate-x-80 group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
  <span className="relative z-10">Pay</span>
</button>



          </Link>
        ) : (
          <button disabled className="btn btn-primary">Pay</button>
        )}
      </div>

      {carts.length === 0 ? (
        <p className="text-center text-xl">No items in your cart.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-base">#</th>
                <th className="text-base">Image</th>
                <th className="text-base">Name</th>
                <th className="text-base">Price</th>
                <th className="text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, index) => (
                <tr key={item._id}>
                  <th className="text-base">{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base">{item.name}</td>
                  <td className="text-base">$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className=""
                    >
                      <FaTrashAlt className="text-black hover:text-red-600 text-lg" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCart;