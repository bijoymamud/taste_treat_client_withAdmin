import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import SinglePizza from "./SinglePizza";
import Button from "../../components/Button/Button";


const Pizza = ({ title }) => {

  const [menu] = useMenu();


  // if (loading) {
  //   return <span className="loading loading-bars loading-lg mx-auto text- flex items-center"></span>
  // }


  const pizza = menu.filter(infoPizza => infoPizza.category === "pizza");


  return (
    <section>
      <div className="md:mb-24 mt-10">
        <div className="hero min-h-96 bg-fixed " style={{ backgroundImage: 'url(https://images.pexels.com/photos/3761662/pexels-photo-3761662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) ' }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content " >
            <div className="max-w-2xl rounded-md md:rounded-none   md:py-10 bg-opacity-40 bg-black ">
              

              <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">PIZZA</h3>
              <p className="w-2/3 mx-auto mt-5">At our pizzeria, we're more than just a place to grab a slice. We're purveyors of tradition, craftsmen of flavor, and champions of community.</p>



              <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black "></p>

            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          pizza.map((infoPizza) => <SinglePizza key={infoPizza} infoPizza={infoPizza}></SinglePizza>)
        }
      </div>

      <div className=" text-center ">
      <Link to={`/order/${title}`}>
        <Button  value={ 'Order Now'} />
      </Link>
      </div>

    </section>
  );
};

export default Pizza;

