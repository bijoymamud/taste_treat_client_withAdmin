import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import SingleDisserts from "./SingleDisserts";


const Defferts = ({ title }) => {


  const [menu, loading] = useMenu()

  if (loading) {
    return <span className="loading loading-bars loading-lg mx-auto text- flex items-center"></span>
  }

  const dessert = menu.filter(infoDessert => infoDessert.category === "dessert");







  return (
    <section>
      <div className="md:mb-24 mt-10">
        <div className="hero min-h-96 bg-fixed " style={{ backgroundImage: 'url(https://i.postimg.cc/Pf6dzRHm/chef-service.jpg) ' }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content " >
            <div className="max-w-2xl rounded-md md:rounded-none   md:py-10 bg-opacity-40 bg-black ">
           

              <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">DESSERTS</h3>
              <p className="w-2/3 mx-auto mt-5">Treat yourself to the finest desserts, where every piece is a work of art and a taste of paradise.</p>



              <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black "></p>

            </div>
          </div>
        </div>
      </div>




      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          dessert.map((singleDessert) => <SingleDisserts key={singleDessert} singleDessert={singleDessert}></SingleDisserts>)
        }
      </div>
      <div className=" text-center "><Link to={`/order/${title}`} className="uppercase btn btn-secondary   bg-gradient-to-r  hover:from-yellow-500 hover:to-pink-500  border-none from-green-400 to-blue-500">ORDER NOW</Link></div>

    </section>
  );
};

export default Defferts;