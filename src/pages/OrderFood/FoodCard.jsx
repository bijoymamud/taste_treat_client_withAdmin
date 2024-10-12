import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = async (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      try {
        const { data } = await axiosSecure.post("/carts", cartItem);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch(); // Update cart count
        }
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    } else {
      Swal.fire({
        text: "You need to log in to add items to your cart.",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <section>
      <div className="card md:w-full md:h-[550px] glass">
        <figure>
          <img className="w-full h-[300px]" src={image} alt={`${name} Image`} />
        </figure>
        <div className="card-body md:max-h-64">
          <h2 className="card-title">{name}</h2>
          <p className="bg-amber-500 text-white absolute right-0 top-0 mr-4 mt-4 p-1 rounded-md cursor-pointer">
            ${price}
          </p>
          <p className="w-full text-sm text-gray-500">{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="relative py-2 px-3 bg-black text-white border hover:border-gray-300 rounded-md mx-auto text-base font-bold cursor-pointer group overflow-hidden"
              aria-label={`Add ${name} to cart`}
            >
              Add To Cart
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 
                group-hover:scale-x-100 transition-transform origin-left duration-500"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-amber-300 rotate-12 transform scale-x-0 
                group-hover:scale-x-100 transition-transform origin-left duration-700"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-amber-600 rotate-12 transform scale-x-0 
                group-hover:scale-x-100 transition-transform origin-left duration-1000"
              ></span>
              <span
                className="absolute right-3  opacity-0 group-hover:opacity-100 
                transition-opacity duration-1000 z-10"
              >
               Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
