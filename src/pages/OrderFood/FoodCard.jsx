
import { useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {

  const { name, image, price, recipe, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure()


  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {


      const cartItem =
      {
        menuItemId: _id,
        name,
        image,
        price,

        email: user.email
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added to your cart`,
                  showConfirmButton: false,
                  timer: 1500
              });
              // refetch cart to update the cart items count
              refetch();
          }

      })
}
    else {
      Swal.fire({

        text: "You won't be able to revert this!",

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }

  }
  return (
    <section className="">
      <div className="card md:w-full md:h-[550px] glass ">
        <figure><img className="w-full h-[300px]" src={image} alt="Food Image" /></figure>
        <div className="card-body md:max-h-64">
          <h2 className="card-title">{name}</h2>
          <p className="bg-amber-500 text-white absolute right-0 top-0 mr-4 mt-4 p-1 rounded-md cursor-pointer">${price}</p>
          <p className="w-full">{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn mt-5 btn-primary mx-auto text-center uppercase text-white">Add to cart</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodCard;